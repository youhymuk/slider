var btnPrev = document.querySelector('.gallery .prev'),
  	btnNext = document.querySelector('.gallery .next'),
		images = document.querySelectorAll('.gallery .photos img'),
		i = 0;
		
  btnNext.onclick = function () {
    images[i].style.opacity = '0';
    i++;
    if(i >= images.length) {
      i = 0;
    }

    images[i].style.opacity = '1';
  }

  btnPrev.onclick = function () {
    images[i].style.opacity = '0';
    i--;
    if(i <= 0) {
      i = images.length - 1;
    }

    images[i].style.opacity = '1';
	}