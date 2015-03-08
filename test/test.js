'use strict';

var assert = require("assert"); // node.js core module
var Julian = require('../');  // our module

describe('create new julian date', function() {
  it('should create julian date with no param', function() {
    var j = new Julian();
    assert(j.getDate());
    assert(j.julian());
    assert(j.julianDays());
  });

  it('should create julian date from julian date', function() {
    var j = new Julian().julian(2440587.5);
    assert.equal(new Date(0).valueOf(), j.getDate().valueOf());
  });


  it('should create julian date from julian days', function() {
    var j = new Julian().julianDays(5543.5);
    assert.equal(new Date('2015-03-07UTC').valueOf(),j.getDate().valueOf());
  });

  it('should return correct julian date from 2015-03-07 UTC', function() {
    var j = new Julian('2015-03-07UTC');
    assert.equal(2457088.5,j.julian());
  });

  it('should return correct julian days from unix epoch', function() {
    var j = new Julian(new Date(0));
    assert.equal(-10957.5,j.julianDays());
  });

  it('should return correct julian days from 2015-03-07 UTC', function() {
    var j = new Julian('2015-03-07UTC');
    assert.equal(5543.5,j.julianDays());
  });
});
