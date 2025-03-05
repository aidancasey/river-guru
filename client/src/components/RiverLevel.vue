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
import { Line as WaterLevelChart } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
)

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
      currentLevel: null
    }
  },
  methods: {
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
              display: false  // Hide vertical grid lines
            },
            ticks: {
              maxTicksLimit: this.timeRange === '12h' ? 12 : 14,
              callback: (_, index) => {
                const labels = this.chartData?.labels || [];
                if (!labels[index]) return '';
                
                const date = new Date(labels[index]);
                if (this.timeRange === '1w') {
                  return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
                } else {
                  return date.toLocaleTimeString([], { 
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false 
                  });
                }
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Water Level (m)'
            },
            grid: {
              display: true  // Keep horizontal grid lines
            }
          }
        },
        plugins: {
          legend: {
            display: false,  // Hide the legend
            position: 'top',
            onClick: null  // Disable click handling
          },
          tooltip: {
            callbacks: {
              title: (context) => {
                return new Date(context[0].label).toLocaleString()
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
      try {
        const timestamp = new Date().getTime()
        console.log('Fetching water level data...')
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
        console.log('Raw API response:', readings)
        console.log('Response status:', response.status)
        
        if (!Array.isArray(readings) || readings.length === 0) {
          console.warn('No water level readings received')
          return
        }

        // Calculate time range based on selection
        const now = new Date()
        const timeRangeMs = this.timeRange === '12h' 
          ? 12 * 60 * 60 * 1000  // 12 hours
          : 7 * 24 * 60 * 60 * 1000  // 1 week
        const rangeStart = new Date(now.getTime() - timeRangeMs)
        
        const validReadings = readings
          .filter(reading => new Date(reading.recordedAt) > rangeStart)
          .sort((a, b) => new Date(a.recordedAt) - new Date(b.recordedAt))

        if (validReadings.length === 0) {
          console.warn(`No water level readings found in the last ${this.timeRange}`)
          return
        }

        // Update current level with the latest reading
        this.currentLevel = validReadings[validReadings.length - 1].value.toFixed(3)

        console.log('First reading:', validReadings[0])
        console.log('Last reading:', validReadings[validReadings.length - 1])
        console.log('Number of readings:', validReadings.length)

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
        console.error('Error fetching water level data:', error)
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        })
      }
    }
  },
  mounted() {
    this.fetchData()
    // Refresh data every 5 minutes
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
  top: 20%;  /* Position at 20% from the top of the chart */
  left: 50%;
  transform: translate(-50%, -50%);  /* Center both horizontally and vertically */
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chart-container {
  height: 400px;
  width: 100%;
}
</style>
