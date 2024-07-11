/*       
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
            user,
            userUrl: `http://localhost:8085/ns-sneakers/userImage/${user.image}`
        })
    }   
} */ 