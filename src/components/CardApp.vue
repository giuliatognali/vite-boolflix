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
        original_Title() {
            return this.info.original_title || this.info.original_name;
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script> 


<template>
    <article class="ms-card">
        <!-- container img -->
        <div class=" container-img">
            <img v-if="info.poster_path === null" src="/img/img-not-found.jpg" :alt="title">
            <img v-else :src="urlImg + info.poster_path" :alt="title">
        </div>
        <!-- container info -->
        <div class="container-info">
            <h2>{{ title }}</h2>
            <h3>{{ original_Title }}</h3>
            <div class="icons d-flex align-items-center justify-content-between">
                <div class="lang">
                    <CountryFlag :country='getLang' size='medium' />
                </div>
                <div class="vote">
                    <span> Valutazione:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
                </div>
            </div>
            <div class="overview overflow-auto ">
                <p> {{ info.overview }}</p>
            </div>
        </div>

    </article>
</template>


<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

.ms-card {
    color: $secondary-color;
    position: relative;

    .container-img {
        position: relative;
        z-index: 2;

        img {
            width: 100%;
            opacity: 0.2;

            &:hover {
                z-index: 0;
            }
        }

        &:hover {
            opacity: 0.2;
            transition: 0.5s;
            z-index: 0;
        }

    }



    .container-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid $secondary-color;
        padding: 10px 20px;

        h2{
            font-weight: 600;
            padding-top: 10px;
        }

        h3 {
            font-size: 20px;
        }

        .vote {
            color: gold;
            span{
                color: $secondary-color;
                padding-right: 5px
            }
        }

        .overview {
            max-height: 300px;
            z-index: 3;

        }
    }
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb {
    background: $secondary-color;
    border-radius: 3px;
}
</style>