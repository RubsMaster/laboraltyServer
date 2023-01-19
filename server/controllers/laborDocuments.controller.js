import LaborDocuments from "../models/LaborDocuments.js";

export const createLaborDocument = async (req, res) => {
    const { name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields
    } = req.body;
    const newDoc = new LaborDocuments({
        name,
        type,
        isAvailable,
        isImmediate,
        uniqueFields
    });
    await newDoc.save()
    console.log(newDoc)
    return res.json(newDoc)
};

export const getAllDocuments = async (req, res) => {
    const data = await LaborDocuments.find();
    console.log(data);
    res.send(data);
}