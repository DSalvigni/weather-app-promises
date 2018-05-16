const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var URL = require('url');

const arg = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch the weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;



geocode.geocodeAddress(arg.address)
.then((results)=>{
    console.log('Address: '+results.address);
    return weatherResults = weather.getWeather(results.latitude,results.longitude) ;
    //console.log(JSON.stringify(results));
    })
.then((weatherResults)=> {
    console.log(JSON.stringify(weatherResults,undefined,2));
})
.catch((errorMessage)=>{
    console.log(errorMessage);
    }
)
