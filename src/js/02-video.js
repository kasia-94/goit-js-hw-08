import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE, seconds);
}

setTime(localStorage.getItem(LOCAL_STORAGE));

function setTime(seconds) {
  player
    .setCurrentTime(seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}
