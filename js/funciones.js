
const mockup = document.querySelector('.mockup');
const images = [
    'src/login.png',
    'src/MenuPrincipalPaciente.png',
    'src/ConsultaMedicosPaciente.png',
    'src/AgendarCitaMedico.png',
    'src/EncontrarCentro.png',
    'src/ConsultaMedicamentos.png'
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mockup.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

emailjs.init('dMEs7wIzOklbxRa4Q');

const feedbackForm = document.querySelector('#feedback form');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value || 'Anónimo';
    const utilidadRadios = document.querySelectorAll('input[name="utilidad"]:checked');
    
    if (utilidadRadios.length === 0) {
        alert('Por favor selecciona una opción de utilidad.');
        return;
    }
    
    const utilidad = utilidadRadios[0].value;
    const gusto = document.getElementById('gusto').value;
    const mejora = document.getElementById('mejora').value;
    const funciones = document.getElementById('funciones').value;

    const feedbackData = {
        nombre: nombre,
        utilidad: utilidad,
        gusto: gusto,
        mejora: mejora,
        funciones: funciones
    };

    
    emailjs.send('service_dmraxpj', 'template_e78cnb5', feedbackData)
        .then(function(response) {
            console.log('Feedback enviado con éxito:', response);
            alert('Gracias por tu retroalimentación!');
        }, function(error) {
            console.error('Error al enviar feedback:', error);
            alert('Hubo un problema al enviar tu retroalimentación. Intenta nuevamente.');
        });
});


const betaForm = document.querySelector('#cta form');

betaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    emailjs.send('service_dmraxpj', 'template_e78cnb5', { email: email })
        .then(function(response) {
            console.log('Correo de beta enviado:', response);
            alert('Gracias por tu interés! Te avisaremos cuando la beta esté lista.');
        }, function(error) {
            console.error('Error al enviar correo de beta:', error);
            alert('Hubo un problema al registrar tu correo para la beta.');
        });
});


setInterval(changeImage, 5000);
changeImage(); 

document.getElementById('y').textContent = new Date().getFullYear();
