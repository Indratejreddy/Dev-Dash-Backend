const axios = require("axios");

async function getTechStack(url, key) {
  const options = {
    method: "GET",
    url: "https://www.genelify.com/api/v1/technology-lookup",
    params: { url: url },
    headers: {
      "Content-Type": "application/json",
      "X-GENELIFY-API-KEY": key,
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
