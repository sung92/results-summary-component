const fs = require('fs');

const mainHtml = fs.readFileSync("index.html", 'utf-8');
const tempCard = fs.readFileSync("categories.html", 'utf-8')
const data = fs.readFileSync("data.json", 'utf-8');
const dataObj = JSON.parse(data);

const replaceTemplate = (temp, data) => {
    let output = temp.replace(/{%CATEGORY2%}/g, data.category.toLowerCase());
    output = output.replace('{%SRC%}', data.icon);
    output = output.replace('{%CATEGORY%}', data.category);
    output = output.replace('{%SCORE%}', data.score);

    return output;
}

console.log(dataObj);

const cardsHtml = dataObj.map( el => replaceTemplate(tempCard, el)).join('');
console.log(cardsHtml);

mainHtml.replace('{%CARDS%}', cardsHtml);
console.log(mainHtml);
