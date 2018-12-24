let result = 0, operation = "", isSecondPart = false;

let storeResult = function() {
    let v = parseFloat(document.getElementById('calc').value);

    if (operation === '+')
      result += v;
    else if (operation === '-')
      result -= v;
    else if (operation === 'x' || operation === '*')
      result *= v;
    else if (operation === '÷' || operation === '/')
      result /= v;
    else
      result = v;

    document.getElementById('calc').value = result;
};

var processKey = function(key) {
    if (/\d/.test(key) || key === '.') {
        if (isSecondPart) {
            document.getElementById('calc').value = key;
            isSecondPart = false;
        } else
            document.getElementById('calc').value += key;
    } else if (key === 'C'){
        result = 0;
        operation = '';
        document.getElementById('calc').value = '0';
    } else {
        storeResult();
        operation = key;
        isSecondPart = true;
    }
};

let btnArray = document.getElementsByClassName('box');

[].forEach.call(btnArray, function (btn) {
    btn.onclick = function() {
      processKey(btn.textContent);
    };
});