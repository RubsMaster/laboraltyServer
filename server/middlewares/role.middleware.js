import Admin from "../models/admin/Admin.js";
import Accountant from "../models/admin/Accountant.js";

// export const checkRole = (roles) => {
//   return async (req, res, next) => {
//     const { userId } = res.locals.jwtPayload;
//     let accountant, admin;

//     try {
//       admin = await Admin.findById(userId);
//       accountant = await Accountant.findById(userId);
//       if (!admin || !accountant) {
//         return res.status(401).send();
//       }
//     } catch (error) {
//       return res.status(500).json({ message: "Internal Server Error" });
//     }

//     if (roles.some((role) => role === admin.role || role === accountant.role)) {
//       next();
//     } else {
//       res.status(401).json({ message: "Not Authorized test" });
//     }
//   };
// };

export const checkRole = (roles) => {
  return async (req, res, next) => {
    const { userId } = res.locals.jwtPayload;
    let accountant, admin;

    try {
      admin = await Admin.findById(userId);
      accountant = await Accountant.findById(userId)
      if (!admin || !accountant ) {
        return res.status(401).send();
      }
    } catch (admin) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (roles.includes(admin.role, accountant.role)) {
      next();
    } else {
      res.status(401).json({ message: 'Not Authorized test' });
    }
  };
};
