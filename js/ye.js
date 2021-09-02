//这大概就是喜欢吧

var stop, staticx
var img = new Image()
img.src =
  'data:image/png;base64,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'

function Sakura(x, y, s, r, fn) {
  this.x = x
  this.y = y
  this.s = s
  this.r = r
  this.fn = fn
}

Sakura.prototype.draw = function (cxt) {
  cxt.save()
  var xc = (40 * this.s) / 4
  cxt.translate(this.x, this.y)
  cxt.rotate(this.r)
  cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
  cxt.restore()
}

Sakura.prototype.update = function () {
  this.x = this.fn.x(this.x, this.y)
  this.y = this.fn.y(this.y, this.y)
  this.r = this.fn.r(this.r)
  if (
    this.x > window.innerWidth ||
    this.x < 0 ||
    this.y > window.innerHeight ||
    this.y < 0
  ) {
    this.r = getRandom('fnr')
    if (Math.random() > 0.4) {
      this.x = getRandom('x')
      this.y = 0
      this.s = getRandom('s')
      this.r = getRandom('r')
    } else {
      this.x = window.innerWidth
      this.y = getRandom('y')
      this.s = getRandom('s')
      this.r = getRandom('r')
    }
  }
}

SakuraList = function () {
  this.list = []
}
SakuraList.prototype.push = function (sakura) {
  this.list.push(sakura)
}
SakuraList.prototype.update = function () {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].update()
  }
}
SakuraList.prototype.draw = function (cxt) {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].draw(cxt)
  }
}
SakuraList.prototype.get = function (i) {
  return this.list[i]
}
SakuraList.prototype.size = function () {
  return this.list.length
}

function getRandom(option) {
  var ret, random
  switch (option) {
    case 'x':
      ret = Math.random() * window.innerWidth
      break
    case 'y':
      ret = Math.random() * window.innerHeight
      break
    case 's':
      ret = Math.random()
      break
    case 'r':
      ret = Math.random() * 6
      break
    case 'fnx':
      random = -0.5 + Math.random() * 1
      ret = function (x, y) {
        return x + 0.5 * random - 1.7
      }
      break
    case 'fny':
      random = 1.5 + Math.random() * 0.7
      ret = function (x, y) {
        return y + random
      }
      break
    case 'fnr':
      random = Math.random() * 0.03
      ret = function (r) {
        return r + random
      }
      break
  }
  return ret
}

function startSakura() {
  requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame
  var canvas = document.createElement('canvas'),
    cxt
  staticx = true
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  canvas.setAttribute(
    'style',
    'position: fixed;left: 0;top: 0;pointer-events: none;'
  )
  canvas.setAttribute('id', 'canvas_sakura')
  document.getElementsByTagName('body')[0].appendChild(canvas)
  cxt = canvas.getContext('2d')
  var sakuraList = new SakuraList()
  for (var i = 0; i < 50; i++) {
    var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny
    randomX = getRandom('x')
    randomY = getRandom('y')
    randomR = getRandom('r')
    randomS = getRandom('s')
    randomFnx = getRandom('fnx')
    randomFny = getRandom('fny')
    randomFnR = getRandom('fnr')
    sakura = new Sakura(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR
    })
    sakura.draw(cxt)
    sakuraList.push(sakura)
  }
  stop = requestAnimationFrame(function () {
    cxt.clearRect(0, 0, canvas.width, canvas.height)
    sakuraList.update()
    sakuraList.draw(cxt)
    stop = requestAnimationFrame(arguments.callee)
  })
}

window.onresize = function () {
  var canvasSnow = document.getElementById('canvas_snow')
  canvasSnow.width = window.innerWidth
  canvasSnow.height = window.innerHeight
}

img.onload = function () {
  startSakura()
}

function stopp() {
  if (staticx) {
    var child = document.getElementById('canvas_sakura')
    child.parentNode.removeChild(child)
    window.cancelAnimationFrame(stop)
    staticx = false
  } else {
    startSakura()
  }
}