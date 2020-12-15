let app = document.querySelector('.app');
const field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
let count = 0;

function addActive() {
    let str = '';
    let rowCount = 0;
    let collCount = 0;

    field.forEach(row => {
        collCount = 0;

        str += `<div class="field__row">`;
        row.forEach(cell => {
            str += `<div class="field__cell" data-row=${rowCount} data-coll=${collCount}>${cell}</div>`;
            collCount++;

        });
        str += `</div>`;
        rowCount++;

    });
    let wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    wrapper.innerHTML = str;
    app.innerHTML ='';
    app.append(wrapper) ;
}


document.addEventListener('click', function(e) {
    if(e.target.className === 'field__cell') {

    count++;
    if(count % 2 == 0) {
        value = 'x';
    } else {
        value = '0';
    }

    let x = +e.target.getAttribute('data-row');
    let y = +e.target.getAttribute('data-coll')
    // console.log(`x:${x}; y:${y}`);

    setCell(y, x, value);
    };
})

function setCell(y, x, value) {
        console.log(field[x][y]);
        field[x][y] = value;
        console.log(field);
        addActive();
}

function init() {
    addActive();
}

init();