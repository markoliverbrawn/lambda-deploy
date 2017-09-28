var test = require('unit.js');
var str = 'Squirrel, world!';

test.string(str).startsWith('Squirrel');

if (test.string(str).startsWith('Squirrel')) {
  console.log('Passed');
}
