const perceptions = document.querySelector('.perceptions');


const generateMarkup = function(data) {
    return data.map( el => {
        return `
        <div class="per-wrap per-${el.category.toLowerCase()}">
        <div class="per-flex-helper">
             <img src=${el.icon}>
             <p class="per-${el.category.toLowerCase()}-c">${el.category}</p>
         </div>
        <p class="per-score">${el.score}<span> / 100</span></p>
        </div>
        `
    }).join('')
};

const htmlTemplate = async function() {
    const data = await fetch("data.json");
    const result = await data.json();
    return result;
}

const template = await htmlTemplate();

const markup = generateMarkup(template);

perceptions.insertAdjacentHTML('afterbegin', markup);