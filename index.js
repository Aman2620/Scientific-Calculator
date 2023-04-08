var screens = document.querySelector("#screen");
var btn = document.querySelectorAll('.btn');

for (item of btn)
{
  item.addEventListener('click',(e)=>{
    btntext = e.target.innerText;
    screens.value += btntext;
  });
}

function sin() {
  screens.value = Math.sin(screens.value);
}
function cos() {
  screens.value = Math.cos(screens.value);
}
function tan() {
  screens.value = Math.tan(screens.value);
}

function pow() {
  screens.value = Math.pow(screens.value,2);
}

function sqrt() {
  screens.value = Math.sqrt(screens.value,2);
}

function log() {
  screens.value = Math.log(screens.value);
}

function pi() {
  screens.value = 3.14;
}

function e() {
  screens.value = 2.718;
}
function fact(){
  let i,num,f;
  f = 1
  num = screens.value;
  for (i=1;i<=num;i++){
    f=f*i;
  }
  i=i-1

  screens.value = f;
}

function backspacce() {
  screens.value=screens.value.substr(0,screens.value.length-1)
}
