// $(document).ready(function() {
//     $('#ex2a_input').keyup(function() {
//         $(this).attr('size', $(this).val().length)
//     });
// });


function Ex1() {
    result = "Все эти конструкции вводят дополнительную информацию.<br><span class='translation'> = All of these constructions introduce additional information.<br> = Alle disse konstruksjonene introduserer informasjon som supplerer noe som er sagt tidligere.</span>";
    var x = document.getElementById("ex1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_eng() {
    result = "Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?"
    var x = document.getElementById("ex1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_norw() {
    result = "Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene?"
    var x = document.getElementById("ex1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex2_eng() {
    result = "Rephrase each sentence by using the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;. Are there any sentences that cannot be rephrased?</i>"
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex2_norw() {
    result = "Omformuler hver setning ved å bruke konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39;. Finnes det noen setninger som ikke kan omformuleres?"
    var x = document.getElementById("ex2_norw")
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
    result = "Это предложение нельзя переформулировать. Конструкция <span class='construction'>не только XP, но и XP</span> требует, чтобы ее части <span class='construction'>XP</span> имели равный статус. Однако части предложения &quot;плохо видит&quot; и &quot;носит очки&quot; не равноправны по значению: они выражают причину и следствие.<br><span class='translation'> = It is not possible to rephrase this sentence. The construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39; requires that its components <span class='construction'>XP</span> have equal status. However, in this case the elements &quot;плохо видит&quot; and &quot;носит очки&quot; are not equal semantically: the former is the cause, and the latter is the consequence.<br> = Det er ikke mulig å omformulere denne setningen. Konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39; krever at begge delene <span class='construction'>XP</span> er likeverdige. I dette tilfellet er imidlertid ikke delene &quot;плохо видит&quot; og &quot;носит очки&quot; likeverdige når det gjelder betydning: den første uttrykker årsak, mens den andre uttrykker virkning.</span>";
    var x = document.getElementById("ex2c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Build sentences from the available parts."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex3_norw() {
    result = "Lag setninger ved hjelp av de forskjellige delene."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex4_eng() {
    result = "<i>Connect the phrases by choosing the matching continuation. What parts of speech fill the slot <span class='construction'>XP</span> in the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;?</i>"
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex4_norw() {
    result = "Fullfør setningene ved å velge delene som passer sammen. Hvilke ordklasser utgjør <span class='construction'>XP</span> i konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39;?"
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
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
    result = "Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex5_norw() {
    result = "Omformuler setningene ved å bruke konstruksjonen <span class='construction'>(а) кроме того XP/Cl</span>."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
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
    result = "Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>.</i> Replace the conjunction <i>и</i> &#39;and&#39; with the words <span class='construction'>а кроме того</span>."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex6_norw() {
    result = "Omformuler setningene ved å bruke konstruksjonen <span class='construction'>(а) кроме того XP/Cl</span>. Bytt ut konjunksjonen <i>и</i> &#39;og&#39; med ordene <span class='construction'>а кроме того</span>."
    var x = document.getElementById("ex6_norw")
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
    result = "You see an entry in a diary. Connect the matching sentences by using the indicated constructions."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex7_norw() {
    result = "Du leser et dagboksnotat. Koble sammen setningene ved hjelp av de foreslåtte konstruksjonene."
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8_eng() {
    result = "Connect the phrases by choosing a matching continuation. Note that the construction <span class='construction'>(и) кстати (говоря), Cl</span> introduces additional information and often denotes digression."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Legg merke til at konstruksjonen <span class='construction'>(и) кстати (говоря), Cl</span> angir tilleggsinformasjon og ofte indikerer et avvik fra emnet."
    var x = document.getElementById("ex8_norw")
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


function Ex9_eng() {
    result = "The construction <span class='construction'>(и) кстати (говоря), Cl</span> has the four variants indicated in the table. Note that the variants <span class='construction'>и кстати</span> and <span class='construction'>и кстати говоря</span> do not appear in the middle of a sentence. With this in mind, fill in the blanks in each sentence with as many options as possible."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex9_norw() {
    result = "Tabellen viser de fire mulige variantene av konstruksjonen <span class='construction'>(и) кстати (говоря), Cl</span>. Legg merke til at <span class='construction'>и кстати</span> og <span class='construction'>и кстати говоря</span> aldri forekommer i midten av en setning. Fyll ut de tomme feltene med så mange varianter av disse konstruksjonene som mulig."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex9() {
    var x = document.getElementById('ex9a_input');
    answers = ["а, в", "а", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9a_result").innerHTML = result;

    var x = document.getElementById('ex9b_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9b_result").innerHTML = result;

    var x = document.getElementById('ex9c_input');
    answers = ["а, в", "а", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9c_result").innerHTML = result;

    var x = document.getElementById('ex9d_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9d_result").innerHTML = result;

    var x = document.getElementById('ex9e_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9e_result").innerHTML = result;

    var x = document.getElementById('ex9f_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex9f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex9f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex9f_result").innerHTML = result;

}

function Ex9() {
    result = "1: а, в;<br>2: а, б, в, г;<br>3: а, в;<br>4: а, б, в, г;<br>5: а, б, в, г;<br>6: а, б, в, г;";
    var x = document.getElementById("ex9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex10_eng() {
    result = "Bonus exercise. Fill in the blanks with the words from the list. Explain why certain options cannot be used. Note that there can be more than one correct answer."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex10_norw() {
    result = "Bonusoppgave. Fyll ut de tomme feltene med ord fra listen. Forklar hvorfor noen varianter ikke passer. Legg merke til at flere enn et alternativ kan være riktig."
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex10() {
    var x = document.getElementById('ex10a_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10a_result").innerHTML = result;

    var x = document.getElementById('ex10b_input');
    answers = ["а, б, в", "а", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10b_result").innerHTML = result;

    var x = document.getElementById('ex10c_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10c_result").innerHTML = result;

    var x = document.getElementById('ex10d_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10d_result").innerHTML = result;

    var x = document.getElementById('ex10e_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10e_result").innerHTML = result;

    var x = document.getElementById('ex10f_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10f_result").innerHTML = result;

    var x = document.getElementById('ex10g_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex10g_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex10g_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex10g_result").innerHTML = result;
}

function Ex10() {
    var result = ""
    answ_a = "1: а<br><span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> здесь не подходят, так как они не передают этого значения.<br> = <span class='translation'>The word <span class='construction'>Кстати</span> &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; are not appropriate here, because they do not convey this meaning.<br> = Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men den kan avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; passer ikke i dette tilfellet fordi de formidler ikke en slik betydning.</span><br>";
    answ_b = "2: а, б, в;<br>Здесь подходят все три конструкции, но они вносят разные нюансы. <span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов.<br> = <span class='translation'> All three constructions can be used here. However, they have different nuances in meaning. Кстати &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words кроме того &#39;besides&#39; and к тому же &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning.<br> = Samtlige tre konstruksjoner kan brukes i dette tilfellet. Imidlertid kan de uttrykke nyanseforskjeller i sammenhengen. Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men samtidig kan den avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta.</span><br>";
    answ_c = "3: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Конструкция кстати здесь не подходит, так как она подчеркивает неожиданность дополнительной информации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the word <span class='construction'>кстати</span> &#39;by the way&#39; cannot be used here, because it emphasizes that the added information is unexpected.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>кстати</span> &#39;forresten&#39; passer ikke i dette tilfellet, siden den uttrykker uventet tilleggsinformasjon.</span><br>";
    answ_d = "4: а;<br><span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> здесь не подходят, так как они не передают этого значения.<br> = <span class='translation'>The word <span class='construction'>Кстати</span> &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; are not appropriate here, because they do not convey this meaning.<br> = Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men den kan avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; passer ikke i dette tilfellet fordi de formidler ikke en slik betydning.</span><br>";
    answ_e = "5: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Конструкция <span class='construction'>кстати</span> здесь не подходит, так как она подчеркивает неожиданность дополнительной информации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the word <span class='construction'>кстати</span> &#39;by the way&#39; cannot be used here, because it emphasizes that the added information is unexpected.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>кстати</span> &#39;forresten&#39; passer ikke i dette tilfellet, siden den uttrykker uventet tilleggsinformasjon.</span><br>";
    answ_f = "6: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Особенность конструкции <span class='construction'>к тому же</span> в том, что часто она вводит более сильный аргумент, а в данном случае подчеркивает негативную сторону ситуации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the words <span class='construction'>к тому же</span> &#39;in addition&#39; often introduces a stronger argument, and in this sentence it emphasizes the negative side of the situation.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>к тому же</span> &#39;I tillegg&#39; angir ofte et sterkere argument, og i dette tilfellet er fokus rettet mot det negative i situasjonen.</span><br>";
    answ_g = "7: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Особенность конструкции <span class='construction'>к тому же</span> в том, что часто она вводит более сильный аргумент, а в данном случае подчеркивает позитивную сторону ситуации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact in the line of reasoning. The construction with the words <span class='construction'>к тому же</span> &#39;in addition&#39; often introduces a stronger argument, and in this sentence it emphasizes the positive side of the situation.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>к тому же</span> &#39;I tillegg&#39; angir ofte et sterkere argument, og i dette tilfellet er fokus rettet mot det positive i situasjonen.</span>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d, answ_e, answ_f, answ_g)
    var x = document.getElementById("ex10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_eng() {
    result = "Discuss with your conversation partner whose best friend is better: yours or his/her. Give arguments to support your claims. Use the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_norw() {
    result = "Diskuter med din samtalepartner om hvem som har den beste vennen. Argumenter for dine meninger. Bruk konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ... &#39;."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex11_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12_eng() {
    result = "Tell another person what a real friend should be like. Add information by using the constructions from this list."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12_norw() {
    result = "Fortell en annen person hvordan en riktig venn skal være. Bruk konstruksjonene i listen for å legge til informasjon."
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12_comment() {
    result = "Это упражнение хорошо делать с целой группой студентов. Формат задания: по цепочке. Каждый студент должен добавить к описанию идеального друга новую черту. Продолжаем по очереди, все предложения должны быть связаны друг с другом.<br> = This exercise is good to do with a group of students. Task format: have students answer one after another. Each student in their turn adds a new characteristic to the description of the ideal friend. All sentences should be connected to each other by the constructions."
    var x = document.getElementById("ex12_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_eng() {
    result = "You have met a celebrity on the street. Explain to your friends who this person is without mentioning his or her name. Your friends should try to guess who this celebrity is. After each wrong guess, you add another fact to help your friends guess. Use the constructions from the list."
    var x = document.getElementById("ex13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_norw() {
    result = "Du har truffet en kjendis på gata. Forklar for vennene dine hvem det er, uten å nevne navnet til vedkommende. Dine venner må gjette hvem det er. Etter hvert feilaktig svar skal du legge til ytterligere informasjon for å hjelpe dem å gjette. Bruk konstruksjonene i listen."
    var x = document.getElementById("ex13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_comment() {
    result = "Каждый студент получает имя известного человека и должен объяснить, кто он (или она). Задача других студентов — отгадать, кто это. Кроме имени, студентам можно дать карточки с информацией об этих знаменитостях. <br> = Each student receives the name of a famous person and should explain who this person is. The task of the other students is to guess who this person is. In addition to the name, the students can also receive cards with information about these celebrities."
    var x = document.getElementById("ex13_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13() {
    result = "а: Александр Рыбак;<br>б: Адель;<br>в: Грета Тунберг;<br>г: Джонни Депп;<br>д: Магнус Карлсен;<br>е: Йенс Столтенберг;<br>ж: Леонардо Ди Каприо;<br>з: Анджелина Джоли;";
    var x = document.getElementById("ex13_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex14_eng() {
    result = "Write a short text (6 to 7 sentences) about your friend or acquaintance. Use all five new constructions."
    var x = document.getElementById("ex14_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex14_norw() {
    result = "Skriv en kort tekst (6 til 7 setninger) om en venn eller bekjent. Bruk alle de fem nye konstruksjonene."
    var x = document.getElementById("ex14_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}



function func_one() {
    // result = "Skriv en kort tekst (6 til 7 setninger) om en venn eller bekjent. Bruk alle de fem nye konstruksjonene."
    var x = document.getElementById("func_exmpl_one")
    // x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        
    }
}