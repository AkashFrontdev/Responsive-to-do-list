var company = document.querySelector(".company");
var job = document.querySelector(".job");
var salary = document.querySelector(".salary");
var elBtn = document.querySelector(".btn");
var cardHeader = document.querySelector(".card-header");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var cardHead = document.querySelector(".cardHead");
var cardTitle = document.querySelector(".cardTitle");
var cardSalary = document.querySelector(".cardSalary");
var card2 = document.querySelector(".card2");
var multiCard = document.querySelector(".card-multiple");

elBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (company.value == "" && job.value == "" && salary.value == "") {
    alert("Please, fill in the blanks");
  } else {
    var card = document.createElement("div");
    for (let i = 0; i < card.length; i++) {
      const element = card[i];
      return element;
    }

    card.style.width = "18rem";
    card.style.height = "8rem";
    card.style.border = "1px solid gray";
    card.style.borderRadius = "5px";
    card.style.marginTop = "15px";

    var textH3 = document.createElement("h6");
    textH3.style.width = "18rem";
    textH3.style.fontWeight = "bold";
    textH3.style.paddingLeft = "1rem";
    textH3.style.padding = "10px";
    textH3.style.border = "1px solid gray";
    textH3.style.borderTopRightRadius = "5px";
    textH3.style.backgroundColor = "rgb(242, 242, 242)";
    textH3.innerHTML = job.value.trim();
    card.appendChild(textH3);
    job.value = "";

    var textH5 = document.createElement("h5");
    textH5.innerHTML = `<b>Company:</b> ${company.value.trim()}`;
    textH5.style.paddingLeft = "1rem";
    textH5.style.paddingTop = "1rem";
    card.appendChild(textH5);
    company.value = "";

    var textH6 = document.createElement("h6");
    textH6.innerHTML = `<b>Salary:</b> ${salary.value.trim()}`;
    textH6.style.paddingLeft = "1rem";
    card.appendChild(textH6);

    multiCard.appendChild(card);
    salary.value = "";

//     console.log(card);
//     console.log(multiCard);
  }
});
