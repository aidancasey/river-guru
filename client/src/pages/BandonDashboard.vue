<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
     <!--  <v-flex d-flex lg3 sm6 xs12>
        <widget icon="domain" title="1,287,687" subTitle="13%"  color="#00b297"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="money_off" title="$141,291" subTitle="117,212"  color="#dc3545"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="computer" title="33.45%" subTitle="111"   color="#0866C6"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="watch_later" title="13.00%" subTitle="222"  color="#1D2939"/>
      </v-flex> -->
      <!-- Widgets Ends -->
      <!-- Statistics -->
       <v-flex d-flex lg4 sm6 xs12>
        <tide-times location="Cork City"/>
      </v-flex> 
      <v-flex d-flex lg4 sm6 xs12>
        <weather location="Placeholder Cork City Weather"/>
      </v-flex> 
            <v-flex d-flex lg4 sm6 xs12>
        <river-level river ="bandon" location="curranure"/>
      </v-flex> 
     <!--  <v-flex d-flex lg4 sm6 xs12>
        <total-earnings-statistic/>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <total-earnings-statistic/>
      </v-flex> -->
      <!-- Statistics Ends -->
         </v-layout>
  </v-container>
</template>

<script>
import TideTimes from '../components/TideTimes.vue'

export default {
  components: { TideTimes },
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  }
}
</script>

<style>

</style>
