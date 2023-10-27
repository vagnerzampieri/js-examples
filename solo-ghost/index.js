document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const ghosts = [];

    function createGhost(x, y) {
        const ghost = document.createElement('img');

        // Imagem do fantasma
        ghost.src = 'ghost.svg';
        ghost.classList.add('ghost');
        ghost.style.position = 'absolute';

        // Posição aleatória
        const randomX = x !== undefined ? x : Math.random() * (window.innerWidth - ghost.offsetWidth);
        const randomY = y !== undefined ? y : Math.random() * (window.innerHeight - ghost.offsetHeight);

        // Posiciona o fantasma
        ghost.style.left = randomX + 'px';
        ghost.style.top = randomY + 'px';
        container.appendChild(ghost);
        ghosts.push(ghost);

        // Movimenta o fantasma
        const targetX = Math.random() * (window.innerWidth - ghost.offsetWidth);
        const targetY = Math.random() * (window.innerHeight - ghost.offsetHeight);

        moveGhost(ghost, targetX, targetY);
    }

    container.addEventListener('mouseover', function (e) {
        // Posição do mouse
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Move os fantasmas próximos ao mouse
        for (const ghost of ghosts) {
            // Distância entre o fantasma e o mouse
            const deltaX = parseFloat(ghost.style.left) - mouseX;
            const deltaY = parseFloat(ghost.style.top) - mouseY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Move o fantasma se estiver próximo ao mouse
            if (distance < 100) {
                const newX = parseFloat(ghost.style.left) + 100 * deltaX / distance;
                const newY = parseFloat(ghost.style.top) + 100 * deltaY / distance;
                moveGhost(ghost, newX, newY);
            }
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            createGhost();
        }
    });
});

function moveGhost(element, targetX, targetY) {
    // Posição atual do fantasma
    const startX = parseFloat(element.style.left);
    const startY = parseFloat(element.style.top);

    // Distância entre a posição atual e a posição alvo
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;

    const duration = 2000; // Tempo de duração do movimento em milissegundos
    const startTime = performance.now(); // Tempo de início do movimento

    // Função que atualiza a posição do fantasma
    function updatePosition(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Garante que o progresso está entre 0 e 1

        // Posição atual do fantasma
        const currentX = startX + deltaX * progress;
        const currentY = startY + deltaY * progress;

        // Posiciona o fantasma
        element.style.left = currentX + 'px';
        element.style.top = currentY + 'px';

        if (progress < 1) {
            requestAnimationFrame(updatePosition); // Continua o movimento se ainda não tiver terminado
        } else {
            // Posição alvo aleatória
            const newTargetX = Math.random() * (window.innerWidth - element.offsetWidth);
            const newTargetY = Math.random() * (window.innerHeight - element.offsetHeight);
            moveGhost(element, newTargetX, newTargetY); // Inicia um novo movimento quando o anterior terminar
        }
    }

    requestAnimationFrame(updatePosition); // Inicia o movimento
}
