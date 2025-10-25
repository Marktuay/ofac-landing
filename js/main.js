document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple validation
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const company = form.company.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            status.style.display = 'block';
            status.style.color = '#e74c3c';
            status.innerText = 'Por favor completa los campos obligatorios.';
            return;
        }

        // Construir mailto:
        const to = 'contacto@regucheck.com';
        const subject = encodeURIComponent(`Contacto desde sitio - ${name}`);
        let body = `Nombre: ${name}%0D%0AEmail: ${email}`;
        if (company) body += `%0D%0AEmpresa: ${company}`;
        body += `%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(message)}`;

        const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

        // Abrir cliente de correo
        window.location.href = mailto;

        status.style.display = 'block';
        status.style.color = '#1abc9c';
        status.innerText = 'Se abrió tu cliente de correo. Si no sucede nada, usa el botón "Enviar por email".';

        form.reset();
    });
});