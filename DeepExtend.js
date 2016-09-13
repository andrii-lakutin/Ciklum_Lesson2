function myDeepExtend(){
	// Объявляем пустой объект, сюда будем добавлять свойства всех следующих объектов
	var result = {};
	// Проверяем ввели ли вообще что-то.
	if (arguments.length === 0) {
		return {};
	}
	//Перебираем объекты
	for (var i = 1; i < arguments.length; i++) {
		// текущий объект
		var currentObject = arguments[i];

		for (var key in currentObject){
			// присваиваем объекту результату такое же свойство
			// когда вызовется следующий объект, он просто его перезапишет
			result[key] = currentObject[key];
			// если свойство - тоже объект вызываем нашу же функцию (клеим пустоту и объект, получится объект)
			if (currentObject[key] === 'object') {
				result[key] = deepExtend(result[key], obj[key]);
			}
		}
  	}
  	return result;
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
     d: 4,
     e: {
     	f : 5
     }
  },
  l: 5
};

var obj2 = {
  a: 1,
  b: [66,55,[undefined,44],22],
  c: {
     d: 3,
     e: {
     	f: 6
     }
  },
  ss: 60
};

var obj3 = {
  b: 66,
  a: 77,
  c: {
     d: 3,
     e: {
     	f: 7
     }
  },
  ss: function name(){
  	console.log('hey');
  },
  ll: [66,55,[33,44],22]
};

var obj4 =  myDeepExtend(obj1, obj2, obj3);
console.log(obj4);
