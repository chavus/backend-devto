const moment = require('moment');

function getDate()
{
    return moment().format()
}

module.exports = { 
    ...moment,  
    getDate
}
