import Credential from "../models/Credential.js";
// export const checkRole = (roles) => {
//   return async (req, res, next) => {
//     const { userId } = res.locals.jwtPayload;
//     let user;

//     try {
//       // Buscar usuario en la colección de Admin
//       user = await Credential.findById(userId);

//       // Si no se encuentra en Admin, buscar en Credentials
//       if (!user) {
//         user = await Credentials.findById(userId);
//       }

//       // Si no se encuentra en ninguna de las colecciones, devolver un error
//       if (!user) {
//         return res.status(401).send();
//       }
//     } catch (error) {
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }

//     if (roles.includes(user.role)) {
//       console.log
//       next();
//     } else {
//       res.status(401).json({ message: 'Not Authorized' });
//     }
//   };
// };

export const checkRole = (roles) => {
  return async (req, res, next) => {
    // jwtPayload = jwt.verify(token, SECRET_KEY);
    const { relatedId } = res.locals.jwtPayload;
    console.log(res.locals.jwtPayload);
    let user;
    // console.log(userId)
    try {
      user = await Credential.findOne({relatedId: relatedId});
      console.log(user)
      // console.log(user)
      if (!user) {
        return res.status(401).json({ message: 'Not found' });
      }
  //     if(user === userId){
  //   console.log(userId + user)
  // }
    } catch (e) {
      return res.status(401).json({ message: 'Not Authorized' });
    }
    const { role } = user;
    if (roles.includes(role)) {
      next();
    } else {
      res.status(401).json({ message: 'Not Authorized' });
    }
  };
};


// export const checkRole = (roles: Array<string>) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const { userId } = res.locals.jwtPayload;
//     const userRepository = getRepository(User);
//     let user: User;
//     try {
//       user = await userRepository.findOneOrFail(userId);
//       if (!user) {
//         return res.status(401).send();
//       }
//     } catch (e) {
//       return res.status(401).json({ message: 'Not Authorized test' });
//     }
//     const {role} = user;
//     if (roles.includes(role)) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Not Authorized test' });
//     }
//   };
// };


