const tree = document.createDocumentFragment();
let r = await axios.get("https://raw.githubusercontent.com/zojabutenko/zojabutenko.github.io/main/data/lesson1.yml");
let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

// берет номер урока с title'а страницы (пока -2, тк тестовый ямл, исправить потом)
const lesson_id = document.title.split(" ")[1] - 2


const data = records[0]
const main_content = document.createElement("div")
main_content.setAttribute("class", "container px-4")

const exercises_amount = Object.keys(data).length


function show_item(x, item) {
    x.innerHTML = item;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_answer(x_input, x_result, answer_key) {
    let result;
    answer_key = answer_key.toLowerCase()
    if (x_input.value.toLowerCase() == answer_key || x_input.value.toLowerCase() == answer_key.slice(0, -1)) {
        result = "Правильно";
        x_result.style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно";
        x_result.style.backgroundColor = "#ee5151";
    };
    x_result.innerHTML = result;
}

function create_input() {
                    
    let your_answer = document.createElement("label")
    your_answer.setAttribute("class", "label")
    your_answer.innerHTML = "Ваш ответ:"

    let input = document.createElement("input")
    // input.setAttribute("type", "text")
    input.setAttribute("class", "form-control")
    input.setAttribute("aria-describedby", "passwordHelpBlock")

    task_text.appendChild(your_answer);
    task_text.appendChild(input);
    return input
}


function add_answer (new_answer, input) {

    let answer_text = document.createElement("p");

    let buttons = document.createElement("div")
    buttons.setAttribute("class", "d-grid gap-3 d-md-flex justify-content-md-end m-3")

    let button2 = document.createElement("button")
    button2.setAttribute("type", "button")
    button2.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
    button2.innerHTML = "Answer"

    if (Boolean(input)) {

        var result_text = document.createElement("p");

        let button1 = document.createElement("button")
        button1.setAttribute("type", "button")
        button1.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
        button1.innerHTML = "Check Answer"

        button1.onclick = function () {
            check_answer(input, result_text, new_answer)
        }
        buttons.appendChild(button1);
    }

    button2.onclick = function() {
        show_item(answer_text, new_answer);
    }


    buttons.appendChild(button2);
    task_text.appendChild(buttons);

    if (Boolean(input)) {
        task_text.appendChild(result_text);
    }
    task_text.appendChild(answer_text); 
}

for (var exercise_id = 1; exercise_id <= exercises_amount; exercise_id++) {


    var task_title = document.createElement("h3");
    task_title.setAttribute("style", "margin-top: 30px");
    task_title.innerHTML = `${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`;

    if (data[exercise_id]["instructions"] != null) {
        let instructions = document.createElement("h6");
        instructions.innerHTML = data[exercise_id]["instructions"];
        task_title.appendChild(instructions);
    };

    // console.log(data[exercise_id]["title_eng"])

    let translation = document.createElement("div");
    translation.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end");

    let eng_text = document.createElement("h6");
    let norw_text = document.createElement("h6");

    let eng = document.createElement("button");
    eng.setAttribute("type", "button");
    eng.setAttribute("class", "btn btn-outline-primary float-end btn-sm");
    eng.innerHTML = "English";

    let translation_text_eng = data[exercise_id]["title_eng"]
    eng.onclick = function() {
        show_item(eng_text, translation_text_eng)
    }

    let norw = document.createElement("button");
    norw.setAttribute("type", "button");
    norw.setAttribute("class", "btn btn-outline-primary float-end btn-sm");
    norw.innerHTML = "Norwegian";
    let translation_text_norw = data[exercise_id]["title_nor"]
    norw.onclick = function() {
        show_item(norw_text, translation_text_norw)
    }

    translation.appendChild(eng);
    translation.appendChild(norw);

    task_title.appendChild(translation);
    task_title.appendChild(eng_text)
    task_title.appendChild(norw_text)
    main_content.appendChild(task_title);

    if (data[exercise_id]["model"] != null) {
        let model = document.createElement("div");
        model.appendChild(document.createTextNode(data[exercise_id]["model"]));
        main_content.appendChild(model);
    }

    if (data[exercise_id]["example"] != null) {
        let example = document.createElement("div")
        let ex_words = document.createElement("b")
        ex_words.innerHTML = "Образец:"
        ex_words.appendChild(document.createElement("br"))
        example.innerHTML = data[exercise_id]["example"]
        main_content.appendChild(ex_words)
        main_content.appendChild(example)
    }

    if (data[exercise_id]["image"] != null) {
        let image = document.createElement("img")
        image.setAttribute("src", data[exercise_id]["image"])
        image.setAttribute("alt", "image description")
        image.setAttribute("style", "width: 400px")

        main_content.appendChild(image)
    }

    
    if (data[exercise_id]["table"] != null) {
        let table = document.createElement("table")
        table.setAttribute("class", "table")

        
        if (data[exercise_id]["table"]["table_header"] != null) {

            let thead = document.createElement("thead")
            thead.setAttribute("class", "table-primary")
    
            let tr_head = document.createElement("tr")
    
            let table_header = data[exercise_id]["table"]["table_header"]
            for (var i = 0; i <=2; i++) {
                var t = document.createElement("th")
                t.setAttribute("scope", "col")
                t.innerHTML = table_header[i]
                tr_head.appendChild(t)
            }

            thead.appendChild(tr_head)
            table.appendChild(thead)
        }
        

        let tbody = document.createElement("tbody");
        

        for (var z = 0; z < Object.keys(data[exercise_id]["table"]).length ; z++) {;
            var rows_amount = 0;

            if (Object.keys(data[exercise_id]["table"])[z].startsWith("row")) {;
                rows_amount++;
            };

        };

        for (var i = 1; i <= rows_amount; i++) {
            var tr = document.createElement("tr")
            let row_length = data[exercise_id]["table"][`row${i}`].length

            // console.log(row_length)
            for (var k = 0; k <=row_length; k++) {
                // if (k == 0) {
                //     var t = document.createElement("th")
                //     t.setAttribute("scope", "row")
                // } else {
                var t = document.createElement("td")
                // }
                t.innerHTML = data[exercise_id]["table"][`row${i}`][k];
                tr.appendChild(t)
            }
            tbody.appendChild(tr)
        }
        table.appendChild(tbody)
        main_content.appendChild(table)
    }










    if (data[exercise_id]["task"] != null) {
        var subtasks_amount = Object.keys(data[exercise_id]["task"]).length
        var task_text = document.createElement("div")
        
        // if type != string, then it's a list of subtasks, so we iterate
        if (typeof data[exercise_id]["task"] != "string") {
            for (let i = 1; i <= subtasks_amount; i++) {
                var subtask = document.createElement("p")
                subtask.setAttribute("class", "shadow-sm p-2 mb-3 bg-body rounded")
                subtask.innerHTML = data[exercise_id]["task"][`task${i}`]
                task_text.appendChild(subtask)
                let new_answer = data[exercise_id]["answer"][`answer${i}`]

                if (data[exercise_id]["exercize_type"] == "text_input") {

                    add_answer(new_answer, create_input());

                } else if (typeof data[exercise_id]["answer"] != "string"){
                    let new_answer = data[exercise_id]["answer"]
                    add_answer(new_answer, false);
                } else if (i == subtasks_amount) {
                    let new_answer = data[exercise_id]["answer"]
                    add_answer(new_answer, false);
                }
            };
        } else {
            var task = document.createElement("p");
            task.innerHTML = data[exercise_id]["task"];
            task_text.appendChild(task);

            let new_answer = data[exercise_id]["answer"]

            // add_answer(new_answer, input);

        };
        main_content.appendChild(task_text);
    };



    tree.appendChild(main_content)
}



document.getElementById("content").appendChild(tree)