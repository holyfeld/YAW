// 
// javascript code to build a form for getting information about the users org culture
//

const formData = [
    {
    topic:"Orientation",
    text: "something useful here",
    hurt: "Power Oriented",
    cripple: "Rule Oriented",
    boost: "Performance Oriented"}
];
     
function checkFormData (rowNumber) {

// check the data for the form build
  try {
    numItems = Object.keys(formData[rowNumber]).length  
    return numItems;
  }
  catch {
    return undefined;
  }
// how many items in the row?
}

module.exports = checkFormData;  

// for local testing
//result = checkFormData(1);
//console.log(result);