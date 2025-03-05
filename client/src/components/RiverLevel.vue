<template>
  <div>
    <h2 v-if="displayHeading" class="location-heading">{{ displayHeading }}</h2>
    <div class="time-range-selector">
      <button 
        :class="{ active: timeRange === '12h' }" 
        @click="setTimeRange('12h')"
      >
        12 Hours
      </button>
      <button 
        :class="{ active: timeRange === '1w' }" 
        @click="setTimeRange('1w')"
      >
        1 Week
      </button>
    </div>
    <div class="chart-wrapper">
      <div v-if="currentLevel" class="current-level">
        Current Level: {{ currentLevel }} m
      </div>
      <div class="chart-container">
        <WaterLevelChart
          v-if="chartData"
          :data="chartData"
          :options="getChartOptions()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

// Dynamic import of chart components
const WaterLevelChart = () => import('vue-chartjs').then(m => m.Line)
const registerChartComponents = async () => {
  const { 
    Chart: ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  } = await import('chart.js')

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  )
}

export default {
  name: 'RiverLevel',
  components: {
    WaterLevelChart
  },
  props: {
    displayHeading: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      timeRange: '12h',
      chartData: null,
      currentLevel: null,
      chartRegistered: false
    }
  },
  methods: {
    formatDate(dateString, isWeekView = false) {
      const date = parseISO(dateString)
      return isWeekView 
        ? format(date, 'dd/MM HH:mm')
        : format(date, 'HH:mm')
    },
    getChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Time'
            },
            grid: {
              display: false
            },
            ticks: {
              maxTicksLimit: this.timeRange === '12h' ? 12 : 14,
              callback: (_, index) => {
                const labels = this.chartData?.labels || [];
                if (!labels[index]) return '';
                return this.formatDate(labels[index], this.timeRange === '1w')
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Water Level (m)'
            },
            grid: {
              display: true
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            position: 'top',
            onClick: null
          },
          tooltip: {
            callbacks: {
              title: (context) => {
                return format(parseISO(context[0].label), 'PPpp')
              }
            }
          }
        }
      }
    },
    setTimeRange(range) {
      this.timeRange = range;
      this.fetchData();
    },
    async fetchData() {
      if (!this.chartRegistered) {
        await registerChartComponents()
        this.chartRegistered = true
      }

      try {
        const timestamp = Date.now()
        const response = await fetch(`/api/levels/lee/ovens/latest?_t=${timestamp}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const readings = await response.json()
        
        if (!Array.isArray(readings) || readings.length === 0) {
          console.warn('No water level readings available')
          return
        }

        const now = new Date()
        const timeRangeMs = this.timeRange === '12h' 
          ? 12 * 60 * 60 * 1000
          : 7 * 24 * 60 * 60 * 1000
        const rangeStart = new Date(now.getTime() - timeRangeMs)
        
        const validReadings = readings
          .filter(reading => new Date(reading.recordedAt) > rangeStart)
          .sort((a, b) => new Date(a.recordedAt) - new Date(b.recordedAt))

        if (validReadings.length === 0) {
          console.warn(`No water level readings found in the selected time range`)
          return
        }

        this.currentLevel = validReadings[validReadings.length - 1].value.toFixed(3)

        const labels = validReadings.map(reading => reading.recordedAt)
        const values = validReadings.map(reading => reading.value)

        this.chartData = {
          labels,
          datasets: [
            {
              label: 'Water Level (m)',
              data: values,
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.5)',
              borderWidth: 2,
              fill: {
                target: 'origin',
                above: 'rgba(76, 175, 80, 0.5)'
              },
              tension: 0.4
            }
          ]
        }
      } catch (error) {
        console.error('Error fetching water level data:', error.message)
      }
    }
  },
  async mounted() {
    this.fetchData()
    setInterval(this.fetchData, 5 * 60 * 1000)
  }
}
</script>

<style scoped>
.location-heading {
  font-size: 2rem;
  font-weight: 300;
  color: #2c3e50;
  margin: 1.5rem 0;
  text-align: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.time-range-selector {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}

.time-range-selector button {
  padding: 0.5rem 1rem;
  border: 1px solid #4CAF50;
  background: white;
  color: #4CAF50;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.time-range-selector button.active {
  background: #4CAF50;
  color: white;
}

.time-range-selector button:hover {
  background: #E8F5E9;
}

.time-range-selector button.active:hover {
  background: #388E3C;
}

.chart-wrapper {
  position: relative;
}

.current-level {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chart-container {
  height: 400px;
  width: 100%;
}
</style>
