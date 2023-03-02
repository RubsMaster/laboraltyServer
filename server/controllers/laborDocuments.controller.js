import LaborDocuments from "../models/LaborDocuments.js";

export const createLaborDocument = async (req, res) => {
    const { 
        name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields,
        text,
        uniqueName,
        uniqueType,
        uniqueName1,
        uniqueType1,
        uniqueName2,
        uniqueType2,
        uniqueName3,
        uniqueType3,
        uniqueName4,
        uniqueType4,
        uniqueName5,
        uniqueType5
    } = req.body;
    const newDoc = new LaborDocuments({
        name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields,
        text,
        uniqueName,
        uniqueType,
        uniqueName1,
        uniqueType1,
        uniqueName2,
        uniqueType2,
        uniqueName3,
        uniqueType3,
        uniqueName4,
        uniqueType4,
        uniqueName5,
        uniqueType5
    });
    await newDoc.save()
    return res.json(newDoc)
};

export const getAllDocuments = async (req, res) => {
    const data = await LaborDocuments.find();
    res.send(data);
}

export const insertText = async (req, res) => {
    const text = req.body
}