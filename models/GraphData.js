var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Name: String,
  Population_Estimate: String,
}, 
{
  collection: 'population-collection'
});

mongoose.model('GraphData', GraphDataSchema);
