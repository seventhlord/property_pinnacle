const buttons = document.querySelectorAll('.transition-buttons__button, .arrow-buttons__button');
const cards = document.querySelectorAll('.cards');
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

let catalogs = [
    { index: 0, name: 'catalog-about-houses' },
    { index: 1, name: 'catalog-about-villas' },
    { index: 2, name: 'catalog-about-apartments' },
];
let currentCatalogIndex = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        removeClassListButton(button);
        addClassListButton(button);
        cards.forEach(card => card.classList.remove('active'));
        document.getElementById(catalogs[index].name).classList.add('active');
        currentCatalogIndex = index;
        updateButtons();
    });
});

prevButton.addEventListener('click', () => {
    if (currentCatalogIndex > 0) {
        currentCatalogIndex--;
    }
    updateCatalog(currentCatalogIndex);
    updateButtons();
});

nextButton.addEventListener('click', () => {
    if (currentCatalogIndex < catalogs.length - 1) {
        currentCatalogIndex++;
    }
    updateCatalog(currentCatalogIndex);
    updateButtons();
});

function updateButtons() {
    if (currentCatalogIndex === 0) {
        addClassListNextButton();
        removeClassListPrevButton();
    } else if (currentCatalogIndex === catalogs.length - 1) {
        addClassListPrevButton()
        removeClassListNextButton();
    } else {
        addClassListPrevButton();
        addClassListNextButton();
    }
}

function updateCatalog(index) {
    buttons.forEach(button => button.classList.remove('active'));
    cards.forEach(card => card.classList.remove('active'));
    buttons[index].classList.add('active');
    cards[index].classList.add('active');
}

function removeClassListButton(button) {
    buttons.forEach(button => button.classList.remove('active'));
}

function addClassListButton(button) {
    button.classList.add('active');
}

function addClassListNextButton() {
    nextButton.classList.add('active');
}

function removeClassListNextButton() {
    nextButton.classList.remove('active');
}

function addClassListPrevButton() {
    prevButton.classList.add('active');
}

function removeClassListPrevButton() {
    prevButton.classList.remove('active');
}
