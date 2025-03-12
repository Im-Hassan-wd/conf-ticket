// elements
const form = document.querySelector("form");
const section = document.querySelector("section");
const uploadText = document.querySelector(".upload");
const upload = document.querySelector("input#avatar");
const uploadMsg = document.querySelector("small span");

let ticketID = "CCT-" + Math.floor(Math.random() * 100000);

// functions
function handleSubmit(e) {
  e.preventDefault();

  // fields
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const github = form.github.value.trim();
  const avatarURL = form.avatar.files[0];

  // Read image as Base64
  let reader = new FileReader();

  reader.onload = function () {
    localStorage.setItem("ticketImage", reader.result); // Store image in Local Storage

    // Redirect with data in URL
    let url = `ticket.html?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&github=${encodeURIComponent(
      github
    )}&ticketID=${ticketID}`;

    window.location.href = url;
  };
  reader.readAsDataURL(avatarURL);
}

// event listeners
form.addEventListener("submit", (e) => {
  handleSubmit(e);
});
upload.addEventListener("change", () => {
  const avatar = form.avatar.files[0];
  if (avatar) {
    uploadText.textContent = avatar.name;
    return;
  } else {
    uploadMsg.textContent = "Please upload your photo.";
    return;
  }
});
