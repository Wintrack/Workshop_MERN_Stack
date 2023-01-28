const tasksSchema = require("../models/modelTodo");

module.exports.getToDo = async (req, res) => {
    const todo = await tasksSchema.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    tasksSchema
        .create({ text })
        .then((data) =>{
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    tasksSchema
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    tasksSchema
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}