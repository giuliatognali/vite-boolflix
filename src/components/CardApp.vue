<script>
import { store} from '../store'; 
export default {
    name: 'CardApp',
    props:{
        info: Object
    },
    data(){
        return{
            store
        }
    }

}
</script> 


<template>
    <div>
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <div>{{info.original_language}}</div>
        <div>{{ info.vote_average }}</div>
    </div>
</template>

 

<style lang="scss" scoped></style>