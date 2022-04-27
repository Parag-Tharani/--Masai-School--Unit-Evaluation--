var container = document.querySelector('#container');
var display = document.querySelector('#display')

if (localStorage.getItem('pokemon') == null) {
    pokemon();
    setTimeout(displayname, 1000)
} else {
    console.log('data stored already')
    displayData()
}

async function pokemon(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    let data = await res.json();

    var arr = []
    data.results.forEach(ele => {
    arr.push(ele.name)
    });
    localStorage.setItem('pokemon', JSON.stringify(arr))
    }

    function displayData(){
        var data = JSON.parse(localStorage.getItem("pokemon"))
        data.forEach(ele =>{
            var box = document.createElement("div");
            box.innerHTML = `<div>${ele}</div>`
        
        container.append(box)
        })
    }
    

    var searchData = document.querySelector("#search")
    function search(){
        async function getinfo() {
            var res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchData.value}`)
            var data = await res.json();


            var box = document.createElement('div')


            var name = searchData.value;
            var id = data.id;
            var height = data.height;
            var weight = data.weight;

            var ability = [];
            data.abilities.forEach(element => {
                ability.push(element.ability.name)
            });

            var move = [];
            data.moves.forEach(element => {
                move.push(element.move.name)
            });

            var info = 
            `
                <h1>ID : ${id}</h1>
                <h1>Pokemon Name : ${searchData.value}</h1>
                <h2>Pokemon Height : ${height}</h2>
                <h2>Pokemon Weight : ${weight}</h2>
                <h3>Pokemon Abilities : </h3>
                <p>${ability.join(',')}</p>
                <h3>Pokemon Moves : </h3>
                <p>${move.join(',')}</p>
            `
            box.innerHTML = info;
            display.append(box)
        }
        getinfo()
    }