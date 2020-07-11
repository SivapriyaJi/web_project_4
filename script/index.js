const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

const inputName = document.querySelector('.popup__input_type_name');
const inputDesc = document.querySelector('.popup__input_type_desc');

const profileName = document.querySelector('.profile__heading');
const profileDesc = document.querySelector('.profile__subheading');

function togglePopup() {
  popup.classList.toggle('popup_is-open');

  if (popup.classList.contains('popup_is-open')) {
    inputName.value = profileName.textContent;
    inputDesc.value = profileDesc.textContent;
    }
  }

editButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

 form.addEventListener('submit', (e) =>  {
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;

    togglePopup();

  })
