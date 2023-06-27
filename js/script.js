// Обратная связь
const phoneLink = document.getElementById("phone-link");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");

phoneLink.addEventListener("click", function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

close.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

// Модальное окно с 6 вопросами
document.addEventListener("DOMContentLoaded", function () {
  const btnPrice = document.querySelector(".btn-price");
  const modals = document.querySelectorAll(".modal");
  const nextButtons = document.querySelectorAll(".next");
  const backButtons = document.querySelectorAll(".back");
  const startOverButton = document.querySelector(".start-over");
  const closeButton = document.querySelectorAll(".close");

  btnPrice.addEventListener("click", function (event) {
    event.preventDefault();
    modals[0].style.display = "block";
  });

  nextButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      modals[index].style.display = "none";
      modals[index + 1].style.display = "block";
    });
  });

  backButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      modals[index + 1].style.display = "none";
      modals[index].style.display = "block";
    });
  });

  startOverButton.addEventListener("click", function (event) {
    event.preventDefault();
    modals.forEach(function (modal) {
      modal.style.display = "none";
    });
    modals[0].style.display = "block";
  });

  closeButton.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      modals.forEach(function (modal) {
        modal.style.display = "none";
      });
    });
  });
});

// Выбор размера помещения
const sizeItems = document.querySelectorAll(".modal1-list li");
const arrows = document.querySelectorAll(".toparrow, .rightarrow");

function handleSizeClick(event) {
  sizeItems.forEach(function (item) {
    item.classList.remove("active");
  });

  arrows.forEach(function (arrow) {
    arrow.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
  event.currentTarget.querySelector(".toparrow").classList.add("active");
  event.currentTarget.querySelector(".rightarrow").classList.add("active");
}

sizeItems.forEach(function (item) {
  item.addEventListener("click", handleSizeClick);
});

// Выбор дизайна квартиры
const designItems = document.querySelectorAll(".modal2-list .moDAL2-item");
function handleDesignClick(event) {
  const currentItem = event.currentTarget;
  // Проверка, содержит ли текущий элемент класс "selected"
  const isSelected = currentItem.classList.contains("selected");
  // Если текущий элемент уже выбран, просто выходим из функции
  if (isSelected) {
    return;
  }
  // Удаление класса "selected" у всех элементов списка дизайнов
  designItems.forEach(function (item) {
    item.classList.remove("selected");
  });
  // Добавление класса "selected" к выбранному элементу
  currentItem.classList.add("selected");
}
// Добавление обработчика события клика ко всем элементам списка дизайнов
designItems.forEach(function (item) {
  item.addEventListener("click", handleDesignClick);
});

// Выбор даты начала работы
const paragraphs = document.querySelectorAll(".modal3-text p");
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    // Удаляем класс 'active' у всех параграфов
    paragraphs.forEach((p) => {
      p.classList.remove("active");
    });
    // Добавляем класс 'active' к нажатому параграфу
    paragraph.classList.add("active");
  });
});

// Раскрытие 6 блоков
const showMoreBtn = document.getElementById("show-more-btn");
const projectsBlocks = document.querySelectorAll(".projects-block");
const updateIcon = document.querySelector("#show-more-btn img");

const visibleBlocks = 6;
const totalBlocks = projectsBlocks.length;

// Скрыть все блоки изначально
projectsBlocks.forEach((block) => {
  block.classList.add("hide");
});

// Показать видимые блоки
for (let i = 0; i < visibleBlocks; i++) {
  projectsBlocks[i].classList.remove("hide");
}

showMoreBtn.addEventListener("click", function () {
  // Проверяем, скрыты ли блоки
  const isHidden = projectsBlocks[visibleBlocks].classList.contains("hide");

  if (isHidden) {
    // Показать скрытые блоки
    for (let i = visibleBlocks; i < visibleBlocks + 6; i++) {
      projectsBlocks[i].classList.remove("hide");
    }
    // Изменить текст кнопки
    showMoreBtn.textContent = "Скрыть проекты";
  } else {
    // Скрыть показанные блоки
    for (let i = visibleBlocks; i < visibleBlocks + 6; i++) {
      projectsBlocks[i].classList.add("hide");
    }

    // Изменить текст кнопки
    showMoreBtn.textContent = "Еще проекты";

    // Фокусировка на начале блока
    projectsBlocks[0].scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Бургер
const navMenu = document.querySelector(".nav__menu");
const menuItems = document.querySelector(".menu-items");
const headerBlock = document.querySelector(".header-block");

navMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav__menu--active");
  menuItems.classList.toggle("show");
  headerBlock.classList.toggle("hide");
});

// Прокрутка вверх
const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
