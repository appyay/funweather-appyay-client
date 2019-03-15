import Loader from './loader.js';
import Config from './config.js';

let apiKey = Config.APPYAY_API_KEY;

//use this URL if you want to fetch Feature/Review data from the Appyay Content Delivery API
let featuresApiUrl = Config.API_URL + 'content-types/' + Config.CONTENT_TYPE_ID.feature + '/items?apikey=' + apiKey;
let reviewsApiUrl = Config.API_URL + 'content-types/' + Config.CONTENT_TYPE_ID.review + '/items?apikey=' + apiKey;

//use this URL if you want to use local Feature/Review data
let featuresLocalUrl = Config.LOCAL_FEATURES_URL;
let reviewsLocalUrl = Config.LOCAL_REVIEWS_URL;


function init() {
    let config = {
        partials: []
    };

    config.partials.push({
        url: "src/app/partials/features.html",
        dataUrl: featuresApiUrl,
        target: ".features"
    });

    config.partials.push({
        url: "src/app/partials/reviews.html",
        dataUrl: reviewsApiUrl,
        target: ".reviews"
    });

    Loader.load(config);
}

if (!apiKey) {
    console.error('APPYAY_API_KEY Environment Variable is not set (check .env file)');
} else {
    console.info(`Running app in ${ process.env.NODE_ENV } mode...`);
    init();
}