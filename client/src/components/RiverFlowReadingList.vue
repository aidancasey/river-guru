<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Latest Flow Readings Inniscarra Dam</v-card-title>

        <v-data-table
          :headers="headers"
          :items="flowReadings"
          disable-pagination
          :hide-default-footer="true"
        >
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import RiverDataService from "../services/RiverDataService";
export default {
  name: "flowReadings-list",
  data() {
    return {
      flowReadings: [],
      title: "",
      headers: [
        { text: "River", align: "start", sortable: false, value: "river" },
        { text: "Reading", value: "reading", sortable: false },
        { text: "RecordedAt", value: "recordedAt", sortable: false }
      ],
    };
  },
  methods: {
    retrieveFlowReadings() {
      RiverDataService.getAll()
        .then((response) => {
            console.log(response);
          this.flowReadings = response.data.map(this.getDisplayFlowReading);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFlowReadings();
    },

/*     searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.flowReadings = response.data.map(this.getDisplayFlowReading);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, */

    getDisplayFlowReading(reading) {
      return {
        id: reading.id,
        river: reading.river,
        reading: reading.reading,
        recordedAt: reading.recordedAt
      };
    },
  },
  mounted() {
    this.retrieveFlowReadings();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>