const express = require("express")
const router = express.Router()
const taskController = require("../contorllers/task_controller")

router.get("/",taskController.getTasks)
router.get("/:id",taskController.getTask)
router.post("/",taskController.createTask)
router.put("/:id",taskController.editTask)
router.delete("/:id",taskController.deleteTask)

module.exports = router