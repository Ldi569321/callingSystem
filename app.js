const call = document.querySelector("h1");
const callNumber = document.getElementById("call_number");
const btnClickBack1 = document.querySelector("button");
const btnClickBack2 = document.querySelector("button");

let connect = 0;

function btnClick1() {
    if (connect == 0) {
        btnClickBack1.style.background = "rgb(219, 46, 46)";
        call.innerText = "연결중...";
        setTimeout(function () {
            call.innerText = "김아무개"
            callNumber.innerText = "010-XXXX-XXXX"
        }, 2000);
        return connect = 1;
    } else if (connect == 1) {
        btnClickBack1.style.background = "green";
        call.innerText = "종료되었습니다.";
    }return connect = 0;
};

btnClickBack1.addEventListener("click", btnClick1);