document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = this[0].value;
    const email = this[1].value;
    const message = this[2].value;

    alert(`Спасибо, ${name}! Ваше сообщение отправлено.`); // Исправлено использование шаблонных строк
    
    // Сброс формы
    this.reset();
});

// Анимация прокрутки
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

const startDate = new Date('2024-08-01'); // Укажите дату начала общения
const counterDiv = document.getElementById('counter');
const daysTogetherElement = document.getElementById('daysTogether');
const showCounterLink = document.getElementById('showCounter');
const closeCounterButton = document.getElementById('closeCounter');

function updateCounter() {
    const today = new Date();
    const timeDiff = today - startDate; // Разница во времени
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Переводим в дни
    daysTogetherElement.textContent = `Мы вместе уже ${daysTogether} дней`; // Исправлено использование шаблонных строк
}

showCounterLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    counterDiv.style.display = 'block'; // Показываем панель
    updateCounter(); // Обновляем счетчик

    // Устанавливаем обновление счетчика на следующий день
    const now = new Date();
    const nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeUntilNextUpdate = nextUpdate - now;

    setTimeout(function() {
        updateCounter();
        setInterval(updateCounter, 1000 * 60 * 60 * 24); // Обновляем каждый день после первого обновления
    }, timeUntilNextUpdate);
});

closeCounterButton.addEventListener('click', function() {
    counterDiv.style.display = 'none'; // Скрываем панель
});
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "block";
    modalImg.src = img.src; // Устанавливаем источник изображения в модальном окне
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Скрываем модальное окно
}