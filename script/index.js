const editButton = document.querySelector('.profile__button_edit');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

function togglePopup() {
  popup.classList.toggle('popup_is-open');
  }

  editButton.addEventListener('click', togglePopup)
  closeButton.addEventListener('click', togglePopup)


 form.addEventListener('submit', (e) =>  {
    e.preventDefault();

    const inputName = document.querySelector('.popup__input_type_name');
    const inputDesc = document.querySelector('.popup__input_type_desc');

    const profileName = document.querySelector('.profile__heading');
    const profileDesc = document.querySelector('.profile__subheading');

    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;

    togglePopup();

  })
