// Spinner game
// Sign in with google
var errorBox = document.getElementById("errorText");

var buildings = {Booster: {
    cost: 10,
    amount: 0,
    element: document.getElementById("booster"),
    active: function() {
                        earnings++;
                        coins-=buildings.Booster.cost;
                        buildings.Booster.cost=Math.round(buildings.Booster.cost**1.25);
                        buildings.Booster.amount++;
                        buildings.Booster.element.querySelector(".cost").innerHTML = buildings.Booster.cost.toString()+" Coins";
                        buildings.Booster.element.querySelector(".amount").innerHTML = buildings.Booster.amount.toString();
    },
    cycle: function() {

    },
    once: true
  },

  Spinner: {
    cost: 50,
    amount: 0,
    element: document.getElementById("spinner"),
    active: function() {
                        coins-=buildings.Spinner.cost;
                        buildings.Spinner.cost=Math.round(buildings.Spinner.cost**1.25);
                        buildings.Spinner.amount++;
                        buildings.Spinner.element.querySelector(".cost").innerHTML = buildings.Spinner.cost.toString()+" Coins";
                        buildings.Spinner.element.querySelector(".amount").innerHTML = buildings.Spinner.amount.toString();
    },
    cycle: function() {
      partCoins+=earnings/100;
    },
    once: false
  },

  Maxspeed: {
    cost: 100,
    amount: 0,
    element: document.getElementById("maxspeed"),
    active: function() {
                        range+=0.25;
                        coins-=buildings.Maxspeed.cost;
                        buildings.Maxspeed.cost=Math.round(buildings.Maxspeed.cost**1.25);
                        buildings.Maxspeed.amount++;
                        buildings.Maxspeed.element.querySelector(".cost").innerHTML = buildings.Maxspeed.cost.toString()+" Coins";
                        buildings.Maxspeed.element.querySelector(".amount").innerHTML = buildings.Maxspeed.amount.toString();
    },
    cycle: function() {

    },
    once: true
  },

  Acceleration: {
    cost: 150,
    amount: 0,
    element: document.getElementById("acceleration"),
    active: function() {
                        speed+=0.0005;
                        coins-=buildings.Acceleration.cost;
                        buildings.Acceleration.cost=Math.round(buildings.Acceleration.cost**1.25);
                        buildings.Acceleration.amount++;
                        buildings.Acceleration.element.querySelector(".cost").innerHTML = buildings.Acceleration.cost.toString()+" Coins";
                        buildings.Acceleration.element.querySelector(".amount").innerHTML = buildings.Acceleration.amount.toString();
    },
    cycle: function() {

    },
    once: true
  },

  Percent: {
    cost: 200,
    amount: 0,
    element: document.getElementById("percent"),
    active: function() {
                        earnings+=Math.round(earnings*1.05);
                        coins-=buildings.Percent.cost;
                        buildings.Percent.cost=Math.round(buildings.Percent.cost**1.25);
                        buildings.Percent.amount++;
                        buildings.Percent.element.querySelector(".cost").innerHTML = buildings.Percent.cost.toString()+" Coins";
                        buildings.Percent.element.querySelector(".amount").innerHTML = buildings.Percent.amount.toString();
    },
    cycle: function() {

    },
    once: true
  }
};

Math.hypot||(Math.hypot=function(){for(var t=0,a=0,h=!1,r=0;r<arguments.length;++r){var n=Math.abs(Number(arguments[r]));n===1/0&&(h=!0),n>t&&(a*=t/n*(t/n),t=n),a+=0===n&&0===t?0:n/t*(n/t)}return h?1/0:t===1/0?1/0:t*Math.sqrt(a)});

Number.prototype.clamp=function(t,a){return Math.min(Math.max(this,t),a)};
Number.prototype.move=function(r,t){var e=this;return e<r?e+t>r?e=r:e+=t:e>r&&(e-t<r?e=r:e-=t),e};

