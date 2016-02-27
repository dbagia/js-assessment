exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function( arr, item ) {
    return arr.indexOf(item);
  },

  sum : function(arr) {

    return arr.reduce( function( prev, curr ) {

      return prev + curr;

    });
  },

  remove : function(arr, item) {

    return arr.filter( function ( v ) {

      return v !== item;

    });

  },

  removeWithoutCopy : function(arr, item) {

     var len = arr.length;

     for(var i = 0; i < len; i++ ) {

        if(arr[i] === item) {

          arr.splice(i, 1);

          i--;
          len = arr.length;

        }

     }

     return arr;

  },

  append : function(arr, item) {

     arr.push(item);
     return arr;
  },

  truncate : function(arr) {

    arr.pop(arr.length - 1);

    return arr;

  },

  prepend : function(arr, item) {

    arr.unshift(item); 

    return arr;

  },

  curtail : function(arr) {

    arr.shift();

    return arr;


  },

  concat : function(arr1, arr2) {

    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {

    arr.splice(index, 0, item);

    return arr;

  },

  count : function(arr, item) {

    var count = 0;

     arr.reduce(function(prev, curr) {

      if( prev === item ) {

        count++;

      }

      return curr;

    });

     return count;

  },

  duplicates : function(arr) {

    var obj = {};
    arr.map( function( v ) {
      
      if(obj.hasOwnProperty (v)) {
         
         obj[v]++;
         
      } else {
        
        obj[v] = 0;
      }   
      
    });
   
    var retArr = Object.keys(obj).filter(function(v){
      
      if(obj[v] > 0) {
        return ""+v;
      }
      
    });

    return  retArr.map(function(v) { return +v});;
  },

  square : function(arr) {

    return arr.map(function(v){

      return v*v;

    })
  },

  findAllOccurrences : function(arr, target) {
    var retArr = [];

     arr.map(function(v, i) {

      if(v === target) {

        retArr.push(i);

      }

    })

     return retArr;
  }
};
