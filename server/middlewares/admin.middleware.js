import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

// export const checkJwt = (req, res, next) => {
//   // Obtener el token del encabezado de la solicitud
//   const token = String(req.headers["auth"]);

//   let jwtPayload;

//   try {
//     // Verificar y descifrar el token utilizando la clave secreta
//     jwtPayload = jwt.verify(token, SECRET_KEY);

//     // Agregar los datos del token descifrado a la respuesta
//     res.locals.jwtPayload = jwtPayload;
//   } catch (error) {
//     // Si la verificación del token falla, enviar una respuesta de "No autorizado" (401)
//     return res.status(401).json({ message: 'Not Authorized' });
//   }

//   // Extraer el userId y username del token descifrado
//   const { userId, username } = jwtPayload;

//   // Generar un nuevo token con una fecha de expiración actualizada (1 hora)
//   const newToken = jwt.sign({ userId, username }, SECRET_KEY, {
//     expiresIn: "1h",
//   });

//   // Establecer el nuevo token en el encabezado de la respuesta
//   res.setHeader("token", newToken);

//   // Llamar a la función next() para pasar al siguiente middleware o controlador
//   next();
// };

export const checkJwt = (req, res, next) => {
  // console.log('REQ->' , req.headers)

  const token = req.headers['auth'];

  let jwtPayload;

  try {
    // Verificar y descifrar el token utilizando la clave secreta
    jwtPayload = jwt.verify(token, SECRET_KEY);
    // console.log(jwtPayload)
    // Agregar los datos del token descifrado a la respuesta
    res.locals.jwtPayload = jwtPayload;
  } catch (e) {
    // Si la verificación del token falla, enviar una respuesta de "No autorizado" (401)
    return res.status(401).json({ message: 'Not Authorized' });
  }

  // Extraer el userId y username del token descifrado
  const { relatedId, user } = jwtPayload;

  // Generar un nuevo token con una fecha de expiración actualizada (1 hora)
  const newToken = jwt.sign({ relatedId, user }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Establecer el nuevo token en el encabezado de la respuesta
  res.setHeader("token", newToken);

  // Llamar a la función next() para pasar al siguiente middleware o controlador
  next();
};