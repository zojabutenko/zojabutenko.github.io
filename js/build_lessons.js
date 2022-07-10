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

for (var exercise_id = 1; exercise_id <= exercises_amount; exercise_id++) {
    var task_title = document.createElement("h3")

    task_title.appendChild(document.createTextNode(`${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`));

    if (data[exercise_id]["instructions"] != null) {
        let instructions = document.createElement("h6")
        instructions.appendChild(document.createTextNode(data[exercise_id]["instructions"]))
        task_title.appendChild(instructions)
    }


    var translation = document.createElement("div")
    translation.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end")

    var eng = document.createElement("button")
    eng.setAttribute("type", "button")
    eng.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
    eng.setAttribute("onclick", "Ex1_eng()")
    eng.appendChild(document.createTextNode("English"))

    var norw = document.createElement("button")
    norw.setAttribute("type", "button")
    norw.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
    norw.setAttribute("onclick", "Ex1_nor()")
    norw.appendChild(document.createTextNode("Norwegian"))

    translation.appendChild(eng)
    translation.appendChild(norw)

    task_title.appendChild(translation)
    main_content.appendChild(task_title)

    if (data[exercise_id]["model"] != null) {
        let model = document.createElement("div")
        model.appendChild(document.createTextNode(data[exercise_id]["model"]))
        main_content.appendChild(model)
    }

    if (data[exercise_id]["example"] != null) {
        let example = document.createElement("div")
        let ex_words = document.createElement("b")
        ex_words.appendChild(document.createTextNode("Образец:"))
        ex_words.appendChild(document.createElement("br"))
        example.appendChild(document.createTextNode(data[exercise_id]["example"]))
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


    if (data[exercise_id]["task"] != null) {
        var subtasks_amount = Object.keys(data[exercise_id]["task"]).length
        var task_text = document.createElement("div")
        if (subtasks_amount > 1) {
            for (let i = 1; i <= subtasks_amount; i++) {
                var subtask = document.createElement("p")
                subtask.setAttribute("class", "shadow-sm p-2 mb-3 bg-body rounded")
                subtask.appendChild(document.createTextNode(data[exercise_id]["task"][`task${i}`]))
                task_text.appendChild(subtask)
                
                if (data[exercise_id]["exersize_type"] == "text_input") {
                    let your_answer = document.createElement("label")
                    your_answer.setAttribute("for", "ex2a_input")
                    your_answer.setAttribute("class", "label")
                    your_answer.appendChild(document.createTextNode("Ваш ответ:"))


                    let answer = document.createElement("input")
                    answer.setAttribute("type", "text")
                    answer.setAttribute("id", "ex2a_input")
                    answer.setAttribute("class", "form-control")
                    answer.setAttribute("aria-describedby", "passwordHelpBlock")

                    let buttons = document.createElement("div")
                    buttons.setAttribute("class", "d-grid gap-3 d-md-flex justify-content-md-end m-3")

                    let button1 = document.createElement("button")
                    button1.setAttribute("type", "button")
                    button1.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
                    button1.setAttribute("onclick", "check_Ex2b()")
                    button1.appendChild(document.createTextNode("Check Answer"))

                    let button2 = document.createElement("button")
                    button2.setAttribute("type", "button")
                    button2.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
                    button2.setAttribute("onclick", "Ex2a()")
                    button2.appendChild(document.createTextNode("Answer"))


                    task_text.appendChild(your_answer)
                    task_text.appendChild(answer)
                    buttons.appendChild(button1)
                    buttons.appendChild(button2)
                    task_text.appendChild(buttons)
                }
            }
        } else if (subtasks_amount == 1) {
            var task = document.createElement("p")
            task.appendChild(document.createTextNode(data[exercise_id]["task"][0]))
            task_text.appendChild(task)
        }
        main_content.appendChild(task_text)
    }

    if (typeof data[exercise_id]["answer"] == "string") {
        let answer = document.createElement("div")
        answer.setAttribute("class", "d-grid gap-3 d-md-flex justify-content-md-end")

        let button = document.createElement("button")
        button.setAttribute("type", "button")
        button.setAttribute("class", "btn btn-outline-primary float-end btn-sm")
        button.setAttribute("onclick", "Ex1_ans()")
        button.appendChild(document.createTextNode("Answer"))

        let answer_text = document.createElement("p")
        answer_text.setAttribute("id", "ex1_ans")

        answer.appendChild(button)
        answer.appendChild(answer_text)

        main_content.appendChild(answer)
    }


    tree.appendChild(main_content)
}



document.getElementById("content").appendChild(tree)