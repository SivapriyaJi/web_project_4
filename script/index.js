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


  initialCards.forEach(data => {
    const cardTemplate = document.querySelector(".card-template").content.querySelector(".elements__card");
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__heading");
    const cardLikeButton = cardElement.querySelector(".elements__like-btn");
    const cardDeleteButton = cardElement.querySelector(".elements__delete-btn");

    cardTitle.textContent = data.name;
    //cardImage.style.backgroundImage = "url($(data.link)";
    cardImage.src = data.link;

    const list = document.querySelector(".elements__grid");

    list.prepend(cardElement);
  });
