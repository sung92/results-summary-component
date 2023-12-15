const fs = require('fs');
const perceptions = document.querySelector('.perceptions');
const data = fs.readFileSync("data.json", 'utf-8');
const dataObj = JSON.parse(data);

const generateMarkup = function(data) {
    return data.map( el => {
        return `
        <div class="per-wrap per-${el.category.toLowerCase()}">
        <div class="per-flex-helper">
             <use xlink:href=${el.icon}></use>
             <p class="per-${el.category.toLowerCase()}-c">${el.category}</p>
         </div>
        <p class="per-score">${el.score}<span> / 100</span></p>
        </div>
        `
    }).join('')
};

const markup = generateMarkup(dataObj);

console.log(markup);
perceptions.insertAdjacentHTML('afterbegin', markup);