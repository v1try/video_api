const Video = require('../models/video')

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
    res.send(videos)
  } catch (e) {
    return res.status(500).send({ error: e.message })
  }
}

exports.uploadVideo = async (req, res) => {
  let video
  if (req.files.length == 1) {
    video = new Video({
      video: req.files[0].path,
      title: req.body.title,
      description: req.body.description
    })
  }

  if (req.files.length > 1) {
    for(let i = 0; i < req.files.length; i++) {
      video = new Video({
        video: req.files[i].path,
        title: req.body.title[i],
        description: req.body.description[i]
      })
      await video.save()
      }
    }
  

  try {
    await video.save()
    res.status(201).send(video)
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
  
}