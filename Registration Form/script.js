let submitBtn = document.getElementById("Submit");

const info = {
  student_name: "",
  email: "",
  Website: "",
  url: "",
  gender: "",
  skillArr: [],
};

const getData = () => {
  info.student_name = document.getElementById("name").value;
  info.email = document.getElementById("email").value;
  info.Website = document.getElementById("Website").value;
  info.url = document.getElementById("url").value;
  info.gender = document.querySelector(
    'input[name="male-female"]:checked'
  ).value;
  let skills = document.querySelectorAll(".checkbox:checked");

  info.skillArr = [];
  skills.forEach((item) => {
    info.skillArr.push(item.value);
  });

  if (localStorage.getItem("infoSection") === null) {
    infoItem = [];
  } else {
    infoItem = JSON.parse(localStorage.getItem("infoSection"));
  }
  infoItem.push(info);
  localStorage.setItem("infoSection", JSON.stringify(infoItem));
};

const showData = () => {
  let cardContainer = document.getElementById("cardContainer");

  let cards = "";

  let getLocalStorage = localStorage.getItem("infoSection");

  if (getLocalStorage === null) {
    console.log("null");
  } else {
    cardDivArr = JSON.parse(getLocalStorage);

    cardDivArr.forEach((item, index) => {
      cards += `<div class="card">
            <img src=${item.url} alt="Profile Picture">
            <div class="info">
                <p><strong>Name</strong> : ${item.student_name}</p>
                <p><strong>Email</strong> : ${item.email}</p>
                <p><strong>Website</strong> :${item.Website}</p>
                <p><strong>Gender</strong> : ${item.gender}</p>
                <p><strong>Skills</strong> : ${item.skillArr.join(", ")}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
    });
  }
  cardContainer.innerHTML = cards;
};

const deleteData = (index) => {
  let getList = JSON.parse(localStorage.getItem("infoSection"));
  getList.splice(index, 1);

  localStorage.setItem("infoSection", JSON.stringify(getList));
  window.location.reload();
};

showData();

submitBtn.addEventListener("click", () => {
  getData();
  showData();
});