import Accountant from "../../models/admin/Accountant.js";
import bcrypt from 'bcrypt';

export const createAccountant = async (req, res) => {
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
        passwordAssigned,
        role
    } = req.body;
    const hashedPassword = await bcrypt.hash(passwordAssigned, 10);
    const newAccountant = new Accountant({
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
        hashedPassword,
        role
    });
    
    await newAccountant.save()
    console.log('Accountant created succesfully')
    
    return res.json(newAccountant)
};

export const deleteAccountant = async (req, res) => {
    const post = await Accountant.findByIdAndDelete(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getAccountants = async (req, res) => {
    const accountants = await Accountant.find();
    res.send(accountants)
}

export const getAccountant = async (req, res) => {
    const accountant = await Accountant.findById(req.params.id)
    res.send(accountant)
}


export const updateAccountant = async (req, res) => {
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
      passwordAssigned,
      role
    } = req.body;
  
    let accountant = await Accountant.findById(req.params.id);
  
    if (!accountant) {
      res.status(404).json({msg: 'No existe el usuario'})
    }
  
    // Validar cada variable antes de asignarla al usuario
    accountant.businessName = businessName ? businessName : accountant.businessName;
    accountant.RFC = RFC ? RFC : accountant.RFC;
    accountant.firstNameTitular = firstNameTitular ? firstNameTitular : accountant.firstNameTitular;
    accountant.lastNameTitular = lastNameTitular ? lastNameTitular : accountant.lastNameTitular;
    accountant.email = email ? email : accountant.email;
    accountant.street = street ? street : accountant.street;
    accountant.innerNumber = innerNumber ? innerNumber : accountant.innerNumber;
    accountant.outdoorNumber = outdoorNumber ? outdoorNumber : accountant.outdoorNumber;
    accountant.zipCode = zipCode ? zipCode : accountant.zipCode;
    accountant.suburb = suburb ? suburb : accountant.suburb;
    accountant.city = city ? city : accountant.city;
    accountant.state = state ? state : accountant.state;
    accountant.officePhoneNumber = officePhoneNumber ? officePhoneNumber : accountant.officePhoneNumber;
    accountant.mobilePhoneNumber = mobilePhoneNumber ? mobilePhoneNumber : accountant.mobilePhoneNumber;
    accountant.totalEmployees = totalEmployees ? totalEmployees : accountant.totalEmployees;
    accountant.totalRFC = totalRFC ? totalRFC : accountant.totalRFC;
    accountant.monthlyDebt = monthlyDebt ? monthlyDebt : accountant.monthlyDebt;
    accountant.userAssigned = userAssigned ? userAssigned : accountant.userAssigned;
    accountant.passwordAssigned = passwordAssigned ? passwordAssigned : accountant.passwordAssigned;
    accountant.role = role ? role : accountant.role;
    
    await accountant.save()
    res.send(accountant);
  }
