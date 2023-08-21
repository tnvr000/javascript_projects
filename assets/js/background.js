let ready = (callback) => {
  if(document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

ready(() => {
  flipper = document.getElementById('flipper');
  
  flipper.addEventListener('click', () => {
    const colors = ['green', 'red', 'lime', 'cyan', 'rgb(133, 122, 200)', '#f15025'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector('.color').innerHTML = colors[randomNumber]
  })
})
