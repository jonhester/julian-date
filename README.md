# julian-date [![npm](https://img.shields.io/npm/v/julian-date.svg)](https://www.npmjs.com/package/julian-date) [![MIT](https://img.shields.io/npm/l/julian-date.svg)](https://github.com/jonhester/julian-date/blob/master/LICENSE) [![Build Status](https://travis-ci.org/jonhester/julian-date.svg?branch=master)](https://travis-ci.org/jonhester/julian-date) 

### Installing via NPM
```
npm install julian-date
```

### Browser
[Browser Download](https://github.com/jonhester/julian-date/releases/download/v1.0.0/julianDate.min.js.zip) 
```html
<script src="julianDate.min.js"></script>
<script>
var j = new JulianDate();
</script>
```
### Create new JulianDate
```js
var JulianDate = require('julian-date');

var j = new Julian();

// Get the julian date
j.julian(); // 2457088.5

// Get the javascript date
j.getDate(); // Fri Mar 06 2015 19:00:00 GMT-0500 (EST)


// Get the julian days
j.julianDays(); // 5543.5

```

### Create new JulianDate from julian days or julian date

```js
var JulianDate = require('julian-date');

var j1 = new Julian().julian(2457088.5);
j1.getDate() // Fri Mar 06 2015 19:00:00 GMT-0500 (EST)

var j2 = new Julian().julianDays(5543.5)
j2.getDate() // Fri Mar 06 2015 19:00:00 GMT-0500 (EST)

```
