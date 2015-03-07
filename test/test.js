'use strict';

var assert = require("assert"); // node.js core module
var Julian = require('../lib/julian.js');  // our module

describe('Date Utilities', function(){

  describe('convert gregorian to julian', function(){

    it('should return correct julian date for unix epoch', function(){
      var julianDate = Julian.toJulian(new Date(0));
      assert.equal(2440587.5, julianDate);
    });

    it('should return correct julian date for 2015-03-07 UTC', function() {
      var julianDate = Julian.toJulian(new Date('2015-03-07UTC'));
      assert.equal(2457088.5, julianDate);
    });

  });

  describe('convert julian to gregorian', function() {
    it('should return correct julian date for unix epoch', function() {
      var julianDate = Julian.toJulian(new Date(0));
      assert.equal(new Date(0).getTime(),Julian.fromJulian(julianDate).getTime());
    });

    it('should return correct gregorian date for 2015-03-07 UTC', function() {
      var julianDate = Julian.toJulian(new Date('2015-03-07UTC'));
      assert.equal(new Date('2015-03-07UTC').getTime(),Julian.fromJulian(julianDate).getTime());
    });
  });

  describe('convert js date to julian days', function() {
    it('should return correct julian days for unix epoch', function() {
      assert.equal(-10957.5,Julian.toDays(new Date(0)));
    });

    it('should return correct julian days for unix epoch', function() {
      assert.equal(5543.5,Julian.toDays(new Date('2015-03-07UTC')));
    });
  });

});
