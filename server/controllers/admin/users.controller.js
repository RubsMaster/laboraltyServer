import Users from "../../models/Users.js";

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


export const updateUser = async (req, res) => {
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
  
    let user = await Users.findById(req.params.id);
  
    if (!user) {
      res.status(404).json({msg: 'No existe el usuario'})
    }
  
    // Validar cada variable antes de asignarla al usuario
    user.businessName = businessName ? businessName : user.businessName;
    user.RFC = RFC ? RFC : user.RFC;
    user.firstNameTitular = firstNameTitular ? firstNameTitular : user.firstNameTitular;
    user.lastNameTitular = lastNameTitular ? lastNameTitular : user.lastNameTitular;
    user.email = email ? email : user.email;
    user.street = street ? street : user.street;
    user.innerNumber = innerNumber ? innerNumber : user.innerNumber;
    user.outdoorNumber = outdoorNumber ? outdoorNumber : user.outdoorNumber;
    user.zipCode = zipCode ? zipCode : user.zipCode;
    user.suburb = suburb ? suburb : user.suburb;
    user.city = city ? city : user.city;
    user.state = state ? state : user.state;
    user.officePhoneNumber = officePhoneNumber ? officePhoneNumber : user.officePhoneNumber;
    user.mobilePhoneNumber = mobilePhoneNumber ? mobilePhoneNumber : user.mobilePhoneNumber;
    user.totalEmployees = totalEmployees ? totalEmployees : user.totalEmployees;
    user.totalRFC = totalRFC ? totalRFC : user.totalRFC;
    user.monthlyDebt = monthlyDebt ? monthlyDebt : user.monthlyDebt;
    user.userAssigned = userAssigned ? userAssigned : user.userAssigned;
    user.passwordAssigned = passwordAssigned ? passwordAssigned : user.passwordAssigned;
  
    await user.save()
    res.send(user);
  }
