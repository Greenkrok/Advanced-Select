const container = document.createElement('div');
container.classList.add('container');

const containerHeader = document.createElement('div');
containerHeader.classList.add('container__header');

const containerTitle = document.createElement('h3');
containerTitle.innerHTML = 'Тендеры в роли Поставщика';

const showSelectedButton = document.createElement('button');
showSelectedButton.innerHTML = 'Показать выбранное (0)';
showSelectedButton.classList.add('show-selected', 'visually-hidden');

const search = document.createElement('input');
search.classList.add('container__search');
search.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции');

//select
const select = document.createElement('div');
select.classList.add('select');

containerHeader.append(containerTitle, showSelectedButton);
container.append(containerHeader, search, select);
document.body.append(container);

//modal
const modal = document.createElement('div');
modal.classList.add('modal');

const modalNav = document.createElement('div');
modalNav.classList.add('modal__header');

const arrow = document.createElement('button');
arrow.classList.add('arrow');
const div = document.createElement('div');
arrow.append(div);

const modalTitle = document.createElement('h3');
modalTitle.innerHTML = 'Реализуемые товары';

const chosen = document.createElement('span');
chosen.classList.add('chosen');
chosen.innerHTML = 'Выбранное (0)';

const inputTop = document.createElement('input');
inputTop.classList.add('container__search');
inputTop.setAttribute('placeholder', 'Поиск');

modalNav.append(arrow, modalTitle, chosen);
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

// footer in select
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

const isActive = (activeCheckList) => {

    labels.forEach(label => {
        activeCheckList.forEach(checkbox => {
            if (label.id === checkbox.id) {
                label.style.backgroundColor = '#ebf2f4';
            }
        });
    });
};

const hasChecked = () => {
    let activeCheckList = document.querySelectorAll('input[type="checkbox"]:checked');

    isActive(activeCheckList);
    chosen.innerHTML = `Выбранное (${activeCheckList.length})`;

    if (`${activeCheckList.length}` > 0) {
        containerTitle.innerHTML = 'Тендеры в роли Заказчика';
        showSelectedButton.classList.remove('show-selected', 'visually-hidden');
    } else {
        containerTitle.innerHTML = 'Тендеры в роли Поставщика';
        showSelectedButton.classList.add('show-selected', 'visually-hidden');
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
arrow.onclick = hide;

const toInput = (checkList) => {
    let values = [];
    checkList.forEach(item => {
        values.push(item.value);
    });

    search.setAttribute('placeholder', 'Ковры и ковровые изделия');
};

const checkCount = () => {
    let checkList = document.querySelectorAll('input[type="checkbox"]:checked');
    showSelectedButton.innerHTML = `Показать выбранное (${checkList.length})`;

    hide();
    toInput(checkList);
};

apply.onclick = checkCount;

const notChecked = () => {
    const checkList = document.querySelectorAll('input[type="checkbox"]');
    checkList.forEach((item => {
        item.checked = false;
    }));
    hasChecked();
    hide();
};

clear.onclick = notChecked;
