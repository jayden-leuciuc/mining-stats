const axios = require('axios');

module.exports = {
  getExchange: async function (req, res) {
    let baseCurrency = req.query.base;
    let targetCurrency = req.query.target;

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${baseCurrency}&vs_currencies=${targetCurrency}`
      );
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },
};
