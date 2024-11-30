// Add event listeners to add to cart buttons
document.querySelectorAll('.product button').forEach(button => {
   button.addEventListener('click', () => {
   // Add product to cart logic here
   console.log('Product added to cart!');
   });
  });