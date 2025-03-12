const getTicketName = document.querySelector(".get-ticket .name");
const getTicketEmail = document.querySelector(".get-ticket .email");
const ticketName = document.querySelector(".ticket .name");
const ticketGithub = document.querySelector(".ticket .github");
const ticketId = document.querySelector(".ticket .id");
const ticketAvatar = document.querySelector(".ticket .avatar");

function getQueryParams() {
  let params = new URLSearchParams(window.location.search);

  return {
    name: params.get("name"),
    email: params.get("email"),
    github: params.get("github"),
    ticketID: params.get("ticketID"),
  };
}

function generateTicket() {
  const data = getQueryParams();
  let avatarURL = localStorage.getItem("ticketImage");

  getTicketName.textContent = data.name;
  getTicketEmail.textContent = data.email;
  ticketName.textContent = data.name;
  ticketGithub.textContent = data.github;
  ticketId.textContent = data.ticketID;

  // Retrieve and display image
  if (avatarURL) ticketAvatar.src = avatarURL;
}

function downloadTicket() {
  const button = document.querySelector(".download");
  const ticket = document.querySelector(".ticket");

  button.addEventListener("click", function () {
    html2canvas(ticket).then(() => {
      let link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "ticket.png";
      link.click();
    });
  });
}
generateTicket();
