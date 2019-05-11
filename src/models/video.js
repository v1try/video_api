const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    
  video: { 
    type: String
  },
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String, 
    required: true,
    trim: true 
  },
  created_at: { 
    type: Date,
    required: true, 
    default: Date.now
  },
}, 
  {versionKey: false}
);

const Video = mongoose.model('Video', videoSchema)
module.exports = Video
