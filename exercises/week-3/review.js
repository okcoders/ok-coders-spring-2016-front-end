var stdin = false
var stdin2 = false


var myFirstFunction = function(myFirstParameter) {
  return 1
}


function mySecondFunction(aFunction) {
  console.log(1 + aFunction())
}

mySecondFunction(myFirstFunction)
