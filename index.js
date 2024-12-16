//11
const paragraphs = document.getElementsByTagName("p");
if (paragraphs.length > 4) {
    paragraphs[4].textContent = "Это новый день текст";
}

// 12
function showMessage(message) {
    console.log(message);
}
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);

    if (element) {

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector("h1");
    if (h1) {
        if (utmTerm) {
            h1.textContent = utmTerm;
        } else {
            h1.textContent = "Добро пожаловать на наш сайт!";
        }
    }
}

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

showMessage("Скрипт загружен!");

logCurrentTime();

document.addEventListener("DOMContentLoaded", function () {
    resetBackgroundColor();
    changeBackgroundColor("papayawhip");

    toggleVisibility(".content");

    updateH1FromURL();
});

//13
const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    alert("Вы кликнули на заголовок - так держать!"); 
});



// Найдем элемент по ID
const studentPhoto = document.querySelector("#student-photo img");

// Добавляем эффект увеличения при наведении мыши
studentPhoto.addEventListener("mouseover", () => {
    studentPhoto.style.transform = "scale(1.1)";
    studentPhoto.style.transition = "transform 0.3s"; // плавный переход
});

// Уменьшаем обратно при уходе мыши
studentPhoto.addEventListener("mouseout", () => {
    studentPhoto.style.transform = "scale(1)";
});

studentPhoto.addEventListener("click", () => {
    // Проверяем текущий путь и переключаем изображение
    if (studentPhoto.src.includes("glavnaya.jpg")) {
        studentPhoto.src = "foto/Love.jpg"; // Укажите путь к новой фотографии
    } else {
        studentPhoto.src = "foto/glavnaya.jpg"; // Возвращаем оригинальное фото
    }
});

