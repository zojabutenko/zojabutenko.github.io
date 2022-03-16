// $(document).ready(function() {
//     $('#ex2a_input').keyup(function() {
//         $(this).attr('size', $(this).val().length)
//     });
// });


function Ex1() {
    result = "Все эти конструкции вводят дополнительную информацию.<br> = <i>All of these constructions introduce additional information.</i>";
    var x = document.getElementById("ex1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_eng() {
    result = "<i>Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?</i>"
    var x = document.getElementById("ex1_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex2_eng() {
    result = "<i>Rephrase each sentence by using the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;. Are there any sentences that cannot be rephrased?</i>"
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex2a() {
    var x = document.getElementById("ex2a_input");
    if (x.value.toLowerCase() == "Роман не только хорошо играет в футбол, но и фотографирует.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2a_result").innerHTML = result;
}

function Ex2a() {
    result = "Роман <span class='construction'>не только</span> хорошо играет в футбол, <span class='construction'>но и</span> фотографирует.";
    var x = document.getElementById("ex2a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2b() {
    var x = document.getElementById('ex2b_input');
    if (x.value.toLowerCase() == 'София не только красиво поëт, но и играет на пианино.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2b_result").innerHTML = result;
}

function Ex2b() {
    result = "София <span class='construction'>не только</span> красиво поëт, <span class='construction'>но и</span> играет на пианино.";
    var x = document.getElementById("ex2b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2c() {
    var x = document.getElementById('ex2c_input');
    if (x.value.toLowerCase() == 'Нельзя переделать'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2c_result").innerHTML = result;
}

function Ex2c() {
    result = "Это предложение нельзя переформулировать. Конструкция <span class='construction'>не только XP, но и XP</span> требует, чтобы ее части <span class='construction'>XP</span> имели равный статус. Однако части предложения &quot;плохо видит&quot; и &quot;носит очки&quot; не равноправны по значению: они выражают причину и следствие.";
    var x = document.getElementById("ex2c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "<i>Build sentences from the available parts.</i>"
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex4_eng() {
    result = "<i>Connect the phrases by choosing the matching continuation. What parts of speech fill the slot XP in the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;?</i>"
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex4() {
    var x = document.getElementById('ex4_input');
    if (x.value.toLowerCase() == "1д, 2в, 3г, 4а, 5б") {
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
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "<i>Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>.</i>"
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}