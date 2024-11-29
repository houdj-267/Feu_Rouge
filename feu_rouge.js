
document.addEventListener("DOMContentLoaded", function() {
    let currentLight = -1; // Aucune lumière allumée au départ

    const lumières = [
        document.getElementById('feu-rouge'),
        document.getElementById('feu-orange'),
        document.getElementById('feu-vert')
    ];

  
    function eteindreLumières() {
        lumières.forEach(lumière => {
            lumière.style.opacity = 0.2;
            lumière.classList.add('etat-eteint'); // Applique la classe pour les feux éteints
        });
    }

    // Fonction pour allumer une lumière spécifique
    function allumerLumière(index) {
        // Éteindre toutes les lumières avant d'allumer celle sélectionnée
        eteindreLumières();
        lumières[index].style.opacity = 1;
        lumières[index].classList.remove('etat-eteint'); // Retirer la classe des feux allumés
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
