const tasks = require("../utility/mock_data");

const getTasks = (req, res) => {
    res.json(tasks);
};

const getTask = (req, res) => {
    const task = tasks.find((item) => item.id === Number(req.params.id));
    if (!task) {
        return res.status(400).json({ message: "تسک مورد نظر یافت نشد" });
    }
    res.json(task);
};

const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "عنوان الزامی است" });
    }
    const newTask = {
        id: tasks.length + 1,
        title,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const editTask = (req, res) => {
    const { title } = req.body;
    const task = tasks.find((item) => item.id === Number(req.params.id));
    if (!task) {
        return res.status(400).json({ message: "تسک مورد نظر یافت نشد" });
    }
    task.title = title || task.title;
    res.json(task);
};

const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex((item) => item.id === Number(req.params.id));
    if (taskIndex === -1) {
        return res.status(400).json({ message: "تسک مورد نظر یافت نشد" });
    }
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
};
