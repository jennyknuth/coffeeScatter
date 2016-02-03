var people = ['graven', 'andrew', 'peter', 'jenny', 'tom'],
  beverage = ['coffee', 'water', 'coffee', 'water', 'coffee'],
  hours = [8,9,10,11,12,1,2,3,4,5,6],
  minutes = ['05', '07', 10, 15, 25, 30, 44, 50, 56],
  coffeeObj = {},
  dataArray = [];

  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }

for (var i = 0; i < 34; i++) {
  coffeeObj.name = shuffle(people)[0];
  coffeeObj.type = shuffle(beverage)[0];
  coffeeObj.time = shuffle(hours)[0] + ':' + shuffle(minutes)[0];
  dataArray.push(coffeeObj);
}

console.log(dataArray);
