import jwt from 'jsonwebtoken';
const error = new Error();

const authentication = {
    checkAuthUser: (req, res, next) => {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            error.success = false;
            error.message = "No token provided for authentication";
            error.status = 401;
            return next(error);
        }

        jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, (err, decoded) => {
            if (err) {
                error.success = false;
                error.message = "Invalid token";
                error.status = 401;
                return next(error);
            }

            const accessToken = jwt.sign({
                _id: decoded._id,
                isAdmin: decoded.isAdmin
            }, process.env.SECRET_KEY, { expiresIn: '15m' });

            res.cookie('token', accessToken, {
                httpOnly: true,
            });

            req.user = decoded;
            next();
        })
    }
}

export default authentication;