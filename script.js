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
    } else if(ele.id== 'ce') {
        scr.innerHTML = "";
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
        ans = x + y;
        console.log(ans);
        screen.innerHTML = "";
        flag = 0;

    } else {
        scr.innerHTML += ele.innerHTML;
    }
   
    // else {
    //     scr.innerHTML += ele.innerHTML;
    //     brn.innerHTML += scr.innerHTML;
    //     y = parseFloat(scr.innerHTML);
    //     console.log(y);
    // }
    
}

