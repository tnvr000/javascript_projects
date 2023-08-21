let ready = (callback) => {
  if(document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

ready(() => {
  flipper = document.getElementById('flipper');
  randomFlipper = document.getElementById('randomFlipper');
  
  flipper.addEventListener('click', () => {
    const colors = ['green', 'red', 'lime', 'cyan', 'darkgoldenrod', 'cadetblue', 'burlywood', 'dodgerblue', 'bisque', 'aquamarine', 'rgb(133, 122, 200)', '#F15025'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector('.color').innerHTML = colors[randomNumber]
  })

  randomFlipper.addEventListener('click', () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = '#';
    for(let i = 0; i < 6; ++i) {
      let randomNumber = Math.floor(Math.random() * hex.length);
      hexCode += hex[randomNumber]
    }

    document.body.style.backgroundColor = hexCode;
    document.querySelector('.color').innerHTML = hexCode;
  })
})
