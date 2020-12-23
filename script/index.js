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
const inputCardTitle = addCardModalWindow.querySelector('.popup__input_type_card-title');
const inputCardLink = addCardModalWindow.querySelector('.popup__input_type_url');


//card
const cardLikeButton = document.querySelector('.elements__like-btn');
const addCardSubmitButton = addCardModalWindow.querySelector('.popup__submit-button');

const cardTitle = addCardModalWindow.querySelector('.popup__input_type_card-title');
const cardLink = addCardModalWindow.querySelector('.popup__input_type_url');

function togglePopup(modal) {
    modal.classList.toggle('popup_is-open');

  if (editProfileModalWindow.classList.contains('popup_is-open')) {
    inputName.value = profileName.textContent;
    inputDesc.value = profileDesc.textContent;
    }

  /*if (addCardModalWindow.classList.contains('popup_is-open')) {
    inputName.value = profileName.textContent;
    inputDesc.value = profileDesc.textContent;
    }*/
}

//profile form submit handler
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
     togglePopup(editProfileModalWindow);
  });

addCardModalButton.addEventListener('click', () => {
    //addCardModalWindow.classList.add('popup_is-open')
    togglePopup(addCardModalWindow);
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

    function toggleLike() {
      cardLikeButton.classList.toggle('elements__like-btn_active');
    };

    cardLikeButton.addEventListener('click', () => {
      toggleLike();
    });

    cardDeleteButton.addEventListener('click', () => {
      cardElement.remove();
    });

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
    togglePopup(imageModalWindow)
  });

  //add card handler
/*const newCard = document.querySelector(".card-template"); .content.querySelector(".elements__card");*/

/* add card code to be deleted~~~~
form.addEventListener('submit', formSubmitHandler);
addCardSubmitButton.addEventListener('click', () => {
  if (addCardModalWindow.classList.contains('popup_is-open')) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__heading");
    const cardLikeButton = cardElement.querySelector(".elements__like-btn");
    const cardDeleteButton = cardElement.querySelector(".elements__delete-btn");
    cardTitle.textContent = inputCardTitle.value;
    cardLink.src = inputCardLink.value;
    }
  togglePopup(addCardModalWindow);
  //list.prepend(cardElement);
//});*/
addCardSubmitButton.addEventListener('click', () => {
      // this line a little bit unclear, are you sure you're getting here relevant fields from your popup?
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__heading");
    const cardLikeButton = cardElement.querySelector(".elements__like-btn");
    const cardDeleteButton = cardElement.querySelector(".elements__delete-btn");

      // you're setting your fields for already prepended element
      cardTitle.textContent = inputCardTitle.value;
      //cardLink.src = inputCardLink.value;
      cardImage.src = inputCardLink.value;

     //cardTitle.textContent = data.name;
     //cardImage.src = data.link;

     function toggleLike() {
       cardLikeButton.classList.toggle('elements__like-btn_active');
     };

     cardLikeButton.addEventListener('click', () => {
       toggleLike();
     });

     cardDeleteButton.addEventListener('click', () => {
       cardElement.remove();
     });

    // you're prepending your list, here everything seems to be fine
    list.prepend(cardElement);


  togglePopup(addCardModalWindow);
});

/* this is the one I'm trying to make work
form.addEventListener('submit', formSubmitHandler);
addCardSubmitButton.addEventListener('click', () => {
function createCard(card){
  const cardElement = cardTemplate.cloneNode(true)
  const link = 'url(' + card.link + ')'
  const cardImage = cardElement.querySelector(".elements__img")
  cardImage.style.backgroundImage = link
  cardElement.querySelector(".elements__heading").textContent = card.name
  cardElement.querySelector(".elements__like-btn").addEventListener("click", likeImage)
  cardImage.addEventListener("click", popUpImage)
  cardElement.querySelector(".elements__delete-btn").addEventListener("click", deleteImage)
  places.prepend(cardElement)
}
createCard(card);
});*/






/*  <template class="card-template">
    <li class="elements__card">
      <button class ="elements__delete-btn" type="button"></button>
      <img alt="" src="" class="elements__img">
       <!-- <div style="" class="elements__img"></div>-->
      <div class="elements__description">
        <h2 class="elements__heading"></h2>
        <button class ="elements__like-btn" type="button"></button>
      </div>
    </li>
  </template>*/


