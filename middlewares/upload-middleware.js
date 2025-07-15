const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Dynamic destination folder based on request
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads"; // default

    // Set subfolder based on route URL
    if (req.baseUrl.includes("team")) {
      folder = "uploads/teams";
    } else if (req.baseUrl.includes("testimonial")) {
      folder = "uploads/testimonials";
    }else if (req.baseUrl.includes("serviceimage")) {
      folder = "uploads/serviceimage";
    }

    fs.mkdirSync(folder, { recursive: true }); // ensure folder exists
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png files are allowed!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 }, // 500 KB
});

const uploadSingleImage = (fieldName) => {
  return (req, res, next) => {
    const singleUpload = upload.single(fieldName);
    singleUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ message: "Image size should not exceed 500 KB" });
        }
        return res.status(400).json({ message: err.message });
      } else if (err) {
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
