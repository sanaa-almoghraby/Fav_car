alert('Welcome to my first page');
var yaer_pro = prompt('Please enter year of production');
document.write('<h1>' + 'Model by year' + '</h1>');
if (yaer_pro >= 2000) {
  document.write('A great choice');
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcnrFBx5qxngDu-vy4lPhdHsH87KXMMRcXw&usqp=CAU"> ');
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaC8_OyuV7DtcCOj_wAQ1rcrqI9Hk8vZ6lA&usqp=CAU">');
}
else if (yaer_pro >= 1990) {
  document.write('Good choice');
  document.write('<img src="https://cdn05.carsforsale.com/00959592390672a5478457b5ddbb5e01e8/800x600/1999-mercedes-benz-s-class-s-500-4dr-sedan.jpg">');
  document.write('<img src="https://imgix.ranker.com/user_node_img/558/11153741/original/1995-automobile-model-years-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&w=375">');
}
else if (yaer_pro >= 1980) {
  document.write('Bad choice');
  document.write('<img src="https://i.ytimg.com/vi/L1VwIiK6MHg/hqdefault.jpg"> ');
  document.write('<img src="https://i.pinimg.com/originals/72/6d/19/726d197ac3e07d9c80bc2c3c927e5486.jpg"> ');
}
else {
  document.write('Very Old');
  document.write('< img src="https://c4.wallpaperflare.com/wallpaper/310/946/517/car-cemetery-wallpaper-preview.jpg"> ');
}

