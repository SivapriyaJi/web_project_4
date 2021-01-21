// wrappers
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const imageModalWindow = document.querySelector('.popup_type_image');

// open buttons
const editProfileButton = document.querySelector('.profile__edit-btn');
const addCardModalButton = document.querySelector('.profile__add-btn');

// close buttons
const closeButton = editProfileModalWindow.querySelector('.popup__close-button');
const closeAddCardModalButton = addCardModalWindow.querySelector('.popup__close-button');
const imagePopupCloseButton = imageModalWindow.querySelector('.popup__image-close-btn');

//other DOM elements
const form = document.querySelector('.popup__form_profile');

// profile
const profileName = document.querySelector('.profile__heading');
const profileDesc = document.querySelector('.profile__subheading');

// form inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputDesc = document.querySelector('.popup__input_type_desc');
const inputCardTitle = addCardModalWindow.querySelector('.popup__input_type_card-title');
const inputCardLink = addCardModalWindow.querySelector('.popup__input_type_url');

//card
const cardLikeButton = document.querySelector('.elements__like-btn');
const addCardSubmitButton = addCardModalWindow.querySelector('.popup__submit-button');
const cardTitle = addCardModalWindow.querySelector('.popup__input_type_card-title');
const cardLink = addCardModalWindow.querySelector('.popup__input_type_url');
const cardTemplate = document.querySelector(".card-template").content.querySelector(".elements__card");
const list = document.querySelector(".elements__grid");

//popup image
const popupImage = imageModalWindow.querySelector('.popup__image');
const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');


//resets placeholder text for edit profile form
function prepareEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
}

//toggles class for modals
function togglePopup(modal) {
  modal.classList.toggle('popup_is-open');
}

//profile form submit handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  togglePopup(editProfileModalWindow);
}

//Submit form
form.addEventListener('submit', handleProfileFormSubmit);

//Open form
editProfileButton.addEventListener('click', () => {
  prepareEditProfilePopup();
  togglePopup(editProfileModalWindow);
  form.reset();
  });

closeButton.addEventListener('click', () => {
  togglePopup(editProfileModalWindow);
});

addCardModalButton.addEventListener('click', () => {
  //prepareAddCardPopup();
  togglePopup(addCardModalWindow);
  addCardModalWindow.reset();
});

closeAddCardModalButton.addEventListener('click', () => {
  togglePopup(addCardModalWindow)
});


const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

function createCard(data) {
  // here we do everything required for creating a card 
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__img");
  const cardTitle = cardElement.querySelector(".elements__heading");
  const cardLikeButton = cardElement.querySelector(".elements__like-btn");
  const cardDeleteButton = cardElement.querySelector(".elements__delete-btn");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  function toggleLike() {
    cardLikeButton.classList.toggle('elements__like-btn_active');
    }

  cardLikeButton.addEventListener('click', () => {
    toggleLike();
    });

  cardDeleteButton.addEventListener('click', () => {
    cardElement.remove();
    });

  cardImage.addEventListener('click', () => {
    popupImage.src = data.link;
    popupImageTitle.textContent = data.name;
    popupImage.alt = data.name;
    togglePopup(imageModalWindow)
    })

    list.prepend(cardElement);

    //return cardElement;
  }

  imagePopupCloseButton.addEventListener('click', () => {
    togglePopup(imageModalWindow)
    });

  initialCards.forEach(data => {
    createCard(data);
    //list.prepend(cardElement);    
  }); // we use the function above for each of the initial cards
  
   

  addCardSubmitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createCard({name: inputCardTitle.value, link: inputCardLink.value});
    togglePopup(addCardModalWindow);
  })
/*
  initialCards.forEach(data => createCard(data)); // we use the function above for each of the initial cards

  addCardSubmitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createCard({name: inputCardTitle.value, link: inputCardLink.value});
   // list.prepend(cardElement);
    togglePopup(addCardModalWindow);
  })*/
