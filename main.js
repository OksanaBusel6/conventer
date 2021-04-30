let label = document.querySelectorAll('.currency__label');

function marginLabel(x, i, arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.marginBottom = '15px';
  }
}

label.forEach(marginLabel);


function convert() {

  let inputVal = document.querySelector('.currency__input').value;
  let result = document.getElementById('result');

  let optionIndex1 = document.getElementById('currency__select').options.selectedIndex;
  let optionActive1 = document.getElementById('currency__select').options[optionIndex1].value;

  let optionIndex2 = document.getElementById('currency__select2').options.selectedIndex;
  let optionActive2 = document.getElementById('currency__select2').options[optionIndex2].value;

  let kUsdUah = 27.68;
  let kEurUah = 32.98;
  let kEurUsd = 1.19;


  if (inputVal <= 0) {
    return result.value = 'Введено неверное значение';
  } else {
    let res = inputVal;
    if (optionActive1 == 'UAH') {
      if (optionActive2 == 'USD') {
        res /= kUsdUah;
      } else if (optionActive2 == 'EUR') {
        res /= kEurUah;
      }
    } else if (optionActive1 == 'USD') {
      if (optionActive2 == 'UAH') {
        res *= kUsdUah;
      } else if (optionActive2 == 'EUR') {
        res /= kEurUsd;
      }
    } else {
      if (optionActive2 == 'UAH') {
        res *= kEurUah;
      } else if (optionActive2 == 'USD') {
        res *= kEurUsd;
      }
    }
    return result.value = (+res).toFixed(2);

  }
}