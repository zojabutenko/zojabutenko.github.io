// 'use strict';

const tree = document.createDocumentFragment();

let r = await axios.get("https://raw.githubusercontent.com/zojabutenko/zojabutenko.github.io/main/test.yml");
let json_data = jsyaml.load(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}


const part_1 = document.createElement("div")
part_1.setAttribute("class", "container px-4")

const title = document.createElement("h1")
title.appendChild(document.createTextNode(`Урок ${records["lesson_id"]}`));

const constructions = document.createElement("h3")
constructions.appendChild(document.createTextNode("Конструкции урока"));

const constr_table = document.createElement("table")
constr_table.setAttribute("class", "table")

// const 


// table

part_1.appendChild(title)
part_1.appendChild(constructions)
part_1.appendChild(constr_table)













tree.appendChild(part_1)

document.getElementById("main").appendChild(tree)



// console.log(records)
// console.log(records["task"][0]["task1"])