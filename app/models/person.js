'use strict';

function Person(o){
  this.name   = o.name;
  this.photo  = o.photo;
  this.cash   = parseFloat(o.cash);
  this.assets = {};
}

Object.defineProperty(Person, 'collection', {
  get: function(){return global.mongodb.collection('people');}
});

Person.all = function(cb){
  Person.collection.find().toArray(cb);
};

module.exports = Person;

