'use strict';

var dayInMs = 1000 * 60 * 60 * 24,
  julian1970 = 2440588,
  julian2000 = 2451545;

var julian = function(date) {
  this.d = (date == null) ? new Date() : (date instanceof Date) ? date : new Date(date);
};

julian.prototype.julian = function(julianDate) {
  if (julianDate) {
    this.d = new Date((julianDate + 0.5 - julian1970) * dayInMs);
    return this;
  }
  return this.d.valueOf() / dayInMs - 0.5 + julian1970;
};

julian.prototype.getDate = function() {
  return this.d;
};

julian.prototype.julianDays = function(julianDays) {
  if (julianDays) {
    this.julian(julianDays + julian2000);
    return this;
  }
  return this.julian() - julian2000;
};

module.exports = julian;
