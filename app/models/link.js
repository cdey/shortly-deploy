var db = require('../config');
var crypto = require('crypto');

var Link = db.Model.extend( 
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  },
  remove: function () {

  }
});

module.exports = Link;
