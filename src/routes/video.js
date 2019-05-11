const express = require('express')
const multer = require('multer')
const VideoControllers = require('../controllers/video')
const router = new express.Router()

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 1000000000
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.match(/\.(mp4|webm)$/)) {
    //   return cb(new Error('Please upload a video'))
    // }
    console.log(file.mimetype)
    if (file.mimetype == 'video/mp4' || file.mimetype == 'video/webm') {
      
    } else return cb(new Error('Please upload a video'))

    cb(undefined, true)
  }
})

router.post('/video', upload.array('video'), VideoControllers.uploadVideo)
router.get('/video', VideoControllers.getVideos)

module.exports = router
