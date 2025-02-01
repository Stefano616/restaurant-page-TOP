export function contactBuilder(contentDiv) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("contact__title", "section-title");
  contactTitle.textContent = "contacts";

  const phone = document.createElement("p");
  phone.classList.add("contact__details", "contact-phone");
  phone.textContent = "Phone: +48 123 456 789";

  const email = document.createElement("p");
  email.classList.add("contact__details", "contact-email");
  email.textContent = "Email: notrealemail@gmail.com";

  const addressDiv = document.createElement("div");
  addressDiv.classList.add("contact__details", "contact-address");

  const addressInfo = ["Address:", "Really fancy road 16", "XX-XXX", "Italy"];
  addressInfo.map((info, index) => {
    const infoLine = document.createElement("p");
    infoLine.classList.add(`contact-address__line${index}`);
    infoLine.textContent = info;
    addressDiv.appendChild(infoLine);
  });

  contactDiv.append(contactTitle, phone, email, addressDiv);

  contentDiv.appendChild(contactDiv);
}
