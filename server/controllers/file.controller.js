import uploadFilesMiddleware from "../middlewares/upload.middleware.js";
import mongoose from 'mongoose';
import { connectDB } from "../db.js";
import path from "path";
import fs from 'fs';


const __basedir = path.resolve();
const baseUrl = "http://localhost:4000"; // Cambia esto a la URL base de tu aplicación

const connectionOptions = await connectDB();

const Grid = mongoose.mongo.Grid;
const conn = mongoose.connection;

export const uploadFiles = async (req, res) => {
  try {
    await uploadFilesMiddleware(req, res);
    console.log(req.file);
    console.log(req.file.filename);
    if (req.file == undefined) {
      return res.send({
        message: "You must select a file."
      });
    }

    return res.send({
      message: "File has been uploaded.",
      filename: req.file.filename
    });
  } catch (error) {
    console.log(error);

    return res.send({
      message: `Error when trying upload image: ${error}`,
    });
  }
};

export const getListFiles = async (req, res) => {
  try {
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: connectionOptions.database
    });

    const fileInfos = await bucket.find().toArray();
    
    const files = fileInfos.map(file => ({
      name: file.filename,
      url: `${baseUrl}/getFile/${file.filename}`
    }));

    res.status(200).send(files);
  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: "Error retrieving files"
    });
  }
};

export const download = async (req, res) => {
  try {
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: connectionOptions.database
    });

    const downloadStream = bucket.openDownloadStreamByName(req.params.name);

    downloadStream.on("data", function (data) {
      res.write(data);
    });

    downloadStream.on("error", function (err) {
      res.status(404).send({ message: "Cannot download the Image!" });
    });

    downloadStream.on("end", () => {
      res.end();
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
