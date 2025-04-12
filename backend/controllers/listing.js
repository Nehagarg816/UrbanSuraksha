const Listing = require("../models/listing");

// GET /listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.json(allListings);
};

// GET /listings/:id
module.exports.showListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id)
            .populate({ path: "reviews", populate: { path: "author" } })
            .populate("owner");

        if (!listing) {
            return res.status(404).json({ error: "Listing not found" });
        }

        res.json(listing);
    } catch (err) {
        next(err);
    }
};

// POST /listings
module.exports.createListing = async (req, res, next) => {
    try {
        const { path: url, filename } = req.file;

        const newListing = new Listing(req.body); // No need for req.body.listing
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        await newListing.save();

        res.status(201).json({
            message: "New listing created successfully",
            listing: newListing,
        });
    } catch (err) {
        next(err);
    }
};

// GET /listings/:id/edit
module.exports.editListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            return res
                .status(404)
                .json({ error: "Listing not found for editing" });
        }

        const modifiedImageUrl = listing.image.url.replace(
            "/upload",
            "/upload/w_300"
        );
        res.json({ listing, thumbnailUrl: modifiedImageUrl });
    } catch (err) {
        next(err);
    }
};

// PUT /listings/:id
module.exports.updateListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!listing) {
            return res
                .status(404)
                .json({ error: "Listing not found for update" });
        }

        if (req.file) {
            const { path: url, filename } = req.file;
            listing.image = { url, filename };
            await listing.save();
        }

        res.status(200).json({
            message: "Listing updated successfully",
            listing,
        });
    } catch (err) {
        next(err);
    }
};

// DELETE /listings/:id
module.exports.deleteListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedListing = await Listing.findByIdAndDelete(id);

        if (!deletedListing) {
            return res
                .status(404)
                .json({ error: "Listing not found for deletion" });
        }

        res.status(200).json({
            message: "Listing deleted successfully",
            deletedListing,
        });
    } catch (err) {
        next(err);
    }
};
