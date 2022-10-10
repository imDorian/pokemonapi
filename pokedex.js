
//CONTAINER, TITLE, SEARCH & POKEDEX

//ContainerPrin, title and pokedex(not pokemonS)
const gallery$$ = document.createElement("div");
gallery$$.setAttribute("class", "container")
const title$$= document.createElement("img")
title$$.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" )
title$$.setAttribute("class","title")
gallery$$.appendChild(title$$)
const list$$=document.createElement("ul")
list$$.setAttribute("id","pokedex")
gallery$$.appendChild(list$$)
document.body.appendChild(gallery$$)

//search
let pokemons = [];
const divSearch$$=document.createElement("div");
divSearch$$.setAttribute("class", "divSearch")
const input$$ = document.createElement("input");
divSearch$$.appendChild(input$$)
input$$.setAttribute("type","text")
input$$.setAttribute("id","search");
input$$.setAttribute("placeholder", "¡Encuentra tu Pokémon Favorito!")
title$$.after(divSearch$$)

//event search
input$$.addEventListener("input", ()=>search(input$$.value))

//function search
const search = (name)=>{
    const misFiltrados =  pokemons.filter(pokemon => pokemon.name.includes(name) )

    list$$.textContent = "";
    for (const pokemon of misFiltrados) {
       nombres$$(pokemon)
    }
}

//API, FETCH & FUNCTION FOR THEN

//api
const api$$="https://pokeapi.co/api/v2/pokemon/"

//for, fetch & then
let count = 0
for (let i = 0; i < 151; i++) {
    count++

fetch(api$$ + count)
.then((response) => {
    return response.json();
})
.then((myJson)=> {
    nombres$$(myJson);
    pokemons = [...pokemons, myJson];
    console.log(myJson)
})}
    
//function all content
const nombres$$ = (element) =>{

    const nombres = element.name
    const li$$ = document.createElement("li");
    li$$.setAttribute("class","card")
    const contImg$$=document.createElement("div");
    contImg$$.setAttribute("class", "contImg")
    const h3$$= document.createElement("h3")
    h3$$.setAttribute("class","pokeTitle")
    h3$$.textContent=nombres
    const id = element.id;
    const id$$ = document.createElement("h4");
    id$$.setAttribute("class", "id");
    id$$.textContent="Nº" + id;

    
    //img front-back
    const imgPoke=element.sprites.other.dream_world.front_default;
    const imgBack=element.sprites.front_shiny;
    //const imgPokeBack= notImportant.black-white.animated.front_default;
    const img= document.createElement("img");
    const imgBack$$=document.createElement("img");
    const cardCont$$ = document.createElement("div"); 
    const height=element.height;
    cardCont$$.appendChild(id$$)
    imgBack$$.setAttribute("class", "imgBack");
    img.setAttribute("src", imgPoke)
    img.setAttribute("class", "imgFront");
    cardCont$$.setAttribute("class", "cardCont")
    cardCont$$.appendChild(h3$$);
    contImg$$.appendChild(img)
    cardCont$$.appendChild(contImg$$)
    li$$.appendChild(cardCont$$)
    list$$.appendChild(li$$);

    //Back content
    //const imgBackCont$$ = document.createElement("div");
    
    imgBack$$.setAttribute("src", imgBack);
    
    const backCont$$ = document.createElement("div");
    backCont$$.setAttribute("class","backCont");
    backCont$$.style.display = "none";
    const typeCont$$ = document.createElement("div");
    typeCont$$.setAttribute("class", "typeCont");
    backCont$$.appendChild(typeCont$$);
    //backCont$$.appendChild(imgBack);
    backCont$$.appendChild(imgBack$$)
    //Height & weight
    const height$$ = document.createElement("span");
    height$$.setAttribute("class","height");
    height$$.textContent= "Height: " + height /10 + "m";
    backCont$$.appendChild(height$$);
    const weight = element.weight;
    const weight$$ = document.createElement("span");
    weight$$.textContent="Weight: " + weight/10 +"kg";
    backCont$$.appendChild(weight$$);
    li$$.appendChild(backCont$$);
    weight$$.setAttribute("class", "weight")

    //Type forof
    const typeTitle$$ = document.createElement("span")
    typeTitle$$.setAttribute("class", "typeTitle");
    typeTitle$$.textContent="Type:";
    typeCont$$.appendChild(typeTitle$$)
    backCont$$.appendChild(typeCont$$)
    
    
    for (const types of element.types) {
        let type = types.type.name;
        // console.log(type);
        const type$$ = document.createElement("span");
        type$$.setAttribute("class", "type")
        type$$.textContent = type;
        typeCont$$.appendChild(type$$)
    
    }
    

    //Abilities foror
    const abiTitle$$=document.createElement("span");
    abiTitle$$.setAttribute("class","abiTitle")
    abiTitle$$.textContent="Abilities:"
    backCont$$.appendChild(abiTitle$$)
    for (const ability of element.abilities) {
        const nameAbility = ability.ability.name;
        const ability$$ = document.createElement("span");
        ability$$.setAttribute("class", "ability");
        ability$$.textContent=nameAbility;
        backCont$$.appendChild(ability$$)
        // console.log(nameAbility)
    }

    //Event for Card
    cardCont$$.addEventListener("click", () => disBack(cardCont$$, backCont$$))
    backCont$$.addEventListener("click", () => disFront(cardCont$$, backCont$$))

    
}
//END FUNCTION NOMBRES$$


//FUNCTION FOR EVENT OF CARD
const disBack = (element1, element2)=>{
    element1.style.display = "none";
    element2.style.display = "flex";
    // console.log(disBack)
}
const disFront = (element1, element2)=>{
    element1.style.display = "flex";
    element2.style.display = "none"
    // console.log(disFront)
}





