console.log("fetching");

async function getPokemon() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon", []);
  const json = await pokemon.json();
  console.log(json.results);
  const body = document.querySelector("body");
  for (const poke of json.results) {
    const name = document.createElement("hi");
    name.innerHTML = poke.name;
    body.append(name);
    console.log(poke.name);
  }
}
getPokemon();
