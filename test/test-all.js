const { test } = require('./test-utils');

console.log('🌳 Running All Binary Tree Tests...\n');

// Run all test files
require('./test-basic');
require('./test-traversal');
require('./test-properties');
require('./test-validation');
require('./test-path-sum');
require('./test-construction');

console.log('\n🎉 All tests completed!');
console.log('\nTo run individual test suites:');
console.log('- node test/test-basic.js');
console.log('- node test/test-traversal.js');
console.log('- node test/test-properties.js');
console.log('- node test/test-validation.js');
console.log('- node test/test-path-sum.js');
console.log('- node test/test-construction.js');