var ready = (callback) => {
  if(document.readyState != "loading")
    callback();
  else
    document.addEventListener("DOMContentLoaded", callback);
};

var imgSun = "assets/images/sun.svg"
var imgMoon = "assets/images/moon.svg"

ready(() => {
  var imgMode = document.getElementById('imgMode');
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches) {
    document.body.classList.add('dark');
    imgMode.src = imgMoon
    imgMode.dataset.mode = "dark";
  } else {
    imgMode.src = imgSun
    imgMode.dataset.mode = "light";
  }

  document.getElementById('mode').onclick = (e) => {
    if(imgMode.dataset.mode === "dark") {
      imgMode.src = imgSun;
      imgMode.dataset.mode = "light";
      document.body.classList.remove('dark');
    } else {
      imgMode.src = imgMoon;
      imgMode.dataset.mode = "dark";
      document.body.classList.add('dark');
    }
  }
})
