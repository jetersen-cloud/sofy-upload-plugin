const router = require("express").Router();

const {
  auth: { login },
} = require("../controller");

router.get("login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    res.json(user);
  } catch (error) {
    debugger;
  }
});

// Register a new user
router.post("/register", function (req, res) {
  // const saltHash = utils.genPassword(req.body.password);
  // const salt = saltHash.salt;
  // const hash = saltHash.hash;
  // const newUser = new User({
  //   username: req.body.username,
  //   hash: hash,
  //   salt: salt,
  // });
});

module.exports = router;
