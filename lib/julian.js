'use strict';

var dayInMs = 1000 * 60 * 60 * 24,
    julian1970 = 2440588,
    julian2000 = 2451545;

var julian = {};

julian.toJulian = function(date) {
  return date.valueOf() / dayInMs - 0.5 + julian1970;
};

julian.fromJulian = function(julianDate) {
  return new Date((julianDate + 0.5 - julian1970) * dayInMs);
};

julian.toDays = function(date) {
  return this.toJulian(date) - julian2000;
};

module.exports = julian;
