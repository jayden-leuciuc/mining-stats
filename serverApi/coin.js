const axios = require('axios');
require('dotenv').config();

module.exports = {
  testApi: async function (req, res) {
    res.json({ status: 'Ok' });
  },
  getCoinMarketData: async function (req, res) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=max`
      );
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },
  getCoinDescription: async function (req, res) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${req.params.id}`
      );
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },

  getMineableCoins: async function (req, res) {
    try {
      const response = await axios.get(
        `https://whattomine.com/calculators.json`
      );
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },

  getAllPools: async function (req, res) {
    try {
      const response = await axios.get(`https://api.minerstat.com/v2/pools?`);
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },

  getPool: async function (req, res) {
    try {
      const response = await axios.get(
        `https://api.minerstat.com/v2/pools?${req.params.id}`
      );
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },

  getCoinNews: function (req, res) {
    const options = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {
        q: req.params.id,
        lang: 'en',
        page: '1',
        page_size: '10',
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        res.json(error);
      });
  },
};
