const tree = document.createDocumentFragment();
const lesson_id = document.title.split(" ")[1]
let r = await axios.get(`https://raw.githubusercontent.com/zojabutenko/zojabutenko.github.io/main/data/lesson${lesson_id}.yml`);
let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

const data = records[0]
const main_content = document.createElement("div")
main_content.setAttribute("class", "container px-4")

const exercises_amount = Object.keys(data).length


function annotate(text) {
    // finds constructions between special symbols and changes their color
    let matches = text.match(/\^.+?@/g);
    if (matches){
        for (let substring of matches) {
            text = text.replace(substring, '<b><span style="color: #5980B9">' + substring + '</span></b>');
        }
        let rem_matches = text.match(/\^/g);
        for (let rm of rem_matches){
            text = text.replace(rm, "")
        }
        let rem_matches2 = text.match(/@/g);
        for (let rm of rem_matches2){
            text = text.replace(rm, "")
        }
    }
    return text}

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
    // input.setAttribute("style", "background-color: #ddf1fe")
    input.setAttribute("class", "form-control")
    input.setAttribute("aria-describedby", "passwordHelpBlock")

    task.appendChild(your_answer);
    task.appendChild(input);
    return input
}

function add_image(image_data) {
    let image = document.createElement("img")
    // if (Boolean(subtask)) {
    //     var image_data = data[exercise_id]["task"][`task${i}`]["image"]
    //     subtask.appendChild(image)
    // } else {
    //     var image_data = data[exercise_id]["image"]
    //     all_exercise.appendChild(image)
    // }

    image.setAttribute("src", image_data["link"])
    image.setAttribute("alt", "image description")
    // image.setAttribute("style", "margin: 50px")

    if (image_data["width"] != null) {
        // console.log(`width: ${image_data["width"]}px`)
        image.setAttribute("style", `width: ${image_data["width"]}px`)
    } else if (image_data["height"] != null) {
        image.setAttribute("style", `height: ${image_data["height"]}px`)
    } else {
        image.setAttribute("style", "width: 800px")
    }

    return image
}

function add_answer(answer_to_show, answer_key, input) {

    let answer_text = document.createElement("p");

    let buttons = document.createElement("div")
    buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end")
    buttons.setAttribute("style", "margin-top: 10px")

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
    task.appendChild(buttons);

    if (Boolean(input)) {
        task.appendChild(result_text);
    }
    task.appendChild(answer_text);
}

