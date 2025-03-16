const express = require("express");
const app = express()
const cors = require("cors");  

const taskRoute = require("./routes/task_route")

const path = require("path")
app.use(cors());

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, "public")))


app.use('/api/tasks', taskRoute)


app.listen(5000, () => {
    console.log("connect to 5000");
})