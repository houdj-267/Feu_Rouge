
document.addEventListener("DOMContentLoaded", function() {
    let currentLight = -1; 

    const lumières = [
        document.getElementById('feu-rouge'),
        document.getElementById('feu-orange'),
        document.getElementById('feu-vert')
    ];

  
    function eteindreLumières() {
        lumières.forEach(lumière => {
            lumière.style.opacity = 0.2;
            lumière.classList.add('etat-eteint');
        });
    }

    function allumerLumière(index) {
        eteindreLumières();
        lumières[index].style.opacity = 1;
        lumières[index].classList.remove('etat-eteint'); 
    }

    
    document.getElementById('btn-rouge').addEventListener('click', function() {
        allumerLumière(0); 
    });

    document.getElementById('btn-orange').addEventListener('click', function() {
        allumerLumière(1);  
    });

    document.getElementById('btn-vert').addEventListener('click', function() {
        allumerLumière(2);  
    });
});
