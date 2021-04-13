export default {
    baseApiUrl: process.env.NODE_ENV === "production" ?
        "production" : "http://localhost/Inphonite.Web/api",
    sessionTimeout: 15 * 60000 - 5000 // timeout a little before the api does
};