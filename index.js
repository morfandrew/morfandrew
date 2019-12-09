const list = [
    {id: 1, name: 'Документ 1'},
    {id: 2, name: 'Документ 2'},
    {id: 3, name: 'Документ 3'}
];

const $tbody = document.querySelector('table tbody');
$tbody.innerHTML = '';
for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const $tr = document.createElement('tr');
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    $tr.append($tdId, $tdNumber);
    $tbody.appendChild($tr);
}

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');
const filterClickHandler = function (e) {

    const q = $filterInput.value;
    $tbody.innerHTML = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        if (element.name.indexOf(q) > -1) {
            const $tr = document.createElement('tr');
            const $tdId = document.createElement('td');
            const $tdNumber = document.createElement('td');
            $tdId.innerHTML = element.id;
            $tdNumber.innerHTML = element.name;
            $tr.append($tdId, $tdNumber);
            $tbody.appendChild($tr);
        }
    }
};
$searchButton.addEventListener('click', filterClickHandler);
