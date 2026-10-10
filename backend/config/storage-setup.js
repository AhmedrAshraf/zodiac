const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const supabase = require('./supabase');

const BUCKET = 'images'; // public bucket created in supabase/schema.sql

// Keep the uploaded file in memory (max 5 MB), then hand it to Supabase Storage
const uploader = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

// Saves the file under a random name and returns its public URL
const saveToStorage = async (file) => {
  const filename = `${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filename, file.buffer, { contentType: file.mimetype });
  if (error) throw error;
  return supabase.storage.from(BUCKET).getPublicUrl(filename).data.publicUrl;
};

module.exports = { uploader, saveToStorage };
