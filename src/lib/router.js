const express = require('express');
const axios = require('axios');
const router = express.Router();

const api = axios.create({
  method: 'GET',
  baseURL: 'https://pro-api.coinmarketcap.com',
  headers: {
    'X-CMC_PRO_API_KEY': '079bd5d3-ddfb-4af4-a28c-ed76480981fc',
    Accept: 'application/json',
  },
});
router.get('/', async (req, res) => {
  const config = {
    params: {
      ...req.query,
    },
  };
  api('/v1/cryptocurrency/listings/latest?limit=10', config)
    .then((response) => response.data)
    .then((value) => res.json(value.data))
    .catch((err) => console.log(err));
});

router.get('/info', async (req, res) => {
  api('/v1/cryptocurrency/category?id=605e2ce9d41eae1066535f7cs')
    .then((response) => response.data)
    .then((value) => res.json(value.data))
    .catch((err) => console.log(err));
});

// router.get('/hello', async (_req, res) => {
//   res.status(200).json({ message: 'Hello World!' });
// });

module.exports = router;
