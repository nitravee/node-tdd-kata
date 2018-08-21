// App code here

function stringCal(str){
    if(str.includes(',')){
        return str.split(',').map(Number).reduce((x,y) => x+y,0)
    }
    if(str === ''){
        return 0
    }
    if(!Number.isNaN(str)){
        return parseInt(str)
    }
}


module.exports.strCal = stringCal