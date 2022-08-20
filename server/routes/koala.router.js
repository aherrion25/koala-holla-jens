const { response } = require("express");
const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


const koalaArray = [
    {
        name: 'Scotty',
        age: '4',
        gender: 'M',
        readyForTransfer: 'Y',
        notes: 'Born in Guatemala',
    },

    {
        name: 'Jean',
        age: '5',
        gender: 'F',
        readyForTransfer: 'Y',
        notes: 'Allergic to lots of lava',
    },

    {
        name: 'Ororo',
        age: '7',
        gender: 'F',
        readyForTransfer: 'N',
        notes: 'Loves listening to Paula (Abdul)',
    },

    {
        name: 'Logan',
        age: '15',
        gender: 'M',
        readyForTransfer: 'N',
        notes: 'Loves the sauna',
    },

    {
        name: 'Charlie',
        age: '9',
        gender: 'Y',
        readyForTransfer: 'Y',
        notes: 'Favorite band is Nirvana',
    },

    {
        name: 'Betsy',
        age: '4',
        gender: 'F',
        readyForTransfer: 'Y',
        notes: 'Has a pet iguana',
    },
];

// DB CONNECTION


// GET
router.get('/', (req, res) => {
    // res.send(koalaArray);
    const queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText).then((result) =>{
        res.send(result.rows)
    }).catch((error) => {
        console.log('ERROR in GET /koalas', error);
        res.sendStatus(500);
    })
})

// POST
router.post('/', (req, res) => {
    const koalaBear = req.body;
    const queryText = `
    INSERT INTO "koalas" ("name", "gender","age","ready_to_transfer","notes")
    VALUES ($1,$2,$3, $4, $5);
    `
   pool.query(queryText,[koalaBear.name, koalaBear.gender, koalaBear.age, koalaBear.ready_to_transfer, koalaBear.notes ])
   .then((result)=>{
    res.send(result)
   }).catch((error) => {
    console.log('Error was made',error);
    res.sendStatus(500);
   })
})

// PUT
router.put('/:id',(req,res)=>{
const koalasId = req.params.id;
const queryText = `UPDATE "koalas" SET "ready_to_transfer" = true WHERE "id" = $1;`;
pool.query(queryText, [koalasId]).then((results) =>{
    res.send(results);
}).catch((error) => {
    console.log('ERROR in PUT /koalas', error);
    res.sendStatus(500);
})
})

// DELETE
router.delete('/:id', (req, res) =>{
    const koalasId = req.params.id;
    const queryText = `DELETE FROM "koalas" WHERE "id" = $1;`;
    pool.query(queryText, [koalasId]).then((results) => {
        res.send(results);
    }).catch((error) => {
        console.log('ERROR in DELETE /koalas', error);
        res.sendStatus(500);
    });
});
module.exports = router;