function guessnum() {
    let num = Math.random()
    console.log(num); //0-1 之間的值
    console.log(num * 100); //0-1 之間的值
    //math.floor() 無條件捨去
    let guess = Math.floor(num * 100);
    console.log(Math.floor(num * 100)); //取整數

    while (true) {
        let answer = Number(window.prompt("輸入0出去", "0"));
        if (answer == 0) {
            break;
        }
        else if (answer > guess) {
            alert("數字太大");
            console.log("數字太大!");
        }
        else if (answer < guess) {
            alert("數字太小");
            console.log("數字太小!");
        } else if (answer == guess) {
            alert("答對了!");
            console.log("答對了!");
        }
    }
}

function tree() {
    for (let x = 1; x <= 8; x++) {
        for (let y = 7; y >= x; y--) {
            document.write("&nbsp&nbsp");
        }
        for (let z = 0; z < (2 * x - 1); z++) {
            document.write("^");
        }
        document.write("<br>")
    }
    for (let c = 0; c < 2; c++) {
        for (let k = 13; k >= 1; k--) {
            document.write("&nbsp");
        }
        for (let f = 0; f < 1; f++) {
            document.write("^");
        }
        document.write("<br>")
    }
}

function bmi() {
    let high = document.getElementById('high');
    let wieght = document.getElementById('wieght');
    let display = document.getElementById('display');
    let btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        let H = Number(high.value);
        let W = Number(wieght.value);
        let bmi = W / (H / 100 * H / 100);

        if (bmi >= 35) {
            console.log('重度過胖');
            display.innerText = '重度過胖'
        } else if (bmi < 35 && bmi >= 30) {
            console.log('中度過胖');
            display.innerText = '中度過胖'
        } else if (bmi < 30 && bmi >= 27) {
            console.log('輕度過胖');
            display.innerText = '輕度過胖'
        } else if (bmi < 27 && bmi >= 24) {
            console.log('過重');
            display.innerText = '過重'
        } else if (bmi < 24 && bmi >= 18.5) {
            console.log('正常');
            display.innerText = '正常'
        } else if (bmi < 18.5) {
            console.log('過輕');
            display.innerText = '過輕'
        }

    })
}

function years(num) {
    let y = 0;
    if (num % 400 !== 0 || (num % 4 == 0 && num % 100 !== 0)) {
        y = true;
    } else {
        y = false;
    }
    return y;
}




function checkempt(cc) {
    let data = cc.trim();
    let isVaild = true;
    if (data === "" || data.length === 0) {
        isVaild = false;
    }
}