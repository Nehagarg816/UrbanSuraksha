// middleware.js
const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./utils/listingSchema");

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    console.log("Body received in validation:", req.body);
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        console.log("Validation error:", errMsg);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    const { error } = Review.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not author of the review");
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const job = await Listing.findById(id);
    if (!job || job.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
    }
    next();
};

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated() || req.user.type !== "Buyer") {
        return res
            .status(401)
            .json({ error: "Unauthorized. User login required." });
    }
    next();
};
