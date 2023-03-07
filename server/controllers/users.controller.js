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

export const putUser = async (req, res) => {
    try {
        const post = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send('updated');
    } catch (error) {
        console.log(error);
    }

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

export const updateUser = async (req, res) =>{
    try {
        const {businessName,
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
            passwordAssigned} = req.bosy;
            let user = await Users.findById(req.params.id);
            if(!user){
                res.status(404).json({msg: 'No existe el usuario'})
            }
            user.businessName = businessName;
            user.RFC = RFC;
            user.firstNameTitular = firstNameTitular;
            user.lastNameTitular = lastNameTitular;
            user.email = email;
            user.street = street;
            user.innerNumber = innerNumber;
            user.outdoorNumber = outdoorNumber;
            user.zipCode = zipCode;
            user.suburb = suburb;
            user.city = city;
            user.state = state;
            user.officePhoneNumber = officePhoneNumber;
            user.mobilePhoneNumber = mobilePhoneNumber;
            user.totalEmployees = totalEmployees;
            user.totalRFC = totalRFC;
            user.monthlyDebt = monthlyDebt;
            user.userAssigned = userAssigned;
            user.passwordAssigned = passwordAssigned;
            user = await Users.findByIdAndUpdate({_id: req.params.id},  req.body, { new: true })

    } catch (error) {
        
    }
}
