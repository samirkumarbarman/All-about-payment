import rateLimit from "express-rate-limit";

const limitRate = rateLimit ({
    windowMs : 15 * 60 * 1000,
    max : 100,
    standardHeaders : true,
    lagacyHaders : true,
});

export default limitRate;