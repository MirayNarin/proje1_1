function card(imgURL, header, paragraph, navigationURL) {
  let div_element = document.createElement("div");
  let img_element = document.createElement("img");
  let h2_element = document.createElement("h2");
  let hr_element = document.createElement("hr");
  let div_sub_element = document.createElement("div");
  let p_element = document.createElement("p");
  let a_element = document.createElement("a");

  div_element.setAttribute("class", "card");
  img_element.setAttribute("src", imgURL);
  div_sub_element.setAttribute("class", "card-content");
  a_element.setAttribute("href", navigationURL);

  h2_element.textContent = header;
  p_element.textContent = paragraph;
  a_element.textContent = "Devamı...";

  div_sub_element.appendChild(p_element);
  div_sub_element.appendChild(a_element);

  div_element.appendChild(img_element);
  div_element.appendChild(h2_element);
  div_element.appendChild(hr_element);
  div_element.appendChild(div_sub_element);

  return div_element;
}

const cardDataList = [
  {
    imgURL: "https://i.ibb.co/W3hCdQt/js.png",
    header: "1. Giriş: Dinamik İçerik ve JavaScript",
    paragraph:
      "Web teknolojilerindeki gelişmelerle birlikte, kullanıcılarla etkileşimi artırmak ve daha zengin deneyimler sunmak için dinamik içerik kullanımı giderek yaygınlaşıyor. Bu bağlamda, JavaScript (JS) dili, tarayıcı tabanlı uygulamalarda dinamik içerik oluşturmak için güçlü bir araç olarak öne çıkıyor.",
    navigationURL:
      "https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi",
  },
  {
    imgURL: "https://i.ibb.co/pxym76z/dom.png",
    header: "2. Temel JavaScript Fonksiyonları ve DOM Manipülasyonu",
    paragraph:
      "JavaScript, tarayıcı üzerindeki Document Object Model (DOM) üzerinde güçlü bir kontrol sağlar. JS kullanılarak, sayfanın HTML yapısı üzerinde değişiklik yapabilir ve bu sayede içeriği dinamik olarak güncelleyebiliriz. Örneğin, createElement ve appendChild gibi fonksiyonlarla yeni HTML öğeleri oluşturabilir ve sayfa içine ekleyebiliriz.",
    navigationURL:
      "https://medium.com/@kahil_kubilay/doma-hakim-olma-702de9c0a0d0",
  },
  {
    imgURL: "https://i.ibb.co/8mfvnf4/ajax.png",
    header: "3. Ajax Teknolojisi ile Asenkron İçerik Yükleme",
    paragraph:
      "JavaScript, Asenkron JavaScript ve XML (Ajax) teknolojisi aracılığıyla sayfayı yenilemeden arka planda veri alışverişi yapma imkanı sunar. Bu sayede, kullanıcılar sayfa içinde gezinirken, arka planda yeni veriler çekilebilir ve sayfa içeriği anlık olarak güncellenebilir.",
    navigationURL:
      "https://medium.com/@cagla.aslantas1/web-geli%C5%9Ftirmede-bir-devrim-ajax-ile-dinamik-i%CC%87%C3%A7erik-y%C3%BCkleme-f59b040be5f9",
  },
  {
    imgURL: "https://i.ibb.co/6t26v2v/css.jpg",
    header: "4. Görsel İçerik Yönetimi: CSS ve Animasyonlar",
    paragraph:
      "Dinamik içerik oluşturmanın yanı sıra, JavaScript ile CSS stil özelliklerini de değiştirebiliriz. Bu, kullanıcı etkileşimlerini artırmak için önemlidir. Örneğin, bir butona tıklandığında arka plandaki renk değişimi veya bir öğenin yavaşça kaybolması gibi animasyonlar ekleyerek kullanıcı deneyimini zenginleştirebiliriz.",
    navigationURL: "https://www.kodkampusu.com/css-animasyonlar/",
  },
  {
    imgURL: "https://i.ibb.co/3NWj2x7/user-experience.jpg",
    header: "5. Güvenlik İpuçları ve Sonuç: Kullanıcı Deneyimini Artırma",
    paragraph:
      "Dinamik içerik oluştururken, güvenlik önlemlerini ihmal etmemek önemlidir. Kullanıcı girişlerini doğrulama, güvenliği sağlama ve tarayıcı uyumluluğunu gözetme gibi konulara dikkat ederek, JavaScript ile dinamik içerik oluşturarak kullanıcı deneyimini önemli ölçüde artırabiliriz. Bu sayede, modern web uygulamalarında daha etkileşimli ve çekici içerikler sunabiliriz.",
    navigationURL:
      "https://www.kukumav.net/blog/web-site-kullanici-deneyimi-iyilestirme/",
  },
];
for (let i = 0; i < cardDataList.length; i++) {
  document
    .querySelector("div.container")
    .appendChild(
      card(
        cardDataList[i].imgURL,
        cardDataList[i].header,
        cardDataList[i].paragraph,
        cardDataList[i].navigationURL
      )
    );
}
