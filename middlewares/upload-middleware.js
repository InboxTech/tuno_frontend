const multer = require("multer");
const path = require("path");
const fs = require("fs");

//  Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads";
    // Ensure folder exists
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
//  File filter validation (type)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png files are allowed!"), false);
  }
};

//  Multer instance with size limit (500 KB)
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 }, // 500 KB max
});

//  Custom middleware wrapper to handle errors gracefully
const uploadSingleImage = (fieldName) => {
  return (req, res, next) => {
    const singleUpload = upload.single(fieldName);
    singleUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer-specific errors
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ message: "Image size should not exceed 500 KB" });
        }
        return res.status(400).json({ message: err.message });
      } else if (err) {
        // Any other error
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  };
};


// myltiple images
const uploadMultipleImages = (fieldName, maxFiles = 5) => {
  return (req, res, next) => {
    const multipleUpload = upload.array(fieldName, maxFiles); // Allow multiple images (default max 5 files)
    multipleUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer-specific errors
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ message: "Image size should not exceed 500 KB" });
        }
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res.status(400).json({ message: `You can only upload up to ${maxFiles} images.` });
        }
        return res.status(400).json({ message: err.message });
      } else if (err) {
        // Any other error
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  };
};
module.exports = {uploadSingleImage, uploadMultipleImages};
