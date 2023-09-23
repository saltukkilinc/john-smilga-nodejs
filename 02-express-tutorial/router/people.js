const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson,
} = require("../controller/people");

router.get("/", getPeople);

// js kullanarak post isteği
router.post("/", createPerson);

router.post("/postman", createPostmanPerson);

// put method
router.put("/:id", updatePerson);

// DELETE METHOD

router.delete("/:id", deletePerson);

module.exports = router;
