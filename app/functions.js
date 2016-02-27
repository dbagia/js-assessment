exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);

  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(s) {
      return str+', '+s;
    }
  },

  makeClosures : function(arr, fn) {

    var retArr = [];

    arr.map(function(v){

      retArr.push(function(){

          return fn(v);

      });

    });

    return retArr;

  },

  partial : function(fn, str1, str2) {

      function f(str3) {
        return fn(str1, str2, str3);
      }

      return f;
  },

  useArguments : function() {
    var result = 0;

    for(var i = 0; i < arguments.length; i++){
      result+=arguments[i];
    }

    return result;
  },

  callIt : function(fn) {

     var args = [];

    for(var i = 1; i < arguments.length; i++){
      args.push(arguments[i]);
    }

    fn.apply(this, args);

  },

  partialUsingArguments : function(fn) {

    function getArgs(allArgs, vArgs){
      var args = [], x = allArgs===1?0:1;

      for(var i = x; i < vArgs.length; i++){
        args.push(vArgs[i]);
      }

      return args;
    }
    
    var outerArgs = getArgs(0, arguments);

    function f(){
      var innerArgs = getArgs(1, arguments);

      outerArgs = outerArgs.concat(innerArgs);
      console.log("final array"+outerArgs);
      
      return fn.apply(null, outerArgs);
    }
  
    return f;

  },

  curryIt : function(fn) {

    return function(a){

      return function(b) {

        return function(c) {
          return fn(a, b, c);
        }
      }

    }
  }
};
