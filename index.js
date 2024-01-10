const express = require("express");
const cors = require("cors");
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const loginModel = require("./model/login");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// API creation
app.get('/', (request, response) => {
    response.send("Hai");
});

// Login route
app.post('/login', async (request, response) => {
    const { username, password } = request.body;

    try {
        const user = await loginModel.findOne({ username, password });
        
        if (user) {
            // Successful login
            response.status(200).json({ message: "Login successful" });
        } else {
            // Invalid credentials
            response.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
});

// Assign port
app.listen(3005, () => {
    console.log("Port is running on 3005");
});
