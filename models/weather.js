// 城市id
// 城市名
// 省
// 天气
// 天气code
// 温度
// 更新时间
class WeatherHelper {
    static getWeatherLocalize = function(weatherCode) {
        let weatherCodeMap = [
            '龙卷风',//0 tornado
            '热带风暴',//1 tropical storm
            '飓风',//2 hurricane
            '次剧烈雷雨',//3 severe thunderstorms
            '雷雨',//4 thunderstorms
            '雨夹雪',//5 mixed rain and snow
            '雨夹雪',//6 mixed rain and sleet
            '雨夹雪',//7 mixed snow and sleet
            '毛毛雨',//8 freezing drizzle
            '小雨',//9 drizzle
            '冻雨',//10 freezing rain
            '小阵雨',//11 showers
            '大阵雨',//12 showers
            '小雪花',//13 snow flurries
            '小雪阵雨',//14 light snow showers
            '风雪天',//15 blowing snow
            '雪',//16 snow
            '冰雹',//17 hail
            '雨夹雪',//18 sleet
            '灰尘',//19 dust
            '雾',//20 foggy
            '霾',//21 haze
            '烟',//22 smoky
            '风暴',//23 blustery
            '多风',//24 windy
            '冷',//25 cold
            '多云',//26 cloudy
            '多云',//27 mostly cloudy (night)
            '多云',//28 mostly cloudy (day)
            '多云转晴',//29 partly cloudy (night)
            '多云转晴',//30 partly cloudy (day)
            '晴',//31 clear (night)
            '晴',//32 sunny
            '少云',//33 fair (night)
            '少云',//34 fair (day)
            '混合雨和冰雹',//35 mixed rain and hail
            '炎热',//36 hot
            '零星雷暴',//37 isolated thunderstorms
            '零星雷阵雨',//38 scattered thunderstorms
            '零星雷阵雨',//39 scattered thunderstorms
            '零星阵雨',//40 scattered showers
            '大雪',//41 heavy snow
            '分散的阵雪',//42 scattered snow showers
            '大雪',//43 heavy snow
            '部分多云',//44 partly cloudy
            '雷阵雨',//45 thundershowers
            '阵雪',//46 snow showers
            '零星雷阵雨',//47 isolated thundershowers
            '无法获取',//48 3200 not available
        ];

        if (weatherCode < weatherCodeMap.length) {
            return weatherCodeMap[weatherCode];
        }
        return weatherCodeMap[weatherCodeMap.length - 1];
    }
}

module.exports = WeatherHelper;