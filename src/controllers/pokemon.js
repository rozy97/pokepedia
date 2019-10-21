const Pokedex = require("pokedex-promise-v2");
const P = new Pokedex();

module.exports = {
  getPokemonByName: (req, res) => {
    P.getPokemonByName(req.params.name)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
