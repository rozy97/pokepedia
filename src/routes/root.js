const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersRoutes = require("./users-routes");
const pokemon = require("../controllers/pokemon");
router
  .use("/user", usersRoutes)
  .get(
    "/testing",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json({ msg: "passport jwt success" });
    }
  )
  .get("/pokemon/:name", pokemon.getPokemonByName);

module.exports = router;
