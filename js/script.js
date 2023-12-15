const fs = require('fs');

const perceptions = document.querySelector('.perceptions');
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

perceptions.insertAdjacentHTML('afterbegin', cardsHtml);