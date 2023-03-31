<script>
//import component from node modules
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'CardApp',
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
        title(){
            return this.info.title || this.info.name;
        },
        originaleTitle(){
            this.info.original_title || this.info.original_name;
        }
    }
}
</script> 


<template>
    <div>
        <h2>{{ title }}</h2>
        <h3>{{ originaleTitle }}</h3>
        <div><country-flag :country='getLang' size='normal' /></div>
        <div>{{ info.vote_average }}</div>
    </div>

    
</template>

 

<style lang="scss" scoped></style>