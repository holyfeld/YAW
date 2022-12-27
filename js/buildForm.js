// 
// javascript code to build a form for getting information about the users org culture
//
'use strict';

const formData = [
    {topic:"Orientation",
     text: "something useful here",
     hurt: "Power Oriented",
     cripple: "Rule Oriented",
     boost: "Performance Oriented"}];

function buildDiv (rowNumber) {
// take a row from the data array and build division of the form

let dataRow = formData[rowNumber];

let length = dataRow.length

return(length);
}

module.exports = buildDiv  
