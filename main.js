let url='https://pokeapi.co/api/v2/pokemon?limit=20'
fetch(url)
.then(response => response.json())
.then(data => console.log(data));


const mostrarData= data.map( (pokemon)=>{
  return pokemon
})


console.log(mostrarData[5])

