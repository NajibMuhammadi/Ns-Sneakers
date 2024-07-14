import jwt from "jsonwebtoken";
import { userDb, userSchema, loginSchema } from "../models/userModels.js";

const validateError = new Error();
const validate = {
    user: {
        register: async (req, res, next) => {
            const { error } = userSchema.validate(req.body);
            const users = await userDb.find();

            const { userName, firstName, lastName, password, confirmPassword, email } = req.body;
            
            let randomId = Math.random().toString(36).slice(2, 7).toUpperCase();
            if (users.length >= 1) {
                while (users.find(user => user.userId === randomId)) {
                    randomId = Math.random().toString(36).slice(2, 7).toUpperCase();
                }
            }

            if (users.find(user => user.userName === userName)) {
                validateError.success = false;
                validateError.message = "Username already exists";
                validateError.status = 400;
                return next(validateError);
            }

            if (users.find(user => user.email === email)) {
                validateError.success = false;
                validateError.message = "Email already exists";
                validateError.status = 400;
                return next(validateError);
            }

            if (error) {
                validateError.success = false;
                validateError.message = error.details[0].message;
                validateError.status = 400;
                return next(validateError);
            }

            if (password !== confirmPassword) {
                validateError.success = false;
                validateError.message = "Passwords do not match";
                validateError.status = 400;
                return next(validateError);
            }
            

            const newUserToDb = {
                userName,
                firstName,
                lastName,
                password,
                email,
                userId: randomId
            }
            userDb.insert(newUserToDb);

            req.user = newUserToDb;
            next();
        },

        login: async (req, res, next) => {
            const { error } = loginSchema.validate(req.body);
            const { userNameOrEmail, password, } = req.body;
            
            if (error) {
                validateError.success = false;
                validateError.message = error.details[0].message;
                validateError.status = 400;
                return next(validateError);
            }
            const user = await userDb.findOne({
                $or: [
                    { userName: userNameOrEmail},
                    { email: userNameOrEmail},
                ], password: password
             });

            
            if (!user) {
                validateError.success = false;
                validateError.message = "Invalid username or password";
                validateError.status = 400;
                return next(validateError);
            }

            const accessToken = jwt.sign({
                _id: user._id,
                isAdmin: user.isAdmin
            }, process.env.SECRET_KEY, { expiresIn: '10s' });
    
            const refreshToken = jwt.sign({
                _id: user._id,
                isAdmin: user.isAdmin
            }, process.env.REFRESH_SECRET_KEY);

            res.cookie('token', accessToken, {
                httpOnly: true,
            });
    
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            res.accessToken = accessToken;
            res.refreshToken = refreshToken;

            next();
        },

        checkIsAdmin: async (req, res, next) => {
            if (!req.user?.isAdmin) {
                validateError.success = false;
                validateError.message = "User is not admin";
                validateError.status = 403;
                return next(validateError);
            }
            next();
        },

        insertAdminTrue: async (req, res, next) => {
            const userId = req.params.id;

            const user = await userDb.findOne({ userId });

            if (!user) {
                validateError.success = false;
                validateError.message = "User not found";
                validateError.status = 404;
                return next(validateError)
            }

            if (user.isAdmin === true) {
                validateError.success = false;
                validateError.message = "User is already admin";
                validateError.status = 403;
                return next(validateError);
            }

            userDb.update({ userId }, { $set: { isAdmin: true } });

            next()
        },

        insertAdminFalse: async (req, res, next) => {
            const userId = req.params.id;

            const user = await userDb.findOne({ userId });

            if (!user) {
                validateError.success = false;
                validateError.message = "User not found";
                validateError.status = 404;
                return next(validate)
            }
            
            if (user.isAdmin === false) {
                validateError.success = false;
                validateError.message = "User is already not admin";
                validateError.status = 403;
                return next(validateError)
            }

            userDb.update({ userId }, { $set: { isAdmin: false } });

            next()
        },

        userInsertProfileImage: async (req, res, next) => {
            const _id = req.user._id;
            try {
                const user = await userDb.findOne({ _id });
                
                if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            await userDb.updateOne({ _id }, { $set: { image: req.file.filename } });

            next();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
        
        },

        userDetails: async (req, res, next) => {
            const _id = req.user._id;
            const user = await userDb.findOne({ _id });

            _id && delete user.password;

            if (!user) {
                validateError.success = false;
                validateError.message = "User not found";
                validateError.status = 404;
                return next(validateError);
            }

            user.image = user.image || `person.svg`;

            user.firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
            user.lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

            req.user = user;

            next();
        },

        userLogOut: async (req, res, next) => {
            res.clearCookie('token');
            res.clearCookie('refreshToken');
            next();
        }
    }
}


export default validate;