
function Ex1_eng() {
    result = "<i>Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?</i>"
    let x = document.getElementById("ex1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
    x.style.display = "none";
} else {
    x.style.display = "inline-block";
}
}
function Ex1_nor() {
    result = "<i>Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene?</i>"
    let x = document.getElementById("ex1_nor")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
    x.style.display = "none";
} else {
    x.style.display = "inline-block";
}
}
function Ex1_ans() {
    result = "Все эти конструкции вводят дополнительную информацию. <br> All of these constructions introduce additional information. <br> Alle disse konstruksjonene introduserer informasjon som supplerer noe som er sagt tidligere."
    let x = document.getElementById("ex1_ans")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
    x.style.display = "none";
} else {
    x.style.display = "inline-block";
}
}

function Ex2_eng() {
    result = "<i>Rephrase each sentence by using the construction <span class=\"text-primary\"><b>не только XP, но и XP</b></span> 'not only... but also ...'. Are there any sentences that cannot be rephrased? We can put a word or a phrase in the slot marked XP (XP=phrase).</i>"
    let x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {x.style.display = "none";} else {x.style.display = "inline-block";}
}
function Ex2_nor() {
    result = "<i>Omformuler hver setning ved å bruke konstruksjonen <span class=\"text-primary\"><b>не только XP, но и XP</b></span> 'ikke bare... men også ...'. Finnes det noen setninger som ikke kan omformuleres? Plassen XP kan fylles med et ord eller en frase (XP=frase).</i>"
    let x = document.getElementById("ex2_nor")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {x.style.display = "none";} else {x.style.display = "inline-block";}
}
function check_Ex2a() {
    var x = document.getElementById("ex2a_input");
    if (x.value.toLowerCase() == "Роман не только хорошо играет в футбол, но и фотографирует.".toLowerCase()) {document.getElementById("ex2a_input").style.backgroundColor = "#6ef184";} else {document.getElementById("ex2a_input").style.backgroundColor = "#EC7063";}
}
function Ex2a() {
    result = "Роман <span class=\"text-primary\"><b>не только</b></span> хорошо играет в футбол, <span class=\"text-primary\"><b>но и</b></span> фотографирует.";
    var x = document.getElementById("ex2a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {x.style.display = "none";} else {x.style.display = "block";}
}
function check_Ex2b() {
    var x = document.getElementById("ex2b_input");
    if (x.value.toLowerCase() == "София не только красиво поëт, но и играет на пианино.".toLowerCase()) {document.getElementById("ex2b_input").style.backgroundColor = "#6ef184";} else {document.getElementById("ex2b_input").style.backgroundColor = "#EC7063";}
}
function Ex2b(){
    result = "София <span class=\"text-primary\"><b>не только</b></span> красиво поëт, <span class=\"text-primary\"><b>но и</b></span> играет на пианино.";
    var x = document.getElementById("ex2b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {x.style.display = "none";} else {x.style.display = "block";}
}
function check_Ex2c() {
    var x = document.getElementById("ex2c_input");
    if (x.value.toLowerCase() == "Нельзя переделать".toLowerCase()) {document.getElementById("ex2c_input").style.backgroundColor = "#6ef184";} else {document.getElementById("ex2c_input").style.backgroundColor = "#EC7063";}
}
function Ex2c(){
    result = "Это предложение нельзя переформулировать. Конструкция <span class=\"text-primary\"><b>не только XP, но и XP</b></span> требует, чтобы ее части XP имели равный статус. Однако части предложения \"плохо видит\" и \"носит очки\" не равноправны по значению: они выражают причину и следствие. <br>= It is not possible to rephrase this sentence. The construction <span class=\"text-primary\"><b>не только XP, но и XP</b></span> 'not only... but also ...' requires that its components XP have equal status. However, in this case the elements \"плохо видит\" and \"носит очки\" are not equal semantically: the former is the cause, and the latter is the consequence. <br>= Det er ikke mulig å omformulere denne setningen. Konstruksjonen <span class=\"text-primary\"><b>не только XP, но и XP</b></span> 'ikke bare... men også ...' krever at begge delene XP er likeverdige. I dette tilfellet er imidlertid ikke delene \"плохо видит\" og \"носит очки\" likeverdige når det gjelder betydning: den første uttrykker årsak, mens den andre uttrykker virkning.";
    var x = document.getElementById("ex2c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {x.style.display = "none";} else {x.style.display = "block";}
}
