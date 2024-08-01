document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const menuItem = document.getElementById('menu-item').value;

        // For demonstration, we'll just log the data
        console.log('Order Details:', {
            name,
            email,
            address,
            menuItem
        });

        alert('Your order has been submitted!');

        // Optionally, you could send the data to a server here using fetch or XMLHttpRequest
    });
});
