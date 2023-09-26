const express = require("express");
const axios = require('axios');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/authenticate", async (req, res) => {
    const {
        username
    } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/", {
               username: username, secret: username, first_name: username
            }, {
                headers: {
                    "Private-Key": "70c767f0-061d-46d5-a63f-09fabb2aee10"
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

});

app.listen(3001);