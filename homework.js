var obj3 = {};
function merge(obj1,obj2) {
    for (var key in obj1){
    	obj3[key]=obj1[key];
    }
    for (var key in obj2){ 
        if(key in obj3){
        	var arr;
            if(obj3[key] instanceof Array){
	            arr = obj3[key];
	            if(obj2[key] instanceof Array){
	            arr = [...arr, ...obj2[key]];
	            }
	            else{
	            arr.push(obj2[key]);
	            }
            }
            else{
            	arr = [];
	            if(obj2[key] instanceof Array){
	            	arr = [obj3[key], ...obj2[key]];
	            }
	            else{
	            	arr = [obj3[key], obj2[key]];
	            }
       	 	}
       	 	obj3[key] = arr;
       	}
    }
    return obj3	
}
var obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: 'bar'
}
var obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
  d: 6
}
var result = merge(obj1, obj2)

console.log(result)
