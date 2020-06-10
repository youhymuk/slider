var slider = new Slider({
  images: '.gallery img',
  prevBtn: '.gallery .prev',
  nextBtn: '.gallery .next',
  autoPlayMode: true,
  delay: 2000
})

function Slider(obj) {
  this.images = document.querySelectorAll(obj.images)
  this.prevBtn = document.querySelector(obj.prevBtn)
  this.nextBtn = document.querySelector(obj.nextBtn)
  this.autoPlayMode = obj.autoPlayMode
  this.delay = obj.delay || 3000
  var i = 0;
  var that = this

  this.prev = function () {
    that.images[i].style.opacity = '0'
    i--;
    if(i <= 0) {
      i = that.images.length - 1
    }

    that.images[i].style.opacity = '1'
  }

  this.next = function () {
    that.images[i].style.opacity = '0'
    i++;
    if(i >= that.images.length) {
      i = 0;
    }

    that.images[i].style.opacity = '1'
  }

  this.autoPlay = function () {
    setInterval(this.next, this.delay)
  }

  if(!this.autoPlayMode) {
    this.prevBtn.addEventListener('click', this.prev)
    this.nextBtn.addEventListener('click', this.next)
  }
  else {
    this.autoPlay()
  }
}