import Loader from './loader.js';
import Config from './config.js';

let apiKey = process.env.APPYAY_API_KEY;
let url = 'content-types/' + Config.CONTENT_TYPE_ID.feature + '/entries';

//use this URL if you want to fetch Feature data from the Appyay Content Delivery API
let featuresApiUrl = Config.API_URL + url + '?apikey=' + process.env.APPYAY_API_KEY;

//use this URL if you want to use local Feature data
let featuresLocalUrl = Config.LOCAL_DATA_URL;

function init() {
    let config = {
        partials: []
    };

    config.partials.push({
        url: "src/app/partials/services.html",
        dataUrl: featuresApiUrl,
        target: ".features"
    });

    Loader.load(config);
}

if (!apiKey) {
    console.error('APPYAY_API_KEY Environment Variable is not set (check .env file)');
} else {
    console.info(`Running app in ${ process.env.NODE_ENV } mode...`);
    init();
}