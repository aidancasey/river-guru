<template>
  <v-card height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-subtitle class="title text-center"
        >{{ displayLocation }} Tide Times</v-card-subtitle
      >
      <v-card-subtitle class="subheading text-center"
        >{{ today }}
      </v-card-subtitle>
    </v-card-text>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Tide
            </th>
            <th class="text-center">
              Time
            </th>
            <th class="text-left">
              Height
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tides" :key="item.id">
            <td class="text-left">{{ item.hilo }}</td>
            <td class="text-center">{{ formatDate(item.time) }}</td>
            <td class="text-left">{{ item.height }} m</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  import RiverDataService from "../services/RiverDataService";

  export default {
    props: {
      location: {
        type: String,
        required: false,
      },
      displayLocation: {
        type: String,
        required: false,
      },
      icon: {
        type: String,
        required: false,
      },
      color: {
        type: String,
        required: false,
      },
    },
    methods: {
      formatDate(value) {
        return this.$luxon(value, "HH:mm");
      },
      getTideData() {
        RiverDataService.getLatestTideTimes(this.$props.location)
          .then((response) => {
            var results = response.data;
            results.reverse();
            this.tides = results;
            this.today = this.$luxon(results[0].time, "DDDD");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.getTideData();
    },

    data() {
      return {
        tides: [],
        today: "foo",
      };
    },
  };
</script>
