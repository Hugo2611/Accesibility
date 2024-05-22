document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageElement = document.getElementById('message');
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const numeroRue = document.getElementById('numero_rue').value.trim();
    const codePostal = document.getElementById('code_postal').value.trim();
    const ville = document.getElementById('ville').value.trim();
    const telephone = document.getElementById('téléphone').value.trim();

    if (nom !== '' && prenom !== '' && numeroRue !== '' && codePostal !== '' && ville !== '') {
        messageElement.textContent = 'Votre message a été envoyé avec succès !';
        messageElement.classList.remove('hidden');
        messageElement.classList.add('success');

        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1000);
    } 
});