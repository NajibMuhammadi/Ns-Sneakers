import { userDb } from "../models/userModels.js";

export default class AuthController {
    registerUser = async (req, res) => {
        const { userName, firstName, lastName, password, confirmPassword, email } = req.body;

        const users = await userDb.find();

        let randomId = Math.random().toString(36).slice(2, 7).toUpperCase();
        if (users.length >= 1) {
            while (users.find(user => user.userId === randomId)) {
                randomId = Math.random().toString(36).slice(2, 7).toUpperCase();
            }
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

        res.status(201).json({
            success: true,
            message: "User registered",
            status: 201
        });
    }

    loginUser = async (req, res) => {
        res.status(200).json({
            success: true,
            message: "User logged in",
            status: 200,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
        })
    }

    getAllUser = async (req, res) => {
        const users = await userDb.find();
        users.map(user => delete user.password);

        return res.status(200).json({
            success: true,
            message: 'Active users found.',
            status: 201,
            users: users
        });
    }

    insertAdminTrue = async (req, res) => {
        res.status(200).json({
            success: true,
            message: "Admin is true inserted",
            status: 200,
            userId: req.params.id
        })
    }

    insertAdminFalse = async (req, res) => {
        res.status(200).json({
            success: true,
            message: "Admin is false inserted",
            status: 200,
            userId: req.params.id
        })
    }
}