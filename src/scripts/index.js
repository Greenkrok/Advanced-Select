// create container
const container = document.createElement('div');
container.classList.add('container');

const containerHeader = document.createElement('div');
containerHeader.classList.add('container__header');

const containerTitle = document.createElement('h3');
containerTitle.innerHTML = 'Тендеры в роли Поставщика';

const showSelectedButton = document.createElement('button');
showSelectedButton.classList.add('show-selected', 'visually-hidden');
showSelectedButton.innerHTML = 'Показать выбранное (0)';

const search = document.createElement('input');
search.classList.add('container__search');
search.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции');

//create select block
const select = document.createElement('div');
select.classList.add('select');

containerHeader.append(containerTitle, showSelectedButton);
container.append(containerHeader, search, select);
document.body.append(container);

//create modal in select block
const modal = document.createElement('div');
modal.classList.add('modal');

const modalNav = document.createElement('div');
modalNav.classList.add('modal__header');

const arrowWrapper = document.createElement('button');
arrowWrapper.classList.add('arrow-wrapper');
const arrow = document.createElement('div');
arrow.classList.add('arrow');
arrowWrapper.append(arrow);

const modalTitle = document.createElement('h3');
modalTitle.innerHTML = 'Реализуемые товары';

const chosen = document.createElement('span');
chosen.classList.add('chosen');
chosen.innerHTML = 'Выбранное (0)';

const inputTop = document.createElement('input');
inputTop.classList.add('container__search');
inputTop.setAttribute('placeholder', 'Поиск');

modalNav.append(arrowWrapper, modalTitle, chosen);
modal.append(modalNav, inputTop);
select.append(modal);

const options = Array.from(document.querySelectorAll('option'));

const optionsValue = options.map(item => item.label);

for (let counter = 0; counter < optionsValue.length; counter++) {
    const label = document.createElement('label');
    label.setAttribute('for', `${counter}`);
    label.innerHTML = `${optionsValue[counter]}`;

    const item = document.createElement('div');
    item.classList.add('select__item');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `${counter}`);

    item.append(checkbox);
    item.append(label);
    select.append(item);
}

// create footer in select block
const selectFooter = document.createElement('div');
selectFooter.classList.add('select__footer');

const apply = document.createElement('button');
apply.classList.add('button_apply');
apply.innerHTML = 'ПРИМЕНИТЬ';

const clear = document.createElement('button');
clear.classList.add('button_clear');
clear.innerHTML = 'Очистить';

selectFooter.append(apply, clear);
select.append(selectFooter);


// Functional
const preCheckedIndexes = [];
options.forEach(option => {
    if (option.attributes.selected) {
        preCheckedIndexes.push(options.indexOf(option));
    }
});

let labels = document.querySelectorAll('label');

const hasChecked = () => {
    let activeCheckList = document.querySelectorAll('input[type="checkbox"]:checked');

    chosen.innerHTML = `Выбранное (${activeCheckList.length})`;

    if (`${activeCheckList.length}` > 0) {
        containerTitle.innerHTML = 'Тендеры в роли Заказчика';
        showSelectedButton.classList.remove('visually-hidden');
    } else {
        containerTitle.innerHTML = 'Тендеры в роли Поставщика';
        showSelectedButton.classList.add('visually-hidden');
    }
};

select.addEventListener('change', hasChecked);

const show = () => {
    select.style.display = 'block';
};
const hide = () => {
    select.style.display = 'none';
};

search.onclick = show;
showSelectedButton.onclick = show;
arrowWrapper.onclick = hide;

const checkCount = () => {
    let checkList = document.querySelectorAll('input[type="checkbox"]:checked');
    showSelectedButton.innerHTML = `Показать выбранное (${checkList.length})`;

    if(`${checkList.length}` == 0) {
        search.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции');
    } else {
        search.setAttribute('placeholder', 'Ковры и ковровые изделия');
    }

    hide();
};

apply.onclick = checkCount;

const notChecked = () => {
    const checkList = document.querySelectorAll('input[type="checkbox"]');
    search.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции');
    checkList.forEach((item => {
        item.checked = false;
    }));
    hasChecked();
    hide();
};

clear.onclick = notChecked;
