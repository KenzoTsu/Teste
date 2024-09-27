        // Dropdown do menu
        function toggleDropdown() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        }

        document.addEventListener('click', function(event) {
            const dropdown = document.querySelector('.dropdown');
            const isClickInside = dropdown.contains(event.target);

            if (!isClickInside) {
                dropdown.classList.remove('active');
            }
        }); 
    
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Impede o comportamento padrão do link

                // Adiciona a classe para iniciar a animação
                const overlay = document.getElementById('animation-overlay');
                overlay.classList.add('active');

                // Define um tempo para esperar a animação concluir antes de redirecionar prox
                setTimeout(() => {
                    window.location.href = this.href; // Redireciona para o novo site
                }, 700); // Tempo em milissegundos corresponde à duração da animação
            });
        });

        // Decoração do mouse de bolha seguindo o mouse (se quiser tirar pode tirar)
        const dot = document.querySelector('.dot');

        document.addEventListener('mousemove', (e) => {
        // Define a posição da bolinha
        dot.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        dot.style.transform += ' translate(-50%, -295%)'; // Centraliza a bolinha no ponteiro
        });




        const titles = document.querySelectorAll('.text-title');

        const calculava = document.getElementById('Calculava'), que = document.getElementById('que'), 
        Homem = document.getElementById('Homem'), O = document.getElementById('O');

        calculava.addEventListener('mouseenter', () => {
            calculava.style.transform = 'scale(1.2) translateX(25px)';
            que.style.transform = 'scale(1.2) translate(00px, -15px)';
            Homem.style.transform = 'scale(1.2) translate(30px, -19px)';
            O.style.transform = 'scale(1.2) translate(-5px, -20px)';
        });
        
        calculava.addEventListener('mouseleave', () => {
            calculava.style.transform = 'scale(1) translate(0, 0)';
            que.style.transform = 'scale(1) translate(0, 0)'; 
            Homem.style.transform = 'scale(1) translate(0px, 0px)';
            O.style.transform = 'scale(1) translate(0px, 0px)';
        });

        Homem.addEventListener('mouseenter', () => {
            calculava.style.transform = 'scale(1.2) translateX(25px)';
            que.style.transform = 'scale(1.2) translate(00px, -15px)';
            Homem.style.transform = 'scale(1.2) translate(30px, -19px)';
            O.style.transform = 'scale(1.2) translate(-5px, -20px)';
        });
        
        Homem.addEventListener('mouseleave', () => {
            calculava.style.transform = 'scale(1) translate(0, 0)';
            que.style.transform = 'scale(1) translate(0, 0)'; 
            Homem.style.transform = 'scale(1) translate(0px, 0px)';
            O.style.transform = 'scale(1) translate(0px, 0px)';

        });

        que.addEventListener('mouseenter', () => {
            calculava.style.transform = 'scale(1.2) translateX(25px)';
            que.style.transform = 'scale(1.2) translate(00px, -15px)';
            Homem.style.transform = 'scale(1.2) translate(30px, -19px)';
            O.style.transform = 'scale(1.2) translate(-5px, -20px)';
        });
        
        que.addEventListener('mouseleave', () => {
            calculava.style.transform = 'scale(1) translate(0, 0)';
            que.style.transform = 'scale(1) translate(0, 0)'; 
            Homem.style.transform = 'scale(1) translate(0px, 0px)';
            O.style.transform = 'scale(1) translate(0px, 0px)';
        });

        O.addEventListener('mouseenter', () => {
            calculava.style.transform = 'scale(1.2) translateX(25px)';
            que.style.transform = 'scale(1.2) translate(00px, -15px)';
            Homem.style.transform = 'scale(1.2) translate(30px, -19px)';
            O.style.transform = 'scale(1.2) translate(-5px, -20px)';
        });
        
        O.addEventListener('mouseleave', () => {
            calculava.style.transform = 'scale(1) translate(0, 0)';
            que.style.transform = 'scale(1) translate(0, 0)'; 
            Homem.style.transform = 'scale(1) translate(0px, 0px)';
            O.style.transform = 'scale(1) translate(0px, 0px)';
        });