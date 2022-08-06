
const express = require('express');
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
    res.send(koalaArray);
})

// POST
router.post('/', (req, res) => {
    const koalaBear = req.body;
    koalaArray.push(koalaBear);
    res.send(koalaBear);
    res.sendStatus(200);
})

// PUT


// DELETE

module.exports = router;