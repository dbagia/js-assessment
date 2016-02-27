exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  	return fn.call(obj);

  },

  alterObjects : function(constructor, greeting) {

  	constructor.prototype.greeting = greeting;

  },

  iterate : function(obj) {

  // var keys = Object.keys(obj);
  // 	var len = keys.length;
  	var result = [];


  // 	for(var i = 0; i < len; i++ ) {

  // 		result.push(keys[i]+':'+obj[keys[i]]);

  // 	}

  // 	return result;

  	for(var o in obj) {

  		if(obj.hasOwnProperty(o)) {

  			result.push(o+': '+obj[o]);

  		};
  	}

  	return result;
  }
};
