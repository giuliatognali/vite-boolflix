<script>
//import component from node modules
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'CardApp',
    data() {
        return {
            urlImg: "https://image.tmdb.org/t/p/w342"
        }
    },
    components: {
        CountryFlag
    },
    props: {
        info: Object
    },
    computed: {
        getLang() {
            switch (this.info.original_language) {
                case "en":
                    return "us";
                case "ko":
                    return "kp";
                case "zh":
                    return "cn";
                case "ja":
                    return "jp"
                default:
                    return this.info.original_language;
            }
        },
        title() {
            return this.info.title || this.info.name;
        },
        originaleTitle() {
            this.info.original_title || this.info.original_name;
        },
        getVote(){
            return Math.ceil(this.info.vote_average / 2);

        }
    }
}
</script> 


<template>
    <div>
        <h2>{{ title }}</h2>
        <h3>{{ originaleTitle }}</h3>
        <div>
            <CountryFlag :country='getLang' size='normal' />
        </div>
        <div>{{ getVote }}</div>
        <div v-for="n in 5">{{  }}</div>
        <font-awesome-icon icon="fa-solid fa-star"  v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-getVote"/>
        <div>
            <img :src="urlImg + info.poster_path" :alt="title"> 
        </div>
    </div>
</template>

 

<style lang="scss" scoped></style>