function parseURLParams(){const r={};for(const[a,n]of new URLSearchParams(location.search).entries())r[a]=n;return r}
function mobileCheck(){var i,a=!1;return i=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(a=!0),a}
function ajax(e,n){var t=new XMLHttpRequest;if(t.open(n,e,!1),t.send(null),200===t.status)return t.responseText}
function getKeys(r){var n=[];for(var e in r)n.push(e);return n}

var keys = [];
var currentText = [];

var touchx;
var touchy;
var touchPrevx;
var touchPrevy;
var touchDistancex;
var touchDistancey;

var mousex;
var mousey;
var mousePrevx;
var mousePrevy;
var mouseDistancex;
var mouseDistancey;
var mouseDown = false;

var oncube = true;

window.addEventListener("keydown",function(e){e=e||window.event,keys=keys||[],keys[e.keyCode]=!0});
window.addEventListener("keyup",function(e){e=e||window.event,keys[e.keyCode]=!1});

window.addEventListener("resize",function(e){canvas.width=window.innerWidth,canvas.height=window.innerHeight-13,text.width=window.innerWidth,text.height=window.innerHeight-13});
window.addEventListener("error",function(e){errorBox.innerHTML=e.message});

var canvas = document.getElementById("webgl");
var text = document.getElementById("text");
var view = document.getElementById("view");
gl = canvas.getContext("webgl");
ctx = text.getContext("2d");

text.addEventListener("touchstart", touchStart);
text.addEventListener("touchmove", touchHandler);
text.addEventListener("mousedown", mouseStart);
text.addEventListener("mousemove", mouseHandler);
text.addEventListener("mouseup", mouseEnd)

null===gl&&alert("Unable to initialize WebGL. Your browser or machine may not support it.");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 13;
text.width = window.innerWidth;
text.height = window.innerHeight - 13;

var vertices = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1,
  1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1,
];

var colors = [
  5, 3, 7, 5, 3, 7, 5, 3, 7, 5, 3, 7,
  1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0
];

var indices = [
  0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
  8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
  16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23
];

var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

var color_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

var index_buffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

var vertCode = ajax("assets/vert.glsl", "GET");
var fragCode = ajax("assets/frag.glsl", "GET");

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertCode);
gl.compileShader(vertShader);

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragCode);
gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);
gl.linkProgram(shaderProgram);

var Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
var Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
var Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
var position = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);

gl.enableVertexAttribArray(position);
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
var color = gl.getAttribLocation(shaderProgram, "color");
gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 0);

gl.enableVertexAttribArray(color);
gl.useProgram(shaderProgram);

function get_projection(t,n,a,r){var e=Math.tan(.5*t*Math.PI/180);return[.5/e,0,0,0,0,.5*n/e,0,0,0,0,-(r+a)/(r-a),-1,0,0,-2*r*a/(r-a),0]}

var proj_matrix = get_projection(40, canvas.width / canvas.height, 1, 100);
var mov_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var view_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

view_matrix[14] = view_matrix[14] - 6;

function rotateZ(t,a){var n=Math.cos(a),o=Math.sin(a),c=t[0],h=t[4],i=t[8];t[0]=n*t[0]-o*t[1],t[4]=n*t[4]-o*t[5],t[8]=n*t[8]-o*t[9],t[1]=n*t[1]+o*c,t[5]=n*t[5]+o*h,t[9]=n*t[9]+o*i}
function rotateX(t,a){var n=Math.cos(a),o=Math.sin(a),c=t[1],h=t[5],i=t[9];t[1]=t[1]*n-t[2]*o,t[5]=t[5]*n-t[6]*o,t[9]=t[9]*n-t[10]*o,t[2]=t[2]*n+c*o,t[6]=t[6]*n+h*o,t[10]=t[10]*n+i*o}
function rotateY(t,a){var n=Math.cos(a),o=Math.sin(a),c=t[0],h=t[4],i=t[8];t[0]=n*t[0]+o*t[2],t[4]=n*t[4]+o*t[6],t[8]=n*t[8]+o*t[10],t[2]=n*t[2]-o*c,t[6]=n*t[6]-o*h,t[10]=n*t[10]-o*i}

function updateText(){ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height),currentText.forEach(function(t){ctx.font=t[3],ctx.fillStyle=t[4],ctx.fillText(t[0],t[1],t[2])})}

