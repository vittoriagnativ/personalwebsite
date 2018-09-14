//const initialword = 'Welcome to my personal blog!';
//alert(initialword);
const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(),
            1000);