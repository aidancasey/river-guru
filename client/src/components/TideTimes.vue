<template>
      <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          Tide Time {{ location }}
        </p>
      </v-card-text>
      
 <v-list class="transparent">
        <v-list-item
          v-for="item in tides"
          :key="item.id"
        >
  
<v-list-item-subtitle class="text-left">
            {{ item.hilo }}
          </v-list-item-subtitle>
 

<v-list-item-subtitle class="text-right">
            {{ formatDate(item.time) }}
          </v-list-item-subtitle>
  
          <v-list-item-subtitle class="text-right">
            {{ item.height }} m
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn text>
          Full Report
        </v-btn>
      </v-card-actions>


    </v-card>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  methods: {
  formatDate(value) {
    return this.$luxon(value, "HH:mm")
  }
  },

  data() {
    return {
      tides :[
        {"id":11,"location":"cork","height":1.3,"hilo":"low","time":"2021-03-09T21:28:00.000Z","createdAt":"2021-03-09T21:29:45.903Z","updatedAt":"2021-03-09T21:29:45.903Z"},
        {"id":10,"location":"cork","height":3.6,"hilo":"high","time":"2021-03-09T14:41:00.000Z","createdAt":"2021-03-09T21:29:45.902Z","updatedAt":"2021-03-09T21:29:45.902Z"},
        {"id":8,"location":"cork","height":1.4,"hilo":"low","time":"2021-03-09T08:52:00.000Z","createdAt":"2021-03-09T21:29:45.900Z","updatedAt":"2021-03-09T21:29:45.900Z"},
        {"id":9,"location":"cork","height":3.7,"hilo":"high","time":"2021-03-09T01:57:00.000Z","createdAt":"2021-03-09T21:29:45.901Z","updatedAt":"2021-03-09T21:29:45.901Z"}
      ]
    }
  }
}
</script>
