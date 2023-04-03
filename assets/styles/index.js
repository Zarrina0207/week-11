const price1 = document.getElementById('price1');
console.log(+price1.innerHTML);

const price2 = document.getElementById('price2');
console.log(+price2.innerHTML);

const price3 = document.getElementById('price3');
console.log(+price3.innerHTML);

const price4 = document.getElementById('price4');
console.log(+price4.innerHTML);

const total = document.getElementById('total');
total.innerHTML = 4999 + 5450 + 3360 + 4450 + ' руб.';

function setDisable() {
    const discount = total * 0.2;
    const discounted = total - discount;
    return discounted;
    discount.setAttribute('disable,true');
    total.innerHTML = 18259;
}