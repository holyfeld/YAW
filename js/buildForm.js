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

  numItems = Object.keys(formData[rowNumber]).length
  
// how many items in the row?
  return numItems;
}

module.exports = checkFormData;  
