import { userDb } from "../models/userModels.js";
import jwt from "jsonwebtoken";

import {userSchema, loginSchema} from "../models/userModels.js";

export default class UserController{
    registerUser = async (req, res) => {

        // destrukturera användarens data
        const { userName, firstName, lastName, password, validatePasssword, email } = req.body;

        // hämta alla användare från databasen
        const users = await userDb.find();

        // kolla om användarens användarnamn redan finns
        if (users.find(user => user.userName === userName)) {
            return res.status(400).json({
                success: false,
                message: "Username already exists",
                status: 400
            })
        }

        // kolla om användarens email redan finns
        if (users.find(user => user.email === email)) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
                status: 400
            })
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
            return res.status(403).json({
                success: false,
                message: error.details[0].message,
                status: 403
            })
        }

        // kolla om lösenorden matchar med varandra
        if (password !== validatePasssword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
                status: 401
            })
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
            message: "User created",
            status: 201
        })
    }

    
    loginUser = async (req, res) => {

        // validera användarens data
       const { error } = loginSchema.validate(req.body);

        // destrukturera användarens data
        const { userNameOrEmail, password, } = req.body;

        // kolla om det finns några valideringsfel
        if (error) {
            return res.status(403).json({
                success: false,
                message: error.details[0].message,
                status: 403
            })
        }

        // hämta användaren från databasen med användarnamn och lösenord som matchar med användarens data
        const user = await userDb.findOne({
            $or: [
                { userName: userNameOrEmail},
                { email: userNameOrEmail},
            ], password: password
         });

        // kolla om användaren inte finns
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Username or password is incorrect",
                status: 400
            })
        }

        // skapa en access token
        const accessToken = jwt.sign({
            userName: user.userName,
            userId: user.userId},
            process.env.SECRET_KEY,
            { expiresIn: '10m' });
        
        res.cookie('token', accessToken, {
            httpOnly: true,
            samSite: 'strict'
        });

        res.status(200).json({
            success: true,
            message: "User logged in",
            status: 200,
            accessToken
        })
        
    }

    checkAuthUser = (req, res, next) => {
        const accessToken = req.cookies.token; 

        if (!accessToken) return res.status(401).json({
            success: false,
            message: "Access token not found",
            status: 401
        });

        // verifiera token
        jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: "Token is not valid",
                    status: 403
                })
            }
            
            delete user.password;
            req.user = user;
            next();
        })
    }
}