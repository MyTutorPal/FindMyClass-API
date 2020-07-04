const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all classes' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show class ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(201).json({ success: true, msg: 'Create new class' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update class ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete class ${req.params.id}` });
});

module.exports = router;
