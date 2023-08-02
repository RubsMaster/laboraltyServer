import LaborDocuments from "../../models/admin/LaborDocuments.js";

export const createLaborDocument = async (req, res) => {
    const {
        name,
        type,
        isAvailable,
        isImmediate,
        isMoral,
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
        isMoral,
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
    return res.json(newDoc._id)
};

export const getAllDocuments = async (req, res) => {
    const data = await LaborDocuments.find();
    res.send(data);
}

export const getDoc = async (req, res) => {
    const doc = await LaborDocuments.findById(req.params.id)   
    
    res.json(doc)
}

export const getTextFromDoc = async (req, res) => {
    const doc = await LaborDocuments.findById(req.params.id)
    res.json(doc.text)
}

export const getDocByName = async (req, res) => {
    const { docName, isMoral } = req.body;
    const doc = await LaborDocuments.findOne({ name: docName, isMoral: isMoral }).exec();
    res.json(doc);
};

export const deleteDoc = async (req, res) => {
    const borrr = await LaborDocuments.findByIdAndRemove(req.params.id)
    res.send("se elimino con exito")
}

export const editText = async (req, res) => {
    const { id, text } = req.body
    const result = await LaborDocuments.findByIdAndUpdate(
        id,
        {
            $set: {
                text: text
            }
        }
    )
    
    res.send(result)
}