var angular = require('./src/fake-angular')(),
  document = {}, window = {}, navigator = {};

module.exports = function(scripts) {
  var results = scripts.map(function(content) {

    try {
      eval(content.text)
    } catch (e) {
      return {
        id: content.id,
        error: true,
        exception: e
      }
    }

    return {
      id: content.id,
      error: false
    }
  })

  return {
    angular: angular,
    results: results
  }
}
