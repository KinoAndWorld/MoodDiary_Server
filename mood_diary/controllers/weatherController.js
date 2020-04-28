class weatherController {
    static async fetchWeatherByDate(ctx) {
        let lat = ctx.query.lat;
        let lon = ctx.query.lon;

        console.log(ctx.query);

        var OAuth = require('oauth');
        var header = {
            "X-Yahoo-App-Id": "FmuryE7c"
        };
        var request = new OAuth.OAuth(
            null,
            null,
            'dj0yJmk9VnlDWGoxVlJtMnlwJmQ9WVdrOVJtMTFjbmxGTjJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTFi',
            '084850b6cc64c5b103ecef70b7b4ca2a9afc104c',
            '1.0',
            null,
            'HMAC-SHA1',
            null,
            header
        );

        return new Promise((resolve, reject) => {
            request.get(
                'https://weather-ydn-yql.media.yahoo.com/forecastrss?u=c&format=json&lat=' + lat + "&lon=" + lon,
                null,
                null,
                function (err, data, result) {
                    if (err) {
                        console.log("雅虎接口失败" + err);
                        reject(err);
                    } else {
                        console.log(data);
                        ctx.response.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: '查询成功',
                            data: weatherController.weatherData(data)
                        }
                        resolve(data);
                    }
                }
            );
        });
    }

    static weatherData = function(data) {
        var jsonData = JSON.parse(data);
        // 城市id
        // 城市名
        // 省
        // 国家
        // 天气
        // 天气code
        // 温度
        // 更新时间
        const weaHelper = require('../models/weather');
        var weatherCode = jsonData.current_observation.condition.code;
        var weatherLocalText = weaHelper.getWeatherLocalize(weatherCode);
        
        return {
            "cityId": jsonData.location.woeid,
            "city": jsonData.location.city,
            "region": jsonData.location.region,
            "country": jsonData.location.country,
            "updateTime": jsonData.current_observation.pubDate,
            "weatherText": weatherLocalText,
            "weatherCode": weatherCode,
            "temperature": jsonData.current_observation.condition.temperature,
        };
    }
}

module.exports = weatherController;