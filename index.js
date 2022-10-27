const express = require('express');
const cors =require('cors');
const app = express();

const port = process.env.PORT || 5000;
const courses = require('./data/courses.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is comming soon');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find( course => course.id=== id);
    res.send(course);
})

app.listen(port, () => {
    console.log("app is running on port: ", port)
})