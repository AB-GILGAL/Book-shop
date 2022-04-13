const { Router } = require("express");
const router = Router();
const {createUser, getAllUsers, getUser} = require("../controllers/users.controller");
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");

router.get("/", checkAuth, getAllUsers);

router.get("/:id", checkAuth, getUser);

router.post("/", timeStamp, createUser);

module.exports = router;
