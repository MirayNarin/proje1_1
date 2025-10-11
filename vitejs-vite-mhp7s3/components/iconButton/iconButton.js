function iconButton(btnText, btnColor, iconClass) {
  let button_element = document.createElement("button");
  let i_element = document.createElement("i");
  let text_element = document.createTextNode(btnText);

  button_element.setAttribute("class", "btn btn-" + btnColor);
  i_element.setAttribute("class", iconClass);

  button_element.appendChild(i_element);
  button_element.appendChild(text_element);

  return button_element;
}

document
  .querySelector("div#icon-buttons")
  .appendChild(iconButton("Aç", "blue", "fa fa-folder-open"));
document
  .querySelector("div#icon-buttons")
  .appendChild(iconButton("Düzenle", "orange", "fa fa-pen"));
document
  .querySelector("div#icon-buttons")
  .appendChild(iconButton("Sil", "red", "fa fa-trash"));
