const router = require('express').Router();
const Document = require('../models/Document');

// Upload document API
router.post('/uploadDocument', async (req, res) => {
  try {
    const document = new Document({
      name: req.body.name,
      mimeType: req.body.mimeType,
      size: req.body.size,
      base64: req.body.base64,
      empid: req.body.empid,
      machineNo: req.body.machineNo,
      customerName: req.body.customerName,
    });

    const savedDocument = await document.save();
    res.status(200).json(savedDocument);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading document', error });
  }
});

module.exports = router;
