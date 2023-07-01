
export const checkRole = (roles) => {
  return async (req, res, next) => {
    const { userId } = res.locals.jwtPayload;
    let user;

    try {
      // Buscar usuario en la colección de Admin
      user = await Admin.findById(userId);

      // Si no se encuentra en Admin, buscar en Credentials
      if (!user) {
        user = await Credentials.findById(userId);
      }

      // Si no se encuentra en ninguna de las colecciones, devolver un error
      if (!user) {
        return res.status(401).send();
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (roles.includes(user.role)) {
      console.log
      next();
    } else {
      res.status(401).json({ message: 'Not Authorized' });
    }
  };
};


// export const checkRole = (roles) => {
//   return async (req, res, next) => {
//     const { userId } = res.locals.jwtPayload;
//     let user;

//     try {
      
//       user = await User.findById(userId);
//       if (!user) {
//         return res.status(401).send();
//       }
//     } catch (error) {
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }

//     if (roles.includes(user.role)) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Not Authorized test' });
//     }
//   };
// };


