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
        <div>{{ info.vote_average }}</div>
        <!-- aggiungere caso in cui non c'è l'immagine -->
        <div><img :src="urlImg + info.poster_path" :alt="title"> </div>
    </div>
</template>

 

<style lang="scss" scoped></style>