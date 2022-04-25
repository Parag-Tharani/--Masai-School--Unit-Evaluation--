async function pokemon(){

    var res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    let data = await res.json();
    console.log("data:",data.results)
}

pokemon();