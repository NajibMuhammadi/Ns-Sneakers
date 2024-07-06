import { userDb } from "../models/userModels.js";
import jwt from "jsonwebtoken";
import path from "path";
const __dirname = path.resolve();

import { userSchema, loginSchema } from "../models/userModels.js";


const validationError = new Error();

export default class UserController{
    registerUser = async (req, res, next) => {

        // destrukturera användarens data
        const { userName, firstName, lastName, password, confirmPassword, email } = req.body;

        // hämta alla användare från databasen
        const users = await userDb.find();

        // kolla om användarens användarnamn redan finns
        if (users.find(user => user.userName === userName)) {
            validationError.success = false;
            validationError.message = "Username already exists";
            validationError.status = 400;
            return next(validationError);
            
        }

        // kolla om användarens email redan finns
        if (users.find(user => user.email === email)) {
            validationError.success = false;
            validationError.message = "Email already exists";
            validationError.status = 400;
            return next(validationError);
        }

        // skapa en random userId och ta bort 0. från början av numret och konvertera till stora bokstäver
        let randomId = Math.random().toString(36).slice(2, 7).toUpperCase();

        // kolla om det finns några användare i databasen för att undvika att skapa en användare med samma id
        if (users.length >= 1) {
            // kolla om användarId redan finns
            while (users.find(user => user.userId === randomId)) {
                // skapa en ny random userId
                randomId = Math.random().toString(36).slice(2, 7).toUpperCase();
            }
        }

        // validera användarens data
        const { error } = userSchema.validate(req.body);
        
        // kolla om det finns några valideringsfel
        if (error) {
            validationError.success = false;
            validationError.message = error.details[0].message;
            validationError.status = 400;
            return next(validationError);
        }

        // kolla om lösenorden matchar med varandra
        if (password !== confirmPassword) {
            validationError.success = false;
            validationError.message = "Passwords do not match";
            validationError.status = 400;
            return next(validationError);
        } 

        // skapa ett objekt med användarens data
        const newUserToDb = {
            userName,
            firstName,
            lastName,
            password,
            email,
            userId: randomId
        }

        // lägg till användaren i databasen
        userDb.insert(newUserToDb);

        // skicka en respons till klienten/frontend
        res.status(201).json({
            success: true,
            message: "User registered",
            status: 201
        })
    }

    
    loginUser = async (req, res, next) => {

        // validera användarens data
       const { error } = loginSchema.validate(req.body);

        // destrukturera användarens data
        const { userNameOrEmail, password, } = req.body;

        // kolla om det finns några valideringsfel
        if (error) {
            validationError.success = false;  
            validationError.message = error.details[0].message;
            validationError.status = 400;
            return next(validationError);
        }

        // hämta användaren från databasen med användarnamn och lösenord som matchar med användarens data
        const user = await userDb.findOne({
            $or: [
                { userName: userNameOrEmail},
                { email: userNameOrEmail},
            ], password: password
         });

        // kolla om användaren inte finns
        if (!user) {
            validationError.success = false;
            validationError.message = "Invalid username or password";
            validationError.status = 400;
            return next(validationError);
        }

        // skapa en accessToken
        const accessToken = jwt.sign({
            userId: user.userId,
            isAdmin: user.isAdmin,
            image: user.image
        }, process.env.SECRET_KEY, { expiresIn: '10s' });

        // skapa en refreshToken
        const refreshToken = jwt.sign({
            userId: user.userId,
            isAdmin: user.isAdmin,
            image: user.image
        }, process.env.REFRESH_SECRET_KEY);

        // skicka accessToken och refreshToken till klienten/frontend
        res.cookie('token', accessToken, {
            httpOnly: true,
            samSite: 'strict' // cookie kan endast skickas över https och inte http
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            samSite: 'strict' // cookie kan endast skickas över https och inte http
        });

        res.status(200).json({
            success: true,
            message: "User logged in",
            status: 200,
            accessToken,
            refreshToken
        })
        
    }

    checkAuthUser = (req, res, next) => {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            validationError.success = false;
            validationError.message = "No token found";
            validationError.status = 401;
            return next(validationError);
        }

        jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, (err, decoded) => {
            if (err) {
                validationError.success = false;
                validationError.message = "Invalid token";
                validationError.status = 401;
                return next(validationError);
            }

            const accessToken = jwt.sign({
                userId: decoded.userId,
                isAdmin: decoded.isAdmin,
                image: decoded.image
            }, process.env.SECRET_KEY, { expiresIn: '15m' });

            res.cookie('token', accessToken, {
                httpOnly: true,
                samSite: 'strict' // cookie kan endast skickas över https och inte http
            });

            req.user = decoded;
            next();
        })
    }

    checkIsAdmin = async (req, res, next) => {
        if (!req.user.isAdmin === true) {
            validationError.success = false;
            validationError.message = "User is not admin";
            validationError.status = 403;
            return next(validationError);
        }
        next();
    }

    insertAdminTrue = async (req, res, next) => {
        const userId = req.params.id;

        const user = await userDb.findOne({ userId });

        if (!user) {
            validationError.success = false;
            validationError.message = "User not found";
            validationError.status = 404;
             return next(validationError);
        }

        // uppdatera användaren
        userDb.update({ userId }, { $set: { isAdmin: true } });

        res.status(200).json({
            success: true,
            message: "Admin is true inserted",
            status: 200
        })
      
    }

    isertAdminFalse = async (req, res, next) => {
        const userId = req.params.id;

        const user = await userDb.findOne({ userId })
        
        if (!user) {
            validationError.success = false;
            validationError.message = "User not found";
            validationError.status = 404;
            return next(validationError);
        }

        userDb.update({ userId }, { $set: { isAdmin: false } });

        res.status(200).json({
            success: true,
            message: "Admin is false inserted",
            status: 200
        })


    }

    getAllUsers = async (req, res) => {
        const users = await userDb.find();
        res.json(users);
    }

    getUserImage = async (req, res) => {
        if (!req.user.image) {
            return res.status(404).json({
                success: false,
                message: 'No image found'
            });
        }
        res.sendfile('./config/usersImages/' + req.user.image); 
    }

    logoutUser = (req, res) => {
        res.clearCookie('token');
        res.clearCookie('refreshToken');
        res.status(200).json({
            success: true,
            message: "User logged out",
            status: 200
        })
    }

    getUserDetails = async (req, res, next) => {
        const userId = req.user.userId;

        const user = await userDb.findOne({ userId })

        if (!user) {
            validationError.success = false;
            validationError.message = "User not found";
            validationError.status = 404;
            return next(validationError);
        }

        user.firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
        user.lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

        res.status(200).json({
            success: true,
            message: "User found",
            user
        })
    }   
}