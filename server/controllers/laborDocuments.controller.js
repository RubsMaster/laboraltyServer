import LaborDocuments from "../models/LaborDocuments.js";

export const createLaborDocument = async (req, res) => {
    const { 
        name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields,
        text
    } = req.body;
    const newDoc = new LaborDocuments({
        name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields,
        text
    });
    await newDoc.save()
    return res.json(newDoc)
};

export const getAllDocuments = async (req, res) => {
    const data = await LaborDocuments.find();
    res.send(data);
}

export const getTextFromID = async (req, res) => {
    const text = await LaborDocuments.findOne({"name": req.params.id})
    return res.send(text.text)
}

export const insertText = async (req, res) => {
    const text = req.body
}