function touchStart(t){touchPrevx=t.touches[0].pageX,touchPrevy=t.touches[0].pageY,touchx=touchPrevx,touchy=touchPrevy,touchDistancex=0,touchDistancey=0}
function touchHandler(t){t.touches&&(touchPrevx=touchx,touchPrevy=touchy,touchx=t.touches[0].pageX,touchy=t.touches[0].pageY,touchDistancex=touchPrevx-touchx,touchDistancey=touchPrevy-touchy,touchDistancex&&touchDistancey&&(x-=touchDistancey/2e3,y-=touchDistancex/2e3),t.preventDefault())}
function mouseStart(e){mousePrevx=e.offsetX,mousePrevy=e.offsetY,mousex=mousePrevx,mousey=mousePrevy,mouseDistancex=0,mouseDistancey=0,mouseDown=!0,text.style.cursor="grabbing"}
function mouseHandler(e){mouseDown&&(mousePrevx=mousex,mousePrevy=mousey,mousex=e.offsetX,mousey=e.offsetY,mouseDistancex=mousePrevx-mousex,mouseDistancey=mousePrevy-mousey,mouseDistancex&&mouseDistancey&&(x-=mouseDistancey/2e3,y-=mouseDistancex/2e3))}
function mouseEnd(o){mouseDown=!1,text.style.cursor="auto"}

var time_old = 0;
var speed = 0.0005;
var currentSpeed = 0;
var range = 0.25;
var x = 0;
var y = 0;
var coins = 0;
var partCoins = 0;
var earnings = 1;

setInterval(function () {
  if (currentSpeed >= 50) {
    partCoins += earnings/100;
  }

  getKeys(buildings).forEach(function (s) {
    if (buildings[s].element.className === "no" && buildings[s].cost <= coins) {
      buildings[s].element.className = "yes";
      buildings[s].element.querySelector(".cost").innerHTML = buildings[s].cost.toString()+" Coins";
      buildings[s].element.onclick = buildings[s].active;
    } else if (buildings[s].element.className === "yes" && buildings[s].cost > coins) {
      buildings[s].element.className = "no";
      buildings[s].element.onclick = void(0);
    }

    if (!buildings[s].once) {
      for (var i = 0; i < buildings[s].amount; i++) {
        buildings[s].cycle();
      }
    }
  });

  if (partCoins >= 1) {
    coins += Math.floor(partCoins);
    partCoins -= Math.floor(partCoins);
  }
}, 10);

var animate = function(time) {
  var dt = time - time_old;
  oncube = (view.className === "movecube");

  if (keys && (keys[83] || keys[40]) && oncube) {
    x += dt * speed;
  }
  if (keys && (keys[87] || keys[38]) && oncube) {
    x -= dt * speed;
  }
  x = x.move(0, 0.001).clamp(-range, range)
  rotateX(mov_matrix, x);

  if (keys && (keys[68] || keys[39]) && oncube) {
    y += dt * speed;
  }
  if (keys && (keys[65] || keys[37]) && oncube) {
    y -= dt * speed;
  }
  y = y.move(0, 0.001).clamp(-range, range)
  rotateY(mov_matrix, y);

  currentSpeed = Math.round(((Math.hypot(x, y).clamp(0, range))/range)*100)

  currentText = [];
  currentText.push(["Speed: " + currentSpeed, 15, 30, "25px Blocky", "rgb(255,255,255,0.5)"]);
  currentText.push(["Coins: " + coins, 15, 60, "25px Blocky", "rgb(255,255,255,0.5)"]);
  currentText.push(["CPS: " + earnings, 15, 90, "25px Blocky", "rgb(255,255,255,0.5)"]);

  time_old = time;
  updateText();

  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1.0);

  gl.viewport(0.0, 0.0, canvas.width, canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.uniformMatrix4fv(Pmatrix, false, proj_matrix);
  gl.uniformMatrix4fv(Vmatrix, false, view_matrix);
  gl.uniformMatrix4fv(Mmatrix, false, mov_matrix);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

  window.requestAnimationFrame(animate);
}

animate(0);