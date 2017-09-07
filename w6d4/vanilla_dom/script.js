document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const handleFavorite = (event) => {
    event.preventDefault();
    const favoriteInput = document.querySelector(".favorite-input");
    const favorite = favoriteInput.value;
    favoriteInput.value = "";
    const newListLi = document.createElement("li");
    newListLi.textcontent = favorite;
    const favoritesList = document.getElementById("sf-places");
    favoritesList.appendChild(newListLi);
  };
  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleFavorite);

  // adding new photos
  const showPhoto = (event) => {
    const photoForm =  document.querySelector(".photo-form-container");
    if (photoForm.className === "photo-form-container") {
      photoForm.className = "photo-form-container hidden";
    }
    else {
      photoForm.className = "photo-form-container";
    }
  };
  const photoFormButton = document.querySelector(".photo-show-button");
  photoFormButton.addEventListener("click", showPhotoForm);
  }
});
