// test for building the YAW form
//
// the tests for building a row (div actually)

'use strict'; // just because I think it's a good idea

let buildDiv = require ('../js/buildForm.js'); 
let assert = require ('assert');

describe('make sure we have a complete row of data', function() {
  describe('buildDiv',function() {
    it('should be Orientation', function() {
      assert.equal('Orientation', buildDiv(dataRow[0]));
    });

  });

});




