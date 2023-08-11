import bcrypt from "bcrypt";
import Credential from "../models/Credential.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import Accountant from "../models/admin/Accountant.js";
import Client from "../models/accountant/Client.js";
import Consultant from "../models/accountant/Consultant.js";
import Admin from "../models/admin/Admin.js";

export const createCredential = async (req, res) => {
  const { user, password, role, relatedId } = req.body;

  // Encriptación de la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newCredential = new Credential({
    user,
    password: hashedPassword, // Asignar la contraseña encriptada
    role,
    relatedId,
  });

  await newCredential.save();
  console.log("Credential created successfully");

  return res.json(newCredential);
};

export const getAllCredentials = async (req, res) => {
  const credentials = await Credential.find();
  res.send(credentials);
};

export const getCredential = async (req, res) => {
  const cred = await Credential.findOne({ user: req.params.name });
  res.send(cred);
};

export const logInUser = async (req, res) => {
  const { user, password } = req.body;

  if (!(user && password)) {
    return res.status(400).json({ message: "user and password are required!" });
  }

  try {
    const foundUser = await Credential.findOne({ user });
    console.log("foundUser" + foundUser)
    let foundRoleInfo
    if (foundUser.role === "Accountant") {
      foundRoleInfo = await Accountant.findById(foundUser.relatedId)
    } else if (foundUser.role === "Consultant") {
      foundRoleInfo = await Consultant.findById(foundUser.relatedId)
    } else if (foundUser.role === "Client") {
      foundRoleInfo = await Client.findById(foundUser.relatedId)
    } else if (foundUser.role === "Admin") {
      foundRoleInfo = await Admin.findById(foundUser.relatedId)
    } else {
      console.log("error en la solicitud de información según el rol")
    }

    console.log(foundRoleInfo)

    if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
      return res.status(400).json({ message: "User or password incorrect!" });
    }

    // Generar el token de JWT para el usuario que ha iniciado sesión
    const token = jwt.sign(
      {
        relatedId: foundUser.relatedId,
        userCredential: Credential.user,
        role: foundUser.role,
        username: foundUser.user
      },
      SECRET_KEY,
      {
        expiresIn: "2h", // El token expira en 2 horas
      }
    );

    res.json({
      message: "OK",
      token,
      user: foundUser.user,
      role: foundUser.role,
      relatedId: foundUser.relatedId,
      foundRoleInfo: foundRoleInfo
    });
    
  } catch (e) {
    console.error(e); // Mostrar el error en la consola
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  const { relatedId } = res.locals.jwtPayload;
  const { oldPassword, newPassword } = req.body;

  try {
    //buscamos el usuario por el id en ambas colecciones
    const credentials = await Credentials.findById(relatedId);

    // Si no encuentra al usuario en ninguna de las dos colecciones
    if (!credentials) {
      return res.status(404).json({ message: "User not found" });
    }

    // Seleccionar el usuario que fue encontrado
    const user = credentials;

    // Verificar la contraseña antigua
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //encriptacion
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    //Envia la resopuesta satisfactoria
    return res.json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//pito