const container = document.getElementById('container');
    let expanded = false;

    for (let i = 0; i < 52; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }

    container.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box');
        
        boxes.forEach(box => {
            box.classList.remove('expanded', 'collapsed');
            if (expanded) {
                box.classList.add('collapsed');
            } else {
                box.classList.add('expanded');
            }
        });

        expanded = !expanded;
    });