<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form>
      <h1>Buscador</h1>
      <label for="txtPokemon">Ingrese Id Pokemon (1-200)</label>
      <input type="number" id="txtPokemon" v-model="pokemon_id">
      <button v-on:click="search">Buscar</button>
    </form>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  },
  data:function(){
    return{
      pokemon_id: 0,
    }
  },
  methods:{
    search:function(){
      // evaluamos si la variable está vacia para retornar el control al formulario
      // es decir, finalizá el trabajo de el método search
      if(this.pokemon_id === "") 
        return
      this.$router.push(`/pokemon/${this.pokemon_id}`);
    },

  }

}
</script>

<style scoped>
  form{
    border: 2px solid #42b983;
    padding-bottom: 20px;
    width: 60%;
    margin: 0 auto;
  }
</style>
