var scr = document.getElementById('screen');
var btn = document.getElementsByClassName('grid-item');
var brn = document.getElementsByClassName('burner');
brn.innerHTML = "";
// for(var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", ()=> {
//         console.log(btn);
//     });
// }
var x = 0, y = 0, operator = "", ans = 0, flag = 0, op = 0;
function btnClick(ele) {
    
    if(ele.id == 'ac') {
        scr.innerHTML = "";
        x = 0;
        y = 0;
    } else if(ele.id== 'ce') {
        scr.innerHTML = "";
        x = 0;
        y = 0;
    } else if(ele.classList.contains('op') && flag != 1) {
        x = parseFloat(scr.innerHTML);
        operator = ele.innerHTML;
        scr.innerHTML += ele.innerHTML;
        flag = 1;
        // console.log(x);
    } else if(flag == 1 && ele.id != 'equal') {
        // console.log("hello");
        brn.innerHTML += ele.innerHTML;
        scr.innerHTML += ele.innerHTML;
        // console.log(brn.innerHTML);
    } else if(flag == 1 && ele.id == 'equal') {
        y = parseFloat(brn.innerHTML);
        // console.log(y);
        // console.log(ele.id);
        // op = parseFloat(operator);

        if(operator == '+') {
            ans = x + y;
        } else if(operator == '-') {
            ans = x - y;
        } else if(operator == 'x') {
            ans = x*y;
        } else if(operator == '/') {
            ans = x/y;
        } else if(operator == '%') {
            ans = (x*(1/100))*y;
        }
        x = 0;
        y = 0;
        console.log(ans);
        scr.innerHTML = ans;
        flag = 0;
    } else {
        scr.innerHTML += ele.innerHTML;
    }
}

