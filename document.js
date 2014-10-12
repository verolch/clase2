function Pokemon(n,v,a,t,d)
{
    
    this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.tipo = t;
	this.debilidad = d;
}

var elegido = prompt("Elige un Pokemon: Rattata, Pikachu o Bulbasaur?", "Escribe su nombre aquí");
	

function inicio()
{
	
	var rattata = new Pokemon("Rattata", 80, 40, "Normal", "Lucha");
	var pikachu = new Pokemon("Pikachu", 100, 55, "Electrico", "Tierra");
	var bulbasaur = new Pokemon("Bulbasaur", 90, 50, "Planta, Veneneno", "Fuego, Volador, Hielo, Psíquico");

	var img = document.createElement("img");

	if(elegido == "Rattata") {

		nombrePokemon.innerText = "Nombre: " + rattata.nombre;
		datosPokemon.innerText = "Tipo: " + rattata.tipo + "\n" + "Tiene una vida de: " + rattata.vida + "\n" + "Su ataque es de: " + rattata.ataque + "\n" + "Su debilidad es: " + rattata.debilidad;

		 img.src = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/019.png"
		 document.getElementById("imagen").appendChild(img);

	}

	else if(elegido == "Pikachu") {

		nombrePokemon.innerText = "Nombre: " + pikachu.nombre;
		datosPokemon.innerText = "Tipo: " + pikachu.tipo + "\n" + "Tiene una vida de: " + pikachu.vida + "\n" + "Su ataque es de: " + pikachu.ataque + "\n" + "Su debilidad es: " + pikachu.debilidad;

		 img.src = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/025.png"
		 document.getElementById("imagen").appendChild(img);

	}

	else if(elegido == "Bulbasaur") {

		nombrePokemon.innerText = "Nombre: " + bulbasaur.nombre;
		datosPokemon.innerText = "Tipo: " + bulbasaur.tipo + "\n" + "Tiene una vida de: " + bulbasaur.vida + "\n" + "Su ataque es de: " + bulbasaur.ataque + "\n" + "Su debilidad es: " + bulbasaur.debilidad;

		 img.src = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"
		 document.getElementById("imagen").appendChild(img);

	}

	else {
		nombrePokemon.innerText = "Desconozco ese Pokemon";
		datosPokemon.innerText = "Recarga la página para volver a intentarlo";
    }




}








