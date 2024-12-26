//4

const container = document.querySelector('div');


container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;

        document.body.style.backgroundColor = color;
    }
});

//1
const extractNumbers = (str) => {
    return str.match(/\d+/g)?.map(Number) || [];
};

console.log(extractNumbers("a1fg5hj6"));
console.log(extractNumbers("abc"));
console.log(extractNumbers("12ab34c5"));


// 3

// async function fetchProductTitles() {
//     try {
//
//         const response = await fetch('https://fakestoreapi.com/products');
//
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//         const data = await response.json();
//         data.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Произошла ошибка:', error.message);
//     }
// }
// fetchProductTitles();

//3
const getAsyncData = async () => {
    const products = await fetch('https://fakestoreapi.com/products');
    const data = await products.json();
    console.log(data)
}
getAsyncData()

//2
function fibo(first, second) {
    if (first > 144) return;
    console.log(first)
    setTimeout(function () {
        fibo(second, first + second)
    },900)
}
fibo(1, 1)

//5


const block = document.getElementById('block');
const button = document.getElementById('button');

button.onclick = function () {

    if (block.style.display === 'none') {
        block.style.display = 'block';
        button.textContent = 'Скрыть блок';
    } else {
        block.style.display = 'none';
        button.textContent = 'Показать блок';
    }
};

//6
let count = 0;
const counterElement = document.getElementById('counter');


const interval = setInterval(() => {
    count++;
    counterElement.textContent = count;
    if (count === 100) {
        clearInterval(interval);
    }
}, 1);


