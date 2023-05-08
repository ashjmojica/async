async function getPokemon() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon", []);
  const json = await pokemon.json();
  const body = document.querySelector("body");
  for (const poke of json.results) {
    const name = document.createElement("hi");
    const url = document.createElement("h2");
    name.innerHTML = poke.name;
    url.innerHTML = poke.name;
    url.href = poke.url;
    body.append(name, url);
  }
}
getPokemon();
