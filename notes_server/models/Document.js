const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  base64: {
    type: String,
    required: true,
  },
  empid: {
    type: String,
    required: true,
  },
  machineNo: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Document', DocumentSchema);
