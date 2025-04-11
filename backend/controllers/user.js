const Buyer = require("../models/user");
const passport = require("passport");

// Signup API
module.exports.signup = async (req, res, next) => {
    try {
        console.log("Signup req.body:", req.body);
        const { username, email, password } = req.body;
        const newUser = new Buyer({ email, username: email });
        const registeredUser = await Buyer.register(newUser, password);
        console.log("Registered user:", registeredUser);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({
                data: { email: email },
                success: true,
                message: "Signup successful!",
            });
        });
    } catch (e) {
        console.log("Signup Error:", e.message);
        return res.status(400).json({ success: false, message: e.message });
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }
        const user = await Buyer.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found.",
            });
        }
        Buyer.authenticate()(email, password, (err, user, options) => {
            if (err || !user) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password.",
                });
            }
            req.login(user, (loginErr) => {
                if (loginErr) {
                    return next(loginErr);
                }

                return res.status(200).json({
                    data: { email: user.email },
                    success: true,
                    message: "User login successful!",
                });
            });
        });
    } catch (error) {
        console.error("User Login Error:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

// Logout API
module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if (err)
            return res
                .status(500)
                .json({ success: false, message: err.message });
        res.status(200).json({ success: true, message: "Logout successful!" });
    });
};
