const {people} = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  return res.status(201).json({ success: true, person: name });
}

const createPostmanPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name." });
  }
  return res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      message: `There is not a person with id : ${id}`,
    });
  }

  const newPerson = people.map((person) =>
    person.id === Number(id) ? { ...person, name: name } : person
  );

  return res.status(201).json({ success: true, data: newPerson });
}


const deletePerson = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({
        success: false,
        message: `There is no such a person with id: ${id}`,
      });
  }

  const deletedPeople = people.filter((person) => person.id !== Number(id));
  return res.status(201).json({ success: false, data: deletedPeople });
}

module.exports = {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson
}