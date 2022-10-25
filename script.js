let studentName = null;
let x, p, t, o;

let clearInput = true
let currentLevel = 0;
let variablesDefaultValues;
const tablesContainer = document.querySelector('.tables-container')
const input = document.querySelector('.form-control');


const chineisinhosData = [];

registerChineisinhoLevel(() => {
    x = x + 1;
    o = p + 2;
    p = t - 2;
    saveCurrentVariablesValues();

    x = o + 1;
    t = t - 3;
    p = t + p + p;
    saveCurrentVariablesValues()

    x = x - 1;
    o = p + 2;
    p = t * 3;
    saveCurrentVariablesValues()

    x = o * 1;
    t = t - 3;
    p = t + p + (o * 4) + (o - 4);
    saveCurrentVariablesValues();

    x = x + 2;
    o = p + 4;
    p = t + 2;
    saveCurrentVariablesValues()

    x = o + 3;
    t = t - 3;
    p = t - p;
    saveCurrentVariablesValues()

    x = x - 4;
    o = p + 2;
    p = t * 3;
    saveCurrentVariablesValues()

    x = o * 6;
    t = t - 1;
    p = t + p + (o * 4) + (o - 4);
    saveCurrentVariablesValues()

    if (x > p) {

        x = x + 2;
        o = p + 4;
        p = t + 2;
        saveCurrentVariablesValues()

        x = o + 3;
        t = t - 3;
        p = t - p;
        saveCurrentVariablesValues()

        x = x - 4;
        o = p + 2;
        p = t * 3;
        saveCurrentVariablesValues()

        x = o * 6;
        t = t - 1;
        p = t + p + (o * 4) + (o - 4);
        saveCurrentVariablesValues();

    } else {

        x = x + 1;
        o = p + 2;
        p = t - 2;
        saveCurrentVariablesValues()

        x = o + 1;
        t = t - 3;
        p = t + p + p;
        saveCurrentVariablesValues()

        x = x - 1;
        o = p + 2;
        p = t * 3;
        saveCurrentVariablesValues()

        x = o * 1;
        t = t - 3;
        p = t + p + (o * 4) + (o - 4);
        saveCurrentVariablesValues()

    }
})

registerChineisinhoLevel(() => {

    if (x < p) {

        if (o < p) {

            if (p > t) {
                p = x * 2;
            } else {
                t = x * 3;
            }

        } else {

            if (p < t) {
                p = x + 2;
            } else {
                t = x;
            }

        }

    } else {

        if (p < t) {
            p = x + 2;
        } else {
            t = x;
        }

    }
    saveCurrentVariablesValues();


    x = p + 1;
    t = o - 3;
    saveCurrentVariablesValues();

    x = p - 1;
    t = p - 3;
    saveCurrentVariablesValues()

})

registerChineisinhoLevel(() => {
    o = o - o;

    switch (o) {
        case 0:
            if (o == 0) {
                o = 1;
                p = p + 1;
            } else {
                o = 2;
                p = p + 2;
            }
        case 1:
            if (o == 0) {
                o = 3;
                p = p + 3;
            }
        case 2:
            if (o == 0) {
                o = 4;
                p = p + 4;
            }
        case 4:
            if (o == 0) {
                o = 6;
                p = p + 6;
            }
        default:
            o = 7;
    }

    saveCurrentVariablesValues();

    x = p + 1;
    t = o - 2;
    saveCurrentVariablesValues()

    p = o - 3;
    t = x - 4;
    saveCurrentVariablesValues();
})

registerChineisinhoLevel(() => {
    o = o + 1;
    o = o + 2;
    o = o + 1;
    o = o - o;
    saveCurrentVariablesValues()

    x = o;
    p = o;
    t = o;
    saveCurrentVariablesValues()

    switch (o) {
        case 0:
            o = 1;
            break;
        case 1:
            o = 1;
            break;
        case 2:
            o = 1;
            break;
        case 4:
            o = 1;
            break;
        default:
            o = 7;
    }
    saveCurrentVariablesValues()

    x = o;
    p = o;
    t = o;
    saveCurrentVariablesValues()

    x = o + 3;
    p = o + 3;
    t = o + 3;
    o = o - 4;
    saveCurrentVariablesValues()

    o = o - 1;
    saveCurrentVariablesValues()

    o = o - 2;
    saveCurrentVariablesValues()
})

registerChineisinhoLevel(() => {

    o = 0;
    saveCurrentVariablesValues()

    x = o;
    p = o;
    t = o;
    saveCurrentVariablesValues()

    switch (o) {

        case 0:
            o = 1;
            break;
        case 1:
            o = 1;
            break;
        case 2:
            o = 1;
            break;
        case 4:
            o = 1;
            break;
        default:
            o = 7;
    }
    saveCurrentVariablesValues()

    if (t > o) {
        x = o;
        p = o;
        t = o;
        saveCurrentVariablesValues()

        x = o + 3;
        p = o + 3;
        t = o + 3;
        o = o - 4;
        saveCurrentVariablesValues()

        o = o - 2;
        saveCurrentVariablesValues()

        o = o - 1;
        saveCurrentVariablesValues()
    } else {
        x = o;
        p = o;
        t = o;
        saveCurrentVariablesValues()

        x = o + 3;
        p = o + 3;
        t = o + 3;
        o = o - 3;
        saveCurrentVariablesValues()

        o = o - 1;
        saveCurrentVariablesValues()

        o = o - 4;
        saveCurrentVariablesValues()
    }

})

