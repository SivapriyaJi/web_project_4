// wrappers
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const imageModalWindow = document.querySelector('.popup_type_image');

// open buttons
const editButton = document.querySelector('.profile__edit-btn');
const addCardModalButton = document.querySelector('.profile__add-btn');

// close buttons
const closeButton = editProfileModalWindow.querySelector('.popup__close-button');
const closeAddCardModalButton = addCardModalWindow.querySelector('.popup__close-button');
const imagePopupCloseButton = imageModalWindow.querySelector('.popup__image-close-btn');

//other DOM elements
const form = document.querySelector('.popup__form');


// profile
const profileName = document.querySelector('.profile__heading');
const profileDesc = document.querySelector('.profile__subheading');


// form inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputDesc = document.querySelector('.popup__input_type_desc');

function togglePopup(modal) {
    modal.classList.toggle('popup_is-open');
  }

 /*editButton.addEventListener('click', () => {
    editProfileModalWindow.classList.add('popup_is-open')
    //togglePopup(editProfileModalWindow)
    console.log("hello");
  });*/

  /*editButton.addEventListener('click', () => {
    editProfileModalWindow.classList.add('popup_is-open')
    //togglePopup(editProfileModalWindow)
  });*/



  function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;

    togglePopup(editProfileModalWindow);
  };

  form.addEventListener('submit', formSubmitHandler);
    editButton.addEventListener('click', () => {
      if (editProfileModalWindow.classList.contains('popup_is-open')) {
        inputName.value = profileName.textContent;
        inputDesc.value = profileDesc.textContent;
  }
    togglePopup(editProfileModalWindow);
  });

  closeButton.addEventListener('click', () => {
    //editProfileModalWindow.classList.remove('popup_is-open')
     togglePopup(editProfileModalWindow)
  });

addCardModalButton.addEventListener('click', () => {
    //addCardModalWindow.classList.add('popup_is-open')
    togglePopup(addCardModalWindow)
  });

  closeAddCardModalButton.addEventListener('click', () => {
    //addCardModalWindow.classList.remove('popup_is-open')
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

  const cardTemplate = document.querySelector(".card-template").content.querySelector(".elements__card");
  const list = document.querySelector(".elements__grid");

  initialCards.forEach(data => {

    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__heading");
    const cardLikeButton = cardElement.querySelector(".elements__like-btn");
    const cardDeleteButton = cardElement.querySelector(".elements__delete-btn");

    cardTitle.textContent = data.name;
    cardImage.src = data.link;

    /*card.LikeButton.addEventListener('click', () => {
      //changeLikeState()
    })

    cardDeleteButton.addEventListener('click', () => {
      //handleCardDeleteClick()
    })*/

    cardImage.addEventListener('click', () => {
      const popupImage = imageModalWindow.querySelector('.popup__image');
      const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

      popupImage.src = data.link;
      popupImageTitle.textContent = data.name;

      togglePopup(imageModalWindow)
     //imageModalWindow.classList.add('popup_is-open')
    })

    list.prepend(cardElement);
  });

  imagePopupCloseButton.addEventListener('click', () => {
    //addCardModalWindow.classList.remove('popup_is-open')
    togglePopup(imageModalWindow)
  });
