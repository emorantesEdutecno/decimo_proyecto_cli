<template>
    <div id="NotFound">
        <h1>Componente NotFound</h1>
        <h3>Página No encontrada</h3>
        <router-link to="/">Volver a Home</router-link>

    </div>
</template>

<script>
export default{
    name:'NotFound',
    data: function(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
#NotFound{
    background-color: darksalmon;
}
</style>