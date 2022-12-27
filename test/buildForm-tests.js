// test for building the YAW form
//
// the tests for building a row (div actually)

//'use strict'; // just because I think it's a good idea

let assert = require ('assert');
const checkFormData = require('../js/buildForm.js');

describe('make sure we have a complete data', function() {
  describe('checkFormData',function() {
    it('should have 5 elements', function() {
      assert.equal(5, checkFormData(0));
    });
    it('should not have this row', function() {
      assert.equal(0, checkFormData(1));
    });    

  });

});




