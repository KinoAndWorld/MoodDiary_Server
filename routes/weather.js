const router = require('koa-router')()
const WeatherController = require('../controllers/weatherController');

router.prefix('/api/v1')

router.get('/weather', WeatherController.fetchWeatherByDate)

module.exports = router
