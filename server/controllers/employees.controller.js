import Employees from "../models/Employees.js";

export const createEmployee = async (req, res) => {

    const { 
        name,
        business,
        branch,
        job,
        department,
        antiquity,
        laborCompilance,
        employmentFile
     } = req.body;

    const newEmployee = new Employees({ 
        name,
        business,
        branch,
        job,
        department,
        antiquity,
        laborCompilance,
        employmentFile
     });

    await newEmployee.save();

    return res.json(newEmployee);
};

export const getAllEmployees = async (req, res) => {
    const data = await Employees.find();
    res.send(data);
}