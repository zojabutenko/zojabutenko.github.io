const tree = document.createDocumentFragment();
const lesson_id = document.title.split(" ")[1] - 2
let r = await axios.get(`https://raw.githubusercontent.com/zojabutenko/zojabutenko.github.io/main/data/lesson${lesson_id}.yml`);
let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

// берет номер урока с title'а страницы (пока -2, тк тестовый ямл, исправить потом)



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


function add_answer(answer_to_show, answer_key, input) {

    let answer_text = document.createElement("p");

    let buttons = document.createElement("div")
    buttons.setAttribute("class", "d-grid gap-3 d-md-flex justify-content-md-end m-3")

    let button2 = document.createElement("button")
    button2.setAttribute("type", "button")
    button2.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
    button2.innerHTML = "Answer"

    if (Boolean(input)) {

        var result_text = document.createElement("p");
        result_text.setAttribute("style", "display: inline-block")

        let button1 = document.createElement("button")
        button1.setAttribute("type", "button")
        button1.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
        button1.innerHTML = "Check Answer"

        button1.onclick = function () {
            check_answer(input, result_text, answer_key)
        }
        buttons.appendChild(button1);
    }

    button2.onclick = function () {
        show_item(answer_text, answer_to_show);
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


    let task_buttons = document.createElement("div");
    task_buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end");

    let eng_text = document.createElement("h6");
    let norw_text = document.createElement("h6");

    let eng = document.createElement("button");
    eng.setAttribute("type", "button");
    eng.setAttribute("class", "btn btn-outline-primary float-end btn-sm");
    eng.innerHTML = "English";

    let translation_text_eng = data[exercise_id]["title_eng"]
    eng.onclick = function () {
        show_item(eng_text, translation_text_eng)
    }

    let norw = document.createElement("button");
    norw.setAttribute("type", "button");
    norw.setAttribute("class", "btn btn-outline-primary float-end btn-sm");
    norw.innerHTML = "Norwegian";
    let translation_text_norw = data[exercise_id]["title_nor"]
    norw.onclick = function () {
        show_item(norw_text, translation_text_norw)
    }

    task_buttons.appendChild(eng);
    task_buttons.appendChild(norw);

    task_title.appendChild(task_buttons);
    task_title.appendChild(eng_text)
    task_title.appendChild(norw_text)
    main_content.appendChild(task_title);

    if (data[exercise_id]["comment"]) {
        let comment = document.createElement("h6");

        let comment_button = document.createElement("button");
        comment_button.setAttribute("type", "button");
        comment_button.setAttribute("class", "btn btn-outline-primary float-end btn-sm");
        comment_button.innerHTML = "Comment for language teachers";

        let comment_text = data[exercise_id]["comment"]
        comment_button.onclick = function () {
            show_item(comment, comment_text)
        }

        task_buttons.append(comment_button);
        task_title.appendChild(comment);

    }




    if (data[exercise_id]["model"] != null) {
        let model = document.createElement("div");
        model.innerHTML = data[exercise_id]["model"];
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
        image.setAttribute("src", data[exercise_id]["image"]["link"])
        image.setAttribute("alt", "image description")
        if (data[exercise_id]["image"]["width"] != null) {
            image.setAttribute("style", `width: ${data[exercise_id]["image"]["width"]}px`)
        } else if (data[exercise_id]["image"]["height"] != null) {
            image.setAttribute("style", `width: ${data[exercise_id]["image"]["height"]}px`)
        } else {
            image.setAttribute("style", "width: 400px")
        }
        main_content.appendChild(image)
    }


    if (data[exercise_id]["table"] != null) {
        let table = document.createElement("table")
        table.setAttribute("class", "table table_lesson")



        if (data[exercise_id]["table"]["table_header"] != null) {

            let thead = document.createElement("thead")
            thead.setAttribute("class", "table-primary")

            let tr_head = document.createElement("tr")

            let table_header = data[exercise_id]["table"]["table_header"]
            for (var i = 0; i <= 2; i++) {
                var t = document.createElement("th")
                t.setAttribute("scope", "col")
                t.innerHTML = table_header[i]
                tr_head.appendChild(t)
            }

            thead.appendChild(tr_head)
            table.appendChild(thead)
        }


        let tbody = document.createElement("tbody");


        for (let z = 0; z < Object.keys(data[exercise_id]["table"]).length; z++) {
            ;
            var rows_amount = 0;

            if (Object.keys(data[exercise_id]["table"])[z].startsWith("row")) {
                ;
                rows_amount++;
            };

        };

        for (let i = 1; i <= rows_amount; i++) {
            var tr = document.createElement("tr")
            let row_length = data[exercise_id]["table"][`row${i}`].length

            // console.log(row_length)
            for (let k = 0; k < row_length; k++) {
                // if (k == 0) {
                //     var t = document.createElement("th")
                //     t.setAttribute("scope", "row")
                // } else {
                var t = document.createElement("td")
                t.setAttribute("style", "border: 0.5px outset black")
                // }

                // console.log(typeof data[exercise_id]["table"][`row${i}`][k])

                if (typeof data[exercise_id]["table"][`row${i}`][k] == "object") {
                    let length = data[exercise_id]["table"][`row${i}`][k].length
                    for (let s = 0; s < length; s++) {
                        t.appendChild(document.createTextNode(data[exercise_id]["table"][`row${i}`][k][s]))
                        t.appendChild(document.createElement("br"))
                    }
                } else {
                    t.innerHTML = data[exercise_id]["table"][`row${i}`][k];
                }
                // for (let elem in data[exercise_id]["table"][`row${i}`][k]) {
                //     console.log(typeof elem)
                // }
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
        if (typeof data[exercise_id]["task"] == "object") {
            for (let i = 1; i <= subtasks_amount; i++) {
                var subtask = document.createElement("p")
                subtask.setAttribute("class", "shadow-sm p-2 mb-3 bg-body rounded")
                subtask.innerHTML = data[exercise_id]["task"][`task${i}`]
                task_text.appendChild(subtask)
                let answer_to_show = data[exercise_id]["answer_to_show"][`answer${i}`]

                if (data[exercise_id]["difficult_words"] != null) {
                    if (data[exercise_id]["difficult_words"][`words${i}`] != null) {
                        console.log(1)
                        let d_word = document.createElement("p");
                        d_word.innerHTML = data[exercise_id]["difficult_words"][`words${i}`];
                        task_text.appendChild(d_word);
                    } else if (i == subtasks_amount & typeof data[exercise_id]["difficult_words"] != "object") {
                        console.log(0)
                        let d_word = document.createElement("p");
                        d_word.innerHTML = data[exercise_id]["difficult_words"];
                        task_text.appendChild(d_word);
                    }
                }

                if (data[exercise_id]["exercise_type"] == "text_input") {

                    let answer_key = data[exercise_id]["answer_key"][`answer${i}`]

                    add_answer(answer_to_show, answer_key, create_input());

                } else if (typeof data[exercise_id]["answer_to_show"] != "string") {
                    let answer_to_show = data[exercise_id]["answer_to_show"]
                    add_answer(answer_to_show);
                } else if (i == subtasks_amount) {
                    let answer_to_show = data[exercise_id]["answer_to_show"]
                    add_answer(answer_to_show);
                }
            };
        } else {
            var task = document.createElement("p");
            task.setAttribute("class", "shadow-sm p-2 mb-3 bg-body rounded")
            task.innerHTML = data[exercise_id]["task"];
            task_text.appendChild(task);
            let answer_to_show = data[exercise_id]["answer_to_show"]

            if (data[exercise_id]["exercise_type"] == "text_input") {
                let answer_key = data[exercise_id]["answer_key"]
                add_answer(answer_to_show, answer_key, create_input());
            }

        };
        main_content.appendChild(task_text);
    };
    tree.appendChild(main_content)
}
document.getElementById("content").appendChild(tree)