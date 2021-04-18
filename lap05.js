alert('Welcome to your favorite car page')
var carname = prompt('Hello, please enter types of Mercedes cars');
var typCar = function(){
while (carname !== 'van' && carname !== 'suv') {
  carname = prompt('Please enter the types of car van or suv');
}
}
typCar();

var userChoose;
function numImg(){
if (carname === 'van') {
  userChoose = '<img src="https://cdn.carbuzz.com/car-thumbnails/300x160/8000/600/8664.jpg">';
} else if (carname === 'suv') {
  userChoose = '<img src="https://cdn.carbuzz.com/car-thumbnails/300x160/4000/500/4565.jpg">';
}

var n_img = prompt('How many image do you want???');

for (var i = 0; i < n_img; i++) {
  document.write(userChoose);
}
}
numImg();