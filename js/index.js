// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input[type=number]').value;

  let subtotal = Number(price*quantity)

  let subtotalItem = product.querySelector('.subtotal span')
  subtotalItem.innerText = subtotal
  
  

}

function calculateAll() {
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let loopin = document.querySelectorAll('.product');
  let products = loopin.forEach(e=>{
    updateSubtotal(e)
  })
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
