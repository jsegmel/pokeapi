let url='https://pokeapi.co/api/v2/pokemon/3333'
fetch(url)
.then(response => response.json())
.then(data => mostrarPokemon(data) )
.then(error=>console.log(error))


const mostrarPokemon=(data)=>{
    console.log(data.name)
}