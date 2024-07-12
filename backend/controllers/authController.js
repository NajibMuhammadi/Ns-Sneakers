import { userDb } from "../models/userModels.js";

export default class AuthController {
    registerUser = async (req, res) => {
        res.status(201).json({
            success: true,
            message: "User registered",
            status: 201,
            user: req.user
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

    userInsertProfileImage = async (req, res) => {
        res.status(200).json({
            filename: req.file.filename,
            success: true,
            message: 'Image uploaded successfully',
            image_url: `http://localhost:8085/ns-sneakers/auth/userImage/${req.file.filename}`
        })
    }

    getUserDetails = async (req, res) => {
        res.status(200).json({
            success: true,
            message: "User found",
            status: 200,
            user: req.user,
            image_url: `http://localhost:8085/ns-sneakers/auth/userImage/${req.user.image}`
        })
    }

    logout = async (req, res) => {
        res.status(200).json({
            success: true,
            message: "User logged out",
            status: 200
        })
    }
}
