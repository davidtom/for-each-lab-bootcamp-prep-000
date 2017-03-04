var iterativeLog = (array) => {
  array.forEach((currentValue, index) => {
    string = `${index}: ${currentValue}`;
    console.log(string);
  })
};

var iterate = (callback) => {
  var array = [1, 2, 3];

  array.forEach(callback);

  return array;
};

var doToArray = (array, callback) => {
  array.forEach(callback);
};
