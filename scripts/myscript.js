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

function check_Ex5a() {
    var x = document.getElementById('ex5a_input');
    answers = ["Мы сами выращиваем на даче овощи и фрукты, а кроме того, мы собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, а кроме того, собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты. Кроме того, мы собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, кроме того, собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, кроме того, мы собираем в лесу ягоды.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5a_result").innerHTML = result;
}

function Ex5a() {
    result = "Мы сами выращиваем на даче овощи и фрукты, <span class='construction'>а кроме того</span>, мы собираем в лесу ягоды.";
    var x = document.getElementById("ex5a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex5b() {
    var x = document.getElementById('ex5b_input');
    answers = ["Я люблю фильмы про природу, а кроме того, мне нравится фантастика.".toLowerCase(),
                "Я люблю фильмы про природу, кроме того, мне нравится фантастика.".toLowerCase(),
                "Я люблю фильмы про природу. Кроме того, мне нравится фантастика.".toLowerCase(),]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5b_result").innerHTML = result;
}

function Ex5b() {
    result = "Я люблю фильмы про природу, <span class='construction'>а кроме того</span>, мне нравится фантастика.";
    var x = document.getElementById("ex5b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex6_eng() {
    result = "<i>Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>.</i> Replace the conjunction <i>и</i> &#39;and&#39; with the words <span class='construction'>а кроме того</span>."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex6a() {
    var x = document.getElementById("ex6a_input");
    if (x.value.toLowerCase() == "Моя подруга очень умная, а кроме того, веселая.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6a_result").innerHTML = result;
}

function Ex6a() {
    result = "Моя подруга очень умная, <span class='construction'>а кроме того</span>, веселая.";
    var x = document.getElementById("ex6a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex6b() {
    var x = document.getElementById("ex6b_input");
    if (x.value.toLowerCase() == "Мы хотим купить новый автомобиль, а кроме того, продать старый.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6b_result").innerHTML = result;
}

function Ex6b() {
    result = "Мы хотим купить новый автомобиль, <span class='construction'>а кроме того</span>, продать старый.";
    var x = document.getElementById("ex6b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "<i>You see an entry in a diary. Connect the matching sentences by using the indicated constructions."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8_eng() {
    result = "<i>Connect the phrases by choosing a matching continuation. Note that the construction <span class='construction'>(и) кстати (говоря), Cl</span> introduces additional information and often denotes digression."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex8() {
    var x = document.getElementById('ex8_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4д, 5б") {
        result = "Правильно";
        document.getElementById("ex8_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_result").innerHTML = result;
}

function Ex8() {
    result = "1в, 2а, 3г, 4д, 5б";
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}