import Users from "../models/Users.js";

export const createUser = async (req, res) => {

    const {
        businessName,
        RFC,
        firstNameTitular,
        lastNameTitular,
        email,
        street,
        innerNumber,
        outdoorNumber,
        zipCode,
        suburb,
        city,
        state,
        officePhoneNumber,
        mobilePhoneNumber,
        totalEmployees,
        totalRFC,
        monthlyDebt,
        userAssigned,
        passwordAssigned
    } = req.body;
    const newUser = new Users({
        businessName,
        RFC,
        firstNameTitular,
        lastNameTitular,
        email,
        street,
        innerNumber,
        outdoorNumber,
        zipCode,
        suburb,
        city,
        state,
        officePhoneNumber,
        mobilePhoneNumber,
        totalEmployees,
        totalRFC,
        monthlyDebt,
        userAssigned,
        passwordAssigned
    });
    
    await newUser.save()
    
    return res.json(newUser)
};

export const getPosts = async (req, res) => {
    const post = await Post.find();
    res.send(post)
};

export const getAllUsers = async (req, res) => {
    const users = await Users.find();
    res.send(users)
}