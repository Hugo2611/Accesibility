document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageElement = document.getElementById('message');
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();

    if (nom !== '' && prenom !== '') {
        messageElement.textContent = 'Votre message a été envoyé avec succès !';
        messageElement.classList.remove('hidden');
        messageElement.classList.add('success');

        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    } else {
        messageElement.textContent = 'Veuillez remplir les champs obligatoires.';
        messageElement.classList.remove('hidden');
        messageElement.classList.add('error');
    }
});
