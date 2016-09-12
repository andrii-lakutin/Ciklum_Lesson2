var obj1 = {
  a: undefined,
  b: null,
  c: {
    d: 4,
    e: {
    	f : 5
    }
  },
  d: function lol(){
  	console.log('hey!');
  }
};

var obj2 = {
  a: undefined,
  b: null,
  c: {
    d: 4,
    e: {
    	f : 5
    }
  }, 
  d: function lol(){
  	console.log('hey!');
  }
};

var compare = function(a, b){
	for(i in a){
		//проверяем нет ли у объекта 'a' таких свойств которых нет у объекта 'b'
		if (a.hasOwnProperty(i) !== b.hasOwnProperty(i)) {
			return false;
		}
		//если свойство - объект
		if(typeof(a[i]) == "object"){
			//сравниваем объекты внутри этой же ф-цией
			if(!compare(a[i], b[i])){
				return false;
			}
		//если метод а не свойство	
		}else if(typeof(a[i]) == "function"){
			//делаем из ф-ции строку и сравниваем
			if(a[i].toString() !== b[i].toString()){
				return false;
			}
		//если свойства не одинаковые	
		}else{
			if(a[i] != b[i]){
				return false;
			}
		}
	}
	for (j in b) {
		//проверяем нет ли у объекта 'b' таких свойств которых нет у объекта 'a'
		if (b.hasOwnProperty(j) !== a.hasOwnProperty(j)) {
			return false;
		}
	}
	return true;
};

var result = compare(obj1, obj2);
console.log(result);
