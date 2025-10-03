/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/
function iconButton(btnText, btnColor, iconClass) {
  let button_element = document.createElement('button');
  let i_element = document.createElement('i');
  let text_element = document.createTextNode(btnText);

  button_element.setAttribute('class', 'btn btn-' + btnColor);
  i_element.setAttribute('class', iconClass);

  button_element.appendChild(i_element);
  button_element.appendChild(text_element);

  return button_element;
}

document
  .querySelector('div#icon-buttons')
  .appendChild(iconButton('Aç', 'blue', 'fa fa-folder-open'));
document
  .querySelector('div#icon-buttons')
  .appendChild(iconButton('Düzenle', 'orange', 'fa fa-pen'));
document
  .querySelector('div#icon-buttons')
  .appendChild(iconButton('Sil', 'red', 'fa fa-trash'));
