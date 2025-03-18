const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["application/pdf"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF files are allowed."));
    }
  },
});

const saveFile = (buffer, originalname) => {
  const uploadDir = path.join(__dirname, "../public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}-${originalname}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);
  return `uploads/${fileName}`;
};

module.exports = { upload, saveFile };
