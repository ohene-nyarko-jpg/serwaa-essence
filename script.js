   function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.getElementById('hamburger');
        navLinks.classList.toggle('open');


        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('open')) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }


    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('open');
            document.getElementById('hamburger').querySelectorAll('span').forEach(s => {
                s.style.transform = '';
                s.style.opacity = '';
            });
        });
    });
    function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
        successMsg.style.display = 'block';
    }
    event.target.reset();
}
