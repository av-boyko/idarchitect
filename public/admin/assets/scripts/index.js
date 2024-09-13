function loginButton() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const submitBtn = document.getElementById("submitBtn");

  // Если поля пустые, блокируем кнопку, иначе разблокируем
  if (login.trim() === "" || password.trim() === "") {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

// МОДАЛЬНОЕ ОКНО

const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

if (modal) {
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      event.preventDefault();
      modal.showPopover(); // Используем showPopover для открытия модального окна
      overlay.style.display = "block"; // Показываем затемнение фона
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.hidePopover(); // Используем hidePopover для закрытия модального окна
    overlay.style.display = "none"; // Скрываем затемнение фона
  });

  overlay.addEventListener("click", () => {
    modal.hidePopover();
    overlay.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.matches(":popover-open")) {
      modal.hidePopover();
      overlay.style.display = "none";
    }
  });
}

// КОМПОНЕНТ ЗАГРУЗКИ ФАЙЛОВ

document.querySelectorAll(".file-upload-component").forEach((component) => {
  const fileInput = component.querySelector(".file-input");
  const fileList = component.querySelector(".file-list");
  let filesArray = [];

  // Добавление файлов в список
  fileInput.addEventListener("change", () => {
    filesArray = [];
    fileList.innerHTML = "";

    for (let file of fileInput.files) {
      addFileToList(file);
    }
  });

  function addFileToList(file) {
    // Добавление файла в массив
    filesArray.push({ file, isFavorite: false });

    const listItem = document.createElement("li");
    listItem.classList.add("file-item");

    const fileName = document.createElement("span");
    fileName.textContent = file.name + ' ( ' + formatBytes(file.size, 2) + ' )' ;
    fileName.classList.add("file-name");
    listItem.appendChild(fileName);

    fileList.appendChild(listItem);
  }

  function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 B'
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['B', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
});

document
    .querySelectorAll('.file-uploaded__remove input[type="checkbox"]')
    .forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const fileUploaded = this.closest(".file-uploaded");
            if (this.checked) {
                fileUploaded.classList.add("is-deleted");
            } else {
                fileUploaded.classList.remove("is-deleted");
            }
        });
    });