function add_table(subtask) {
    let table = document.createElement("table")


    table.setAttribute("class", "table table-bordered")

    if (Boolean(subtask)) {
        var table_data = data[exercise_id][subtask]["table"]
        subtask.appendChild(table)
    } else {
        var table_data = data[exercise_id]["table"]
        all_exercise.appendChild(table)
        main_content.appendChild(all_exercise);
    }


    if (table_data["width"] != null) {
        table.setAttribute("style", `width: ${table_data["width"]}px`)
    }

    if (table_data["table_header"] != null) {

        let thead = document.createElement("thead")
        // thead.setAttribute("class", "table-primary")

        let tr_head = document.createElement("tr")

        let table_header = table_data["table_header"]
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

    var rows_amount = 0;
    for (let z = 0; z < Object.keys(table_data).length; z++) {
        if (Object.keys(table_data)[z].startsWith("row")) {
            rows_amount++;
        };
    };

    for (let i = 1; i <= rows_amount; i++) {
        var tr = document.createElement("tr")
        let row_length = table_data[`row${i}`].length
        for (let k = 0; k < row_length; k++) {
            var t = document.createElement("td")
            // t.setAttribute("style", "border: 0.5px outset black")
            if (typeof table_data[`row${i}`][k] == "object") {
                let length = table_data[`row${i}`][k].length
                for (let s = 0; s < length; s++) {
                    var txt = document.createElement("p")
                    txt.innerHTML = annotate(String(table_data[`row${i}`][k][s]))
                    // t.appendChild(document.createTextNode(table_data[`row${i}`][k][s]))
                    t.appendChild(txt)
                    // t.appendChild(document.createElement("br"))
                }
            } else {
                t.innerHTML = table_data[`row${i}`][k];
            }
            tr.appendChild(t)
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
        // main_content.appendChild(table)
    
}



for (var exercise_id = 1; exercise_id <= exercises_amount; exercise_id++) {
    var all_exercise = document.createElement("div");
    // if (exercise_id % 2 != 0) {
    //     all_exercise.setAttribute("style", "background-color: #DDF1FE ");
    // }

    var task_title = document.createElement("h3");
    task_title.setAttribute("style", "margin-top: 30px");
    task_title.innerHTML = annotate(`${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`);

    if (data[exercise_id]["instructions"] != null) {
        let instructions = document.createElement("h6");
        instructions.innerHTML = data[exercise_id]["instructions"];
        instructions.setAttribute("style", "margin-top: 10px")
        task_title.appendChild(instructions);
    };
    let task_buttons = document.createElement("div");
    task_buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end");
    task_buttons.setAttribute("style", "margin-top: 10px")
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
    // all_exercise.appendChild(task_title)
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
        model.setAttribute("style", "margin-bottom: 20px")
        model.innerHTML = data[exercise_id]["model"];
        all_exercise.appendChild(model);
        // main_content.appendChild(model);
    }

    if (data[exercise_id]["example"] != null) {
        let example = document.createElement("div")
        example.setAttribute("style", "margin-bottom: 10px")
        let ex_words = document.createElement("b")
        ex_words.innerHTML = "Образец"
        ex_words.appendChild(document.createElement("br"))
        example.innerHTML = data[exercise_id]["example"]
        all_exercise.appendChild(ex_words)
        all_exercise.appendChild(example)
        // main_content.appendChild(ex_words)
        // main_content.appendChild(example)
    }


    if (data[exercise_id]["image"] != null) {
        if (data[exercise_id]["image"]["link"] != undefined) {
            all_exercise.appendChild(add_image(data[exercise_id]["image"]))
        } else {
            var images_amount = data[exercise_id]["image"].length
            var images = document.createElement("div")
            for (let e = 1; e <= images_amount; e++) {
                images.appendChild(add_image(data[exercise_id]["image"][`image${e}`]))
            }
            all_exercise.appendChild(images)
        }
        // main_content.appendChild(image)
    }


    if (data[exercise_id]["table"] != null) {
        add_table()
    }
   

    var task = document.createElement("div")
    if (data[exercise_id]["task"] != null) {
        if (typeof data[exercise_id]["task"] == "object") {
            var subtasks_amount = Object.keys(data[exercise_id]["task"]).length
            for (var i = 1; i <= subtasks_amount; i++) {
                var subtask = document.createElement("div")
                subtask.setAttribute("class", "shadow-sm p-2 mb-3 rounded")
                if (data[exercise_id]["task"][`task${i}`]["text"] != null) {
                    subtask.innerHTML = annotate(data[exercise_id]["task"][`task${i}`]["text"])

                    // subtask.appendChild(document.createElement("br"))
                }
                
                task.appendChild(subtask)

                if (data[exercise_id]["task"][`task${i}`]["table"] != null) {
                    add_table(subtask)
                }

                if (data[exercise_id]["task"][`task${i}`]["image"] != null) {
                    if (typeof data[exercise_id]["task"][`task${i}`]["image"]["link"] != "undefined") {
                        subtask.appendChild(add_image(data[exercise_id]["task"][`task${i}`]["image"]))
                    } else {
                        var images_amount = Object.keys(data[exercise_id]["task"][`task${i}`]["image"]).length
                        var images = document.createElement("div")
                        for (let e = 1; e <= images_amount; e++) {
                            images.appendChild(add_image(data[exercise_id]["task"][`task${i}`]["image"][`image${e}`]))
                        }
                        subtask.appendChild(images)                        
                    }
                }

                if (data[exercise_id]["difficult_words"] != null) {
                    if (data[exercise_id]["difficult_words"][`words${i}`] != null) {
                        let d_word = document.createElement("p");
                        d_word.innerHTML = data[exercise_id]["difficult_words"][`words${i}`];
                        task.appendChild(d_word);
                    } else if (i == subtasks_amount & typeof data[exercise_id]["difficult_words"] != "object") {
                        let d_word = document.createElement("p");
                        d_word.innerHTML = data[exercise_id]["difficult_words"];
                        task.appendChild(d_word);
                    }
                }

                if (data[exercise_id]["exercise_type"] == "text_input") {
                    let answer_to_show = annotate(data[exercise_id]["answer_to_show"][`answer${i}`])
                    let answer_key = data[exercise_id]["answer_key"][`answer${i}`]
                    add_answer(answer_to_show, answer_key, create_input());
                } else if ((typeof data[exercise_id]["answer_to_show"] == "object" & data[exercise_id]["answer_to_show"] != null) || (typeof data[exercise_id]["answer_to_show"] == "string" & i == subtasks_amount)) {
                    console.log(typeof null)
                    let answer_to_show = data[exercise_id]["answer_to_show"]
                    add_answer(answer_to_show);
                }
            };
        } else {
            task.setAttribute("class", "shadow-sm p-2 mb-3 bg-body rounded")
            task.innerHTML = annotate(data[exercise_id]["task"]);
            if (data[exercise_id]["answer_to_show"] != null) {
                let answer_to_show = data[exercise_id]["answer_to_show"]
                if (data[exercise_id]["exercise_type"] == "text_input") {
                    let answer_key = data[exercise_id]["answer_key"]
                    add_answer(answer_to_show, answer_key, create_input());
                } else {
                    add_answer(answer_to_show);
                }
            }
        };
        all_exercise.appendChild(task)
        main_content.appendChild(all_exercise);
        // main_content.appendChild(task);
    } else if (data[exercise_id]["answer_to_show"] != null) {
        let answer_to_show = data[exercise_id]["answer_to_show"]
        if (data[exercise_id]["exercise_type"] == "text_input") {
            let answer_key = data[exercise_id]["answer_key"]
            add_answer(answer_to_show, answer_key, create_input());
        } else {
            add_answer(answer_to_show);
        }
        all_exercise.appendChild(task)
        main_content.appendChild(all_exercise);
    }
    
    tree.appendChild(main_content)
}
document.getElementById("content").appendChild(tree)