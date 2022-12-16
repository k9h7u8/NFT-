const express = require('express');
const sss = require('shamirs-secret-sharing');
const app = express();

const mongoDB = require('./database');
const formModel = require('./model/form');

app.use(express.json());

app.post('/secret', async (req, res) => {
    const key = req.body.key;
    const secret = Buffer.from(key)
    const shares = sss.split(secret, { shares: 5, threshold: 3 })
    const recovered = sss.combine(shares.slice(2, 5))
    const result = recovered.toString();
    console.log(result);
    res.send(result);
})

//Post the user details
app.post('/form', async (req, res) => {
    try {
        const userDetails = {
            name: req.body.name,
            father_name: req.body.father_name,
            branch: req.body.branch,
            year_of_completion: req.body.year_of_completion,
            degree: req.body.degree,
            course: req.body.course,
            grade: req.body.grade,
        }
        const user = new formModel(userDetails)
        const details = await user.save().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        });
        res.send(details);
    } catch (err) {
        res.send(err);
    }
})

//Fetching  all user details
app.get('/form', async (req, res) => {
    try {
        const getDetails = await formModel.find().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        });
        res.send(getDetails);
    } catch (err) {
        res.send(err);
    }
});

//Fetching user details by id
app.get('/form/:formId', async (req, res, next) => {
    try {
        const getDetailsById = await formModel.findById(req.params.formId).then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        });
        res.send(getDetailsById);
    } catch (err) {
        res.send(err);
    }
});

app.listen(6060, () => {
    console.log(" 🚀 on port 6060")
})