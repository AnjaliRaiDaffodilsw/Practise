document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log("Grandparent is clicked");
    },true);
    
document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log("parent is clicked");
    },true)
    
document.querySelector('#child')
    .addEventListener('click', () => {
        console.log("child is clicked");
    },true)