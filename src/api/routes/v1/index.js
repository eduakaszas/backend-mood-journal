const express = require('express');
const entryModel = require('../../models/entry.model');

const router = express.Router();

// Get All Entries
router.get('/entry', async (req, res) => {

  const identifier = req.body.id ? { _id: req.body.id } : {};

  try {
    const entries = await entryModel.find(identifier)

    res.status(200).json({entries});

  } catch( error ) {
    res.status(500).json({error})
  }
});

// Modify entry
router.put('/entry', async (req, res) => {

  entryModel.findOneAndUpdate({_id: req.body.id}, req.body, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});
});

// Save entry
router.post('/entry', async (req, res) => {
  const entry = new entryModel(req.body);

  console.log(entry);

  try {
    await entry.save();
    res.send(entry);

  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete entry
router.delete('/entry', async (req, res) => {
  const identifier = req.body.id ? { _id: req.body.id } : {};

  try {
    await entryModel.remove(identifier);
    res.send("Deleted!");

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
