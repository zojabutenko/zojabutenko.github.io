function Ex1() {
    result = "Все эти конструкции вводят дополнительную информацию.";
    var x = document.getElementById("ex1_ans");
    x.innerHTML = result;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}

function check_Ex2a() {
    var x = document.getElementById("ex2a_input");
    if (x.value == "Роман не только хорошо играет в футбол, но и фотографирует.") {
        result = "Правильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2a_result").innerHTML = result;
}

function Ex2a() {
    result = "Роман <b>не только</b> хорошо играет в футбол, <b>но и</b> фотографирует.";
    var x = document.getElementById("ex2a_ans");
    x.innerHTML = result;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}

function check_Ex2b() {
    var x = document.getElementById('ex2b_input');
    if (x.value == 'София не только красиво поëт, но и играет на пианино.') {
        result = "Правильно";
        document.getElementById("ex2b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2b_result").innerHTML = result;
}

function Ex2b() {
    result = "София <b>не только</b> красиво поëт, <b>но и</b> играет на пианино.";
    var x = document.getElementById("ex2b_ans");
    x.innerHTML = result;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}

function check_Ex2c() {
    var x = document.getElementById('ex2c_input');
    if (x.value == 'Нельзя переделать') {
        result = "Правильно";
        document.getElementById("ex2c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2c_result").innerHTML = result;
}

function Ex2c() {
    result = "Это предложение нельзя переформулировать. Конструкция <b>не только XP, но и XP</b> требует, чтобы ее части <b>XP</b> имели равный статус. Однако части предложения &quot;плохо видит&quot; и &quot;носит очки&quot; не равноправны по значению: они выражают причину и следствие.";
    var x = document.getElementById("ex2c_ans");
    x.innerHTML = result;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}

function check_Ex4() {
    var x = document.getElementById('ex4_input');
    if (x.value == "1д, 2в, 3г, 4а, 5б") {
        result = "Правильно";
        document.getElementById("ex4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_result").innerHTML = result;
}

function Ex4() {
    result = "1д, 2в, 3г, 4а, 5б";
    var x = document.getElementById("ex4_ans");
    x.innerHTML = result;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}