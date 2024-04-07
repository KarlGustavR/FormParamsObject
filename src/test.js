const FormParamsObject = require('./FormParamsObject');

let params = new FormParamsObject({
  param1: 'test1',
  param2: {
    param21: 'test2',
    param22: {
      number: ["123", "456"],
      text: ["text1", "text2"],
    }
  }
});

console.log('Initial object:', JSON.stringify(params.getFullObject(), null, 2));

console.log('Get param2.param21:', params.getObjectProperty('param2.param21')); // Should log 'test2'

console.log('Get non-existent param1.param11.param33:', params.getObjectProperty('param1.param11.param33')); // Should log null

params.setObjectProperty('param2.param21', 'new value');
console.log('After setting param2.param21 to "new value":', params.getObjectProperty('param2.param21')); // Should log 'new value'

params.setObjectProperty('param1.param11.param33', 'new value2');
console.log('After setting param1.param11.param33 to "new value2":', params.getObjectProperty('param1.param11.param33')); // Should log 'new value2'

console.log('Convert param2.param22 to array:', JSON.stringify(params.convertObjectToArray('param2.param22'), null, 2));
/*
Should log:
[
  { "number": "123", "text": "text1" },
  { "number": "456", "text": "text2" }
]
*/

console.log('Full object after modifications:', JSON.stringify(params.getFullObject(), null, 2));
/*
Should reflect the updated object structure
*/
