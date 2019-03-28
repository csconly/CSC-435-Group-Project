      
  function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
      document.getElementById("img").src = images[x];
  }

  function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
      document.getElementById("img").src = images[x];
  }

  function startTimer() {
      setInterval(displayNextImage, 5500);
  }

  var images = [], x = -1;
  images[0] = "./images/computers.png";
  images[1] = "./images/flowers.png";
  images[2] = "./images/servers3.png";
      