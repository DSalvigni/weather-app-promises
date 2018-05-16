const request = require('request');

//API google key
//var googleKey = '';
//Geocode Function to manage the API call and errors

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {    
        var encodedAddress = encodeURIComponent(address);
            request({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?key=&address='+encodedAddress,
                //url: 'https://maps.googleapis.com/maps/api/geocode/json?key='+googleKey+'&address='+encodedAddress,
                json: true
            },(error,response,body)=>{
                if(!error && body.status === 'OK'){                  
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                        
                    });

                }
                else if(body.status === 'ZERO_RESULTS'){
                    reject('The address has been not found from Google API');
                }else  if(error){
                    reject('Unable to connect to Google API');
                }
            });
        
        });
    };



module.exports.geocodeAddress=geocodeAddress;

