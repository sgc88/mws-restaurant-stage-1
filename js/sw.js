self.addEventListener('install', (event) => {
 event.waitUntil(
   caches.open('restaurant').then((cache) => {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/css/styles.css',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/data/restaurants.json',
       '/img/',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
     ]).then(() => {
      console.log('Ready to go!');
     }).catch((error) => {
      console.log('Upps something went wrong: ', error);
     })
   })
 );
});
