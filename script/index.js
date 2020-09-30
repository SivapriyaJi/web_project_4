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
const imagePopupCloseButton = imageModalWindow.querySelector('.popup__close');

//other DOM elements
const form = document.querySelector('.popup__form');


// profile
const profileName = document.querySelector('.profile__heading');
const profileDesc = document.querySelector('.profile__subheading');


// form inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputDesc = document.querySelector('.popup__input_type_desc');


  /* ~~~code from livecoding~~~*/
  function togglePopup(modal) {
    popup.classList.toggle('popup_is-open');
  }

 /*editButton.addEventListener('click', () => {
    editProfileModalWindow.classList.add('popup_is-open')
  });*/

  editButton.addEventListener('click', () => {
    togglePopup(editProfileModalWindow);
  });

 closeButton.addEventListener('click', () => {
    togglePopup(editProfileModalWindow);
  });

  /*closeButton.addEventListener('click', () => {
    editProfileModalWindow.classList.remove('popup_is-open')
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


/*addCardModalButton.addEventListener('click', () => {
    addCardModalWindow.classList.add('popup_is-open')
  });*/

  addCardModalButton.addEventListener('click', () => {
    togglePopup(addCardModalWindow)
  });

 /* closeAddCardModalButton.addEventListener('click', () => {
    addCardModalWindow.classList.remove('popup_is-open')
  });*/

  closeAddCardModalButton.addEventListener('click', () => {
    togglePopup(addCardModalWindow)
  });


/* ~~~~~~const popup = document.querySelector('.popup');  this should be deleted, just put back to test*/
/*Original togglepopup code
function togglePopup() {
  popup.classList.toggle('popup_is-open');

  if (popup.classList.
    contains('popup_is-open')) {
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
  })*/

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
     togglePopup(imageModalWindow)
     //imageModalWindow.classList.add('popup_is-open')
    })

   /* imagePopupCloseButton.addEventListener('click', () => {
      imageModalWindow.classList.remove('popup_is-open')
    })*/

    list.prepend(cardElement);
  });
