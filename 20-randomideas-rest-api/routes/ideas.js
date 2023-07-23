const express = require('express');
const router = express();
const Idea = require('../models/Idea');

// Get all ideas
router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.json({ success: true, value: ideas });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});

// Get one idea
router.get('/:id', async (req, res) => {
    try {
        const idea = await Idea.findById(req.params.id);
        res.json({ success: true, value: idea, });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});

// Add an idea
router.post('/', async (req, res) => {
    const idea = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
    });

    try {
        const savedIdea = await idea.save();
        res.json({ success: true, value: savedIdea });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
})

// Update an idea
router.put('/:id', async (req, res) => {
    try {
        const updatedIdea = await Idea.findByIdAndUpdate(
            request.params.id,
            {
                $set: {
                    text: request.body.text,
                    tag: request.body.tag,
                }
            },
            { new: true },
        );
        res.json({ success: true, value: updatedIdea });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
})

// Delete an idea
router.delete('/:id', async (req, res) => {

    try {
        await Idea.findByIdAndDelete(request.params.id);
        res.json({ success: true, value: {} });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
})

module.exports = router;