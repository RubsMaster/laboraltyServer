import ServiceLog from "../../models/accountant/ServiceLog.js";

export const createServiceLog = async (req, res) => {
    const { serviceLogName, serviceLogType, tasks } = req.body;

    const newServiceLog = new ServiceLog({
        serviceLogName,
        serviceLogType,
        tasks: tasks || [] // Si no se proporciona ninguna tarea, inicializar como un array vacío
    });

    await newServiceLog.save();
    console.log('Service log created successfully');

    return res.json(newServiceLog);
};

 export const getAllServiceLogs = async (req, res) => {
     const serviceeLogs = await ServiceLog.find();
     res.send(serviceeLogs)
 }
