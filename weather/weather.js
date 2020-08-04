const request = require('request');
var skyKey = '*******';

// var getWeather = (latitude,longitude,callback) =>{
//     request({
//        // url: 'https://api.darksky.net/forecast/xxx/45.1847248,9.1582069',
//         url: 'https://api.darksky.net/forecast/'+skyKey+'/'+latitude+','+longitude,
//         json: true
//     },(error,response,body) => {
//         if(error){
//             callback('Unable to connect to forecast.io');
//         }
//         else if(!error && response.statusCode === 400){
//             callback('URI format invalid for forecast.io');
//         } 
//         else if(!error && response.statusCode === 200){

//             callback(undefined,{
//                 temperature: body.currently.temperature,
//                 apparentTemperature: body.currently.apparentTemperature,
//                 summary: body.currently.summary
//             });
//             //console.log(body.currently.temperature);
//         }
//     });
// };


var getWeather = (latitude,longitude) =>{
    return new Promise((resolve,reject) =>{
        request({
            // url: 'https://api.darksky.net/forecast/xxx/45.1847248,9.1582069',
             url: 'https://api.darksky.net/forecast/'+skyKey+'/'+latitude+','+longitude,
             json: true
         },(error,response,body) => {
             if(error){
                 reject('Unable to connect to forecast.io');
             }
             else if(!error && response.statusCode === 400){
                 reject('URI format invalid for forecast.io');
             } 
             else if(!error && response.statusCode === 200){
     
                 resolve({
                     temperature: body.currently.temperature,
                     apparentTemperature: body.currently.apparentTemperature,
                     summary: body.currently.summary
                 });
                 //console.log(body.currently.temperature);
             }
         });
    });
}



module.exports.getWeather=getWeather;
