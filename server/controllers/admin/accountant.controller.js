import Accountant from "../../models/admin/Accountant.js";

export const createAccountant = async (req, res) => {
    const newAccountant = new Accountant({
        ...req.body
    });
    
    await newAccountant.save()
    console.log('Accountant created succesfully')
    
    return res.json(newAccountant)
};

export const deleteAccountant = async (req, res) => {
    const accountant = await Accountant.findByIdAndDelete(req.params.id);
    if (!accountant) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getAllAccountants = async (req, res) => {
    const accountants = await Accountant.find();
    res.send(accountants)
}

export const getAccountant = async (req, res) => {
    const accountant = await Accountant.findById(req.params.id)
    res.send(accountant)
}

export const updateAccountant = async (req, res) => {
    let accountant = await Accountant.findById(req.params.id);
  
    if (!accountant) {
      return res.status(404).json({msg: 'No existe el contador'})
    }
  
    // Validar cada variable antes de asignarla al contador
    Object.keys(req.body).forEach((key) => {
      accountant[key] = req.body[key] ? req.body[key] : accountant[key];
    });
  
    await accountant.save()
    res.send(accountant);
}

export const updateLogoImg = async (req, res) => {
    try {
        const accountant = await Accountant.findByIdAndUpdate(
            req.params.id,
            {
                $set: { logoImgName: req.body.logoImgName }
            },
            {
                new: true
            }
        )

        if (!accountant) {
            return res.status(404).json({ message: 'Accountant not found' });
        }

        return res.json(accountant);        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
