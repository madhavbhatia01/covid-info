<template>
  <main v-if="!loading" class="mb-10">
    <DataTitle :text="title" :dataDate="dataDate" />

    <DataBoxes :stats="stats" />

    <CountrySelect @get-country="getCountryData" :countries="countries" />

    <div class="text-center">
      <button @click="clearCountryData" v-if="stats.Country" class="bg-gray-700 text-white mt-6 p-3 rounded hover:bg-gray-600">
        Clear Country
      </button>
    </div>
    
  </main>
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-3xl text-gray-500 mt-10 mb-6 font-mono">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>

<script>
// @ is an alias to /src
import DataTitle from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  data(){
    return{
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  methods: {
    async fetchData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country){
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData(){
      this.loading = true;
      const data = await this.fetchData();
      this.title = 'Global';
      this.stats = data.Global;
      this.loading = false;

    }
  },
  async created(){
    const data = await this.fetchData()
    
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  }
}
</script>
