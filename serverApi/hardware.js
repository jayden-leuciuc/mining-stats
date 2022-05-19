const axios = require('axios');

module.exports = {
  getAllHardware: async function (req, res) {
    try {
      const response = await axios.get(`https://api.minerstat.com/v2/hardware`);
      res.json(response.data);
    } catch (err) {
      res.send(err);
    }
  },
};
