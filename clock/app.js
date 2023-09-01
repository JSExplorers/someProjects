function showtime() {
  const time = document.querySelector('.clock');
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  const session = 'AM';

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  const timetoDisplay = h + ':' + m + ':' + s + ' ' + session;

  h === 0 ? (h = 12) : '';
  h > 12 ? ((h = h - 12), (session = 'PM')) : '';

  time.textContent = timetoDisplay;

  setTimeout(showtime, 1000);
}
showtime();
