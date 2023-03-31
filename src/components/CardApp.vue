<script>
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
                    return "gb";
                case "ko":
                    return "kp";
                case "zh":
                    return "cn";
                case "ja":
                    return "jp"
                default:
                    return this.info.original_language;
            }
        }
    }
}
</script> 


<template>
    <div>
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <!--         <div>{{ info.original_language }}</div> -->
        <div><country-flag :country='getLang' size='normal' /></div>

        <div>{{ info.vote_average }}</div>
    </div>
</template>

 

<style lang="scss" scoped></style>