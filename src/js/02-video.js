var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle((e)=> {
  // console.log('timeupdate the video!', e.seconds);
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));