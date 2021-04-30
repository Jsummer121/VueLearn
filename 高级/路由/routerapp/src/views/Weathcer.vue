<template>
    <div>
        <h1>天气</h1>
        <h2>城市：{{$route.params.city}}</h2>
        <h3>温度：{{temp}}℃</h3>
        <h3>风向：{{windDir}}</h3>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Weathcer',
        data(){
            return{
                temp: '',
                windDir: ''
            }
        },
        async beforeMount() {
            console.log(this)
            let key = 'c9a2d285d903400bb38d25489761e26a'
            let getCityLocUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${this.$route.params.city}&key=${key}`
            let cityLocRes = await axios.get(getCityLocUrl)
            let cityId = cityLocRes.data.location[0].id
            let getWeatherUrl = `https://devapi.qweather.com/v7/weather/now?location=${cityId}&key=${key}`
            let CityWeatherRes = await axios.get(getWeatherUrl)
            this.temp = CityWeatherRes.data.now.temp
            this.windDir = CityWeatherRes.data.now.windDir
        }
    }
</script>

<style scoped>

</style>
