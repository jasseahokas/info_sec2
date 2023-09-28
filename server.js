const express = require("express");
const cors = require("cors");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable CORS (this allows any domain to make requests, consider narrowing the scope for production use)
app.use(cors());

app.post("/endpoint", (req, res) => {
    console.log("Received POST request:", req.body);
    res.json({ message: "Request received!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
