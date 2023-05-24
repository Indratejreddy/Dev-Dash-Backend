require("dotenv").config();

const axios = require("axios");

async function getTechStack(url) {
  const options = {
    method: "GET",
    url: "https://www.genelify.com/api/v1/technology-lookup",
    params: { url: url },
    headers: {
      "Content-Type": "application/json",
      "X-GENELIFY-API-KEY": process.env.X_GENELIFY_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = getTechStack;
