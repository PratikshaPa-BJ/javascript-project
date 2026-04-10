const blocks = document.querySelectorAll('.Block');
const body = document.body;
const messageBox = document.getElementById('messageBox');

blocks.forEach((block) => {
    block.addEventListener('click', (e) => {
        const color = e.target.id;

        body.style.backgroundColor = color;

        messageBox.textContent = `You clicked ${color} colour`;
        messageBox.style.color = color;
        messageBox.classList.add('show');

        // Remove active class from all blocks
        blocks.forEach((b) => b.classList.remove('active'));

        // Add active class to clicked block
        e.target.classList.add('active');
    });
});
