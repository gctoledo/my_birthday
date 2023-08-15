const buttons = document.querySelectorAll('[data-nav-button]');
let birthDate = new Date("May 13, 2024 19:00:00");
const birthTimeStamp = birthDate.getTime();
const confirmButton = document.getElementById('confirming');
const nameInput = document.getElementById('name');
const formButtons = document.querySelectorAll('.button');

document.addEventListener('DOMContentLoaded', function() {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.navButton;
            const tab = document.querySelector(`[data-nav-tab = ${tabTarget}]`);
            hiddenSections();
            tab.classList.add('section--active');
        });
    }

    confirmButton.addEventListener('click', function() {
        document.querySelector('.container').classList.add('container--blur');
        document.getElementById('confirm-tab').style.display = 'block';
    });

    const timeCounter = setInterval(function() {
        const now = new Date();
        const nowTimeStamp = now.getTime();
    
        const difTime = birthTimeStamp - nowTimeStamp;
    
        const dayInMs = 1000 * 60 * 60 * 24;
        const hourInMS = 1000 * 60 * 60;
        const minInMS = 1000 * 60;
    
        const daysLeft = Math.floor(difTime / dayInMs);
        const hoursLeft = Math.floor((difTime % dayInMs / hourInMS));
        const minLeft = Math.floor((difTime % hourInMS / minInMS));
        const secLeft = Math.floor((difTime % minInMS) / 1000);
    
        document.getElementById('counter').innerHTML = `${daysLeft}d ${hoursLeft}h ${minLeft}m ${secLeft}s`
    
        if (difTime < 0) {
            clearInterval(timeCounter);
            document.getElementById('counter').innerHTML = '';
            document.getElementById('remaining').innerHTML = 'Evento expirado!<br />Volte no próximo ano.';
        }
    }, 1000);

        formButtons[0].addEventListener('click', function() {
            document.querySelector('.container').classList.remove('container--blur');
            document.getElementById('confirm-tab').style.display = 'none';
            nameInput.value = '';
        })
        
        formButtons[1].addEventListener('click', function() {
            if (nameInput.value == '') {
                alert('Preencha o campo!')
            } else {
                document.querySelector('.container').classList.remove('container--blur');
                document.getElementById('confirm-tab').style.display = 'none';
                nameInput.value = '';
            }
        })

        document.getElementById('hamb-menu').addEventListener('click', function() {
            const navMenu = document.getElementById('nav');
            if(navMenu.style.display !== 'none') {
                navMenu.style.display = 'none'
            } else {
                navMenu.style.display = 'block'
            };
        })
})

function hiddenSections() {
    const tabs = document.querySelectorAll('[data-nav-tab]');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('section--active');
    }
}

