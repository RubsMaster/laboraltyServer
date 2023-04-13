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
    console.log('User created succesfully')
    
    return res.json(newUser)
};

export const updateUser = async (req, res) => {
    const { id, lastNameTitular} = req.body
    const result = await Users.findOneAndUpdate(
        {_id, id},
        {
            $set: {
                lastNameTitular: lastNameTitular
            }
        }
    )
    res.send(result)
};

export const deleteUser = async (req, res) => {
    const post = await Users.findByIdAndDelete(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getAllUsers = async (req, res) => {
    const users = await Users.find();
    res.send(users)
}

export const getUser = async (req, res) => {
    const user = await Users.findById(req.params.id)    
    res.send(user)
}

