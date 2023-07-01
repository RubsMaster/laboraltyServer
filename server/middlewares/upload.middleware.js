import { connectDB } from "../db.js";
import util from "util";
import multer  from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import path from "path";
import fs from 'fs';

const __basedir = path.resolve();

// Crea el directorio si no existe
const uploadDirectory = __basedir + "/assets/images/";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const connectionOptions = await connectDB();

const storage = new GridFsStorage({
  url: connectionOptions.url,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  destination: (req, file, cb) => {
    cb(null, __basedir + "/assets/images/");
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: connectionOptions.database,
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});

const uploadFiles = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFiles);
export default uploadFilesMiddleware;
