document.getElementById('btn').onclick = function(){
    var option={
        timeout:5000,
        enableHighAccuracy:true
        // ,maxAge
    }
    navigator.geolocation.getCurrentPosition(showPosition,errorhandler,option)
    navigator.geolocation.watchPosition
}

function showPosition(pos){
    console.log(pos)
    var long = pos.coords.longitude
    var lat = pos.coords.latitude
    console.log(long+":::"+lat)
    location.replace('https://maps.google.com/?q='+lat+'+,'+long)

}


function errorhandler(err){

    console.log(err)
    switch(err.code){
        case 1:
            alert('allow access location')
            break
    }
}
/**
 * Error
 * network--->timeout
 * permission denied
 * 
 */



// function watchposition(){
//     getCurrentPosition
//     delay//maxAge
// }




