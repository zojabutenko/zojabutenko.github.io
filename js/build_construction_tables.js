const tree = document.createDocumentFragment();
let r = await axios.get("https://raw.githubusercontent.com/zojabutenko/zojabutenko.github.io/main/data/lessons.yml");
let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

// берет номер урока с title'а страницы (пока -2, тк тестовый ямл, исправить потом)
const lesson_id = document.title.split(" ")[1] - 2

const data = records[0][lesson_id]
const part_1 = document.createElement("div")
part_1.setAttribute("class", "container px-4")

const lesson_title = document.createElement("h1")
lesson_title.appendChild(document.createTextNode(data["lesson_name"]));

// file link
const file = document.createElement("a")
file.setAttribute("class", "btn btn-light float-end")
file.setAttribute("href", `../../files/Lesson%20${data["lesson_id"]}.%20Download.pdf`)
file.setAttribute("role", "button")
file.setAttribute("target", "_blank")
file.appendChild(document.createTextNode("Download"))
lesson_title.appendChild(file)

const constructions = document.createElement("h3")
constructions.appendChild(document.createTextNode("Конструкции урока"));

const constr_table = document.createElement("table")
constr_table.setAttribute("class", "table")

const thead = document.createElement("thead")
thead.setAttribute("class", "table-primary")

const tr_head = document.createElement("tr")

const table_header = ["ID", "Construction", "Illustration"]
for (var i = 0; i <=2; i++) {
    var t = document.createElement("th")
    t.setAttribute("scope", "col")
    t.appendChild(document.createTextNode(table_header[i]))
    tr_head.appendChild(t)
}

constr_table.appendChild(thead)
thead.appendChild(tr_head)

const tbody = document.createElement("tbody")
constr_table.appendChild(tbody)

for (var i = 0; i < data["construction_table_rows"].length; i++) {
    var tr = document.createElement("tr")
    
    for (var k = 0; k <=2; k++) {
        if (k == 0) {
            var t = document.createElement("th")
            t.setAttribute("scope", "row")
        } else {
            var t = document.createElement("td")
            // t.setAttribute("style", "border: inherit")
            console.log(t.style)
        }
        t.appendChild(document.createTextNode(data["construction_table_rows"][i][k]))
        tr.appendChild(t)
    }
    tbody.appendChild(tr)
}

const abbvs = document.createElement("p")

for (var i = 0; i < data["lesson_instructions"].length; i++) {
    abbvs.appendChild(document.createTextNode(data["lesson_instructions"][i]))
    abbvs.appendChild(document.createElement("br"))
}
const constr_link = document.createElement("a")
constr_link.setAttribute("href", "https://constructicon.github.io/russian/")
constr_link.setAttribute("target", "_blank")
constr_link.appendChild(document.createTextNode("Русский конструктикон"))

abbvs.appendChild(constr_link)
abbvs.appendChild(document.createTextNode(" содержит информацию обо всех конструкциях урока"))

part_1.appendChild(lesson_title)
part_1.appendChild(constructions)
part_1.appendChild(constr_table)
part_1.appendChild(abbvs)

tree.appendChild(part_1)

document.getElementById("start_table").appendChild(tree)