// apiCall.js
const express = require("express");
const axios = require("axios");
const router = express.Router();
const API_KEY = '724261b2f45e3c03730f6cbdc3445cce'

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=`${API_KEY}`

router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/apiCall.html'))
    .post((req, res) => {
        const listUsers = async () => {
            try {
                const axiosResponse = await axios.get('https://api.kanye.rest/');
                res.send("<h1></h1>" +
                    "<p style='font-size:100px; '>"+axiosResponse.data.quote+"</p>" +
                    "<br><br>" + "" +
                    "<form action=\"apiCall\" method=\"post\">\n" +
                    "    <button type=\"submit\">Get another Quotex</button>\n" +
                    "</form>"+
                    "<a href='apiCall'>Back...</a>");
                // console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        listUsers();
    })

module.exports = router;
