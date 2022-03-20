var scr = document.getElementById('screen');
var btn = document.getElementsByClassName('grid-item');

// for(var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", ()=> {
//         console.log(btn);
//     });
// }

function btnClick(ele) {
    var x = 0, y = 0, operator = 0, ans = 0, flag = 0, s = "", op = 0;
    if(ele.id == 'ac') {
        scr.innerHTML = "";
    } else if(ele.id== 'ce') {
        scr.innerHTML = "";
    } else if(ele.classList.contains('op')) {
        for(var i = 0; i <scr.length; i++) {
            x += parseFloat(scr[i].innerHTML);
        }

        operator = ele.innerHTML;
        scr.innerHTML += ele.innerHTML;
        flag = 1;
    } else if(flag == 1) {
        s += ele.innerHTML
        scr.innerHTML += ele.innerHTML;
    } else if(flag == 1 && ele.id == 'equal') {
        for(var i = 0; i < y.length; i++) {
            y += parseFloat(y[i].innerHTML);
        }
        op = parseFloat(operator);
        ans = x op y;
        screen.innerHTML = ans;
        flag = 0;
    } else {
        scr.innerHTML += ele.innerHTML;
    }
    
}

