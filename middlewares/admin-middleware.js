const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.user);

        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ msg: "Access denied: user is not an admin" });
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;
