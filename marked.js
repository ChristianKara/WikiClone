var marked = require('marked');

module.exports = function(swig) {
var markedFilter = function (body) {
 return marked(body);
};
markedFilter.safe = true;
swig.setFilter('marked', markedFilter);
};