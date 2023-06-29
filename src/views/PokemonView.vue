<template>
    <div id="PokemonView">
        <h1>Componente PokemonView</h1>
        <h4>Id del pokemon: {{ id }}</h4>
        <p>Nombre del Pokemon: {{ name }}</p>
        <p>Habilidad 1 Pokemon: {{  habilidad1 }}</p>
        <img v-bind:src="image" v-bind:alt="name" > <br>
        <router-link to="/">Volver a Home</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'PokemonView',
    props:['id'],
    data:function(){
        return{
            name:'',
            image:'',
            habilidad1:'',
        }
    },
    methods:{
        fetchPokemon: function(){
            // pasamos el prop a la url que será consumida
            let url =`https://pokeapi.co/api/v2/pokemon/${this.id}`;
            axios.get(url)
                .then(respuesta=>{
                    console.log(respuesta);
                    this.setData(respuesta.data);
                })
                .catch(error=>{
                    console.log(error);
                });
        },
        setData(data){
            this.name= data.name;
            this.image= data.sprites.front_default;
            this.habilidad1 = data.abilities[1].ability.name;
        }
    },
    //hook
    created(){
        this.fetchPokemon();
    },
}
</script>

<style scoped>
 #PokemonView{
    background-color: darkolivegreen;
    color:wheat;
 }
</style>