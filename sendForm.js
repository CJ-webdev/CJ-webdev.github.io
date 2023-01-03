function sendMail() {
  e.preventDefault();
  let params = {
    name: document.getElementById("user-name").value,
    tel: document.getElementById("user-tel").value,
    email: document.getElementById("user-email").value,
    adress: document.getElementById("user-adress").value,
    message: document.getElementById("user-message").value,
  };

  const serviceID = "service_71elrfl";
  const templateID = "template_6vsclip";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("user-name").value = "";
      document.getElementById("user-tel").value = "";
      document.getElementById("user-email").value = "";
      document.getElementById("user-adress").value = "";
      document.getElementById("user-message").value = "";
      console.log(res);
      alert("Votre message a bien etait envoyée");
    })
    .catch((err) => console.log(err));
}
