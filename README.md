angular-modules-graph
=====================

Create a graph of angular module definitions

```js
var scripts = [
{
  id: 'file1.js',
  text: "angular.module('TestModule',[])"
},
{ ... }
]

var angularModulesGraph = require('angular-modules-graph')

var res = angularModulesGraph(scripts)

res.angular // fake angular containig graph
res.angular.modulesNames == ['TestModule' , ...]  //list of modules name found
res.angular.modules // modules found
res.angular.modules[0].name == 'TestModule' //module name
res.angular.modules[0].items //untyped array of defined items (controllers, filters, provider, services, ...)
res.angular.modules[0].modules //array of module dependencies 

res.results // array of objects indicating if script evaluation resulted without error
res.results[0].id == 'file1.js'
res.results[0].error == false // true if an error occured during evalution
res.results[0].exception == undefined // exception launched during evaluation

```
