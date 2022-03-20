var scr = document.getElementById('screen');
var btn = document.getElementsByClassName('grid-item');

// for(var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", ()=> {
//         console.log(btn);
//     });
// }

function btnClick(ele) {
    if(ele.id == 'ac') {
        scr.innerHTML = "";
    } else if(ele.id== 'ce') {
        scr.innerHTML = "";
    } else {
        scr.innerHTML += ele.innerHTML;
    }
    
}

