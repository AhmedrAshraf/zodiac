const express = require('express');
const router  = express.Router();

// include SUPABASE STORAGE:
const { uploader, saveToStorage } = require('../config/storage-setup');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    console.log('file is: ', req.file)

    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    // upload to Supabase Storage and send the public URL back as 'secure_url',
    // the name the frontend already uses
    saveToStorage(req.file)
      .then((url) => res.json({ secure_url: url }))
      .catch(next);
})

module.exports = router;
