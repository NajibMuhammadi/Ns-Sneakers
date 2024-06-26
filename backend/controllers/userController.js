import { userDb } from "../models/userModels.js";

import userSchema from "../models/userModels.js";

export default class UserController{
    registerUser = async (req, res) => {

        // destrukturera användarens data
        const { userName, firstName, lastName, password, validatePasssword, email } = req.body;

        // hämta alla användare från databasen
        const users = await userDb.find();

        // kolla om användarens användarnamn redan finns
        if (users.find(user => user.userName === userName.toLowerCase())) {
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
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
                status: 400
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
            firstName: firstName,
            lastName: lastName,
            userName: userName.toLowerCase(),
            password: password,
            validatePasssword: validatePasssword,
            email: email,
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
}