registerChineisinhoLevel(() => {
    o = o + 1;
    o = o + 2;
    o = o + 1;
    o = o - o;
    saveCurrentVariablesValues()

    x = o;
    p = o;
    t = o;
    saveCurrentVariablesValues()

    if (t > o) {
        x = o;
        p = o;
        t = o;
        saveCurrentVariablesValues()

        x = o + 3;
        p = o + 3;
        t = o + 3;
        o = o - 4;
        saveCurrentVariablesValues()

        o = o - 2;
        saveCurrentVariablesValues()

        o = o - 1;
        saveCurrentVariablesValues()
    } else {
        switch (o) {
            case 0:
                o = 1;
                break;
            case 1:
                o = 2;
                break;
            case 2:
                o = 3;
                break;
            case 4:
                o = 8;
                break;
            default:
                o = 7;
        }
    }
    saveCurrentVariablesValues()
})


input.addEventListener('focus', () => {
    if (clearInput) {
        input.value = '';
        clearInput = false;
    }
})

document.querySelector('#submitBtn').addEventListener('click', (e) => {

    const inputValue = input.value;
    const invalidFeedback = document.querySelector('.invalid-feedback')

    input.classList.remove('is-invalid')

    if (!inputValue) {
        invalidFeedback.textContent = 'Insira um nome'
        input.classList.add('is-invalid')
        return;
    }

    if (inputValue.length < 4) {
        invalidFeedback.textContent = 'O nome precisa ter pelo menos 4 dígitos';
        input.classList.add('is-invalid')
        return;
    }

    currentLevel = 0;
    tablesContainer.innerHTML = ''
    studentName = inputValue;
    chineisinhosData.forEach((data) => {
        data.variablesValues = [];
    })
    variablesDefaultValues = getVariablesDefaultValues();
    setVariablesToDefault()

    runAllChineisinhoLevels()

    placeDataIntoHTML()

});

function placeDataIntoHTML() {

    const tablesContainer = document.querySelector('.tables-container')

    chineisinhosData.forEach(({ variablesValues }, index) => {
        const column = document.createElement('div');
        column.classList.add('col-4');

        const tableEl = document.createElement('table');
        const tbodyEl = document.createElement('tbody');
        const theadEl = document.createElement('thead');

        tableEl.classList.add('table', 'table-striped', 'table-hover', 'table-responsive')

        insertDefaultsIntoTable()

        column.innerHTML += (`<h2>Chineisinho ${index + 1}</h2>`)

        variablesValues.forEach((values) => {

            const onlyValues = Object.values(values);
            const tbodyrow = tbodyEl.insertRow();

            onlyValues.forEach((value) => {

                tbodyrow.insertCell().textContent = value;

            })
            tbodyEl.appendChild(tbodyrow);


        });


        tableEl.appendChild(theadEl)
        tableEl.appendChild(tbodyEl)
        column.appendChild(tableEl);

        tablesContainer.appendChild(column);

        function insertDefaultsIntoTable() {
            theadRow = theadEl.insertRow();

            theadRow.insertCell().textContent = 'X';
            theadRow.insertCell().textContent = 'P';
            theadRow.insertCell().textContent = 'T';
            theadRow.insertCell().textContent = 'O';

            tBodyRow = tbodyEl.insertRow();

            const { x, p, t, o } = variablesDefaultValues;
            tBodyRow.insertCell().textContent = x;
            tBodyRow.insertCell().textContent = p;
            tBodyRow.insertCell().textContent = t;
            tBodyRow.insertCell().textContent = o;

            tbodyEl.insertRow();
        }
    });



}


function saveCurrentVariablesValues() {
    chineisinhosData[currentLevel].variablesValues.push({ x, p, t, o })
}

function runAllChineisinhoLevels() {


    chineisinhosData.forEach(({ callback }) => {
        setVariablesToDefault()
        callback();
        currentLevel++
    })

}

function registerChineisinhoLevel(callback) {
    const dataLength = chineisinhosData.length
    chineisinhosData[dataLength] = {}
    chineisinhosData[dataLength].variablesValues = []
    chineisinhosData[dataLength].callback = callback;
}

function setVariablesToDefault() {
    x = variablesDefaultValues.x;
    p = variablesDefaultValues.p;
    t = variablesDefaultValues.t;
    o = variablesDefaultValues.o;
}

function getVariablesDefaultValues() {
    const upperName = studentName.toUpperCase();
    const x = upperName.charCodeAt(0) - 60;
    const p = upperName.charCodeAt(1) - 60;
    const t = upperName.charCodeAt(2) - 60;
    const o = upperName.charCodeAt(3) - 60;

    return { x, p, t, o }
}