let menu = async () => {
  let menu = "";
  try {
    let data = await axios("http://localhost:3000/menu");
    console.log(data);
    let result = await data.data;
    console.log(result);
    menu = result.map((eleman) => {
      return `
            <li   class=" li-link p-3 list-unstyled text-light 
            <a href="${eleman.href}" id="li_hover" class="text-header"  >${eleman.link}</a>
            </li>
            `;
    });
    document.querySelector(".menu-list").innerHTML = menu.join("");
  } catch (error) {
    console.log(error);
  }
};
menu();
const login = document.getElementById("box-login");
const p = document.createElement("p");
p.innerText = "CATEGORIES";
document.querySelector("#box-login").appendChild(p);
p.style.margin = "0px";
p.style.textAlign = "center";
p.style.lineHeight = "60px";
p.style.color = "white";
p.style.fontFamily = "fire-sans";
login.classList.add("box-login");

const hover = document.getElementById("hover-slide");
const a1 = document.createElement("a");
a1.innerText = "tisherts product";
a1.style.color = "black";
a1.style.margin = "0px 15px";
a1.style.fontFamily = "fire-sans";
a1.style.display = "block";
a1.style.fontSize = "20px";
document.querySelector(".hover-slide").appendChild(a1);
const a2 = document.createElement("a");
a2.innerText = "shoes product";
a2.style.color = "black";
a2.style.margin = "25px 15px";
a2.style.fontFamily = "fire-sans";
a2.style.display = "block";
a2.style.fontSize = "20px";
document.querySelector(".hover-slide").appendChild(a2);
const a3 = document.createElement("a");
a3.innerText = "jeans product";
a3.style.color = "black";
a3.style.margin = "25px 15px";
a3.style.fontFamily = "fire-sans";
a3.style.display = "block";
a3.style.fontSize = "20px";
document.querySelector(".hover-slide").appendChild(a3);
const a4 = document.createElement("a");
a4.innerText = "short product";
a4.style.color = "black";
a4.style.margin = "25px 15px";
a4.style.fontFamily = "fire-sans";
a4.style.display = "block";
a4.style.fontSize = "20px";
document.querySelector(".hover-slide").appendChild(a4);
const a5 = document.createElement("a");
a5.innerText = "coat product";
a5.style.color = "black";
a5.style.margin = "25px 15px";
a5.style.fontFamily = "fire-sans";
a5.style.display = "block";
a5.style.fontSize = "20px";
document.querySelector(".hover-slide").appendChild(a5);
hover.classList.add("hover-slide");
const parenthover = document.getElementById("parent-hover");

parenthover.addEventListener("mouseenter", () => {
  hover.style.display = "inline-block";
});

parenthover.addEventListener("click", () => {
  hover.style.display = "none";
});
window.addEventListener("DOMContentLoaded", () => {
  hover.style.display = "none";
});
// tmain.style.background='linear-gradient(135deg ,#0f2027, #203a43 , #2c4364 )'
// tmain.style.color='white'

let product = async () => {
  let product = "";
  try {
    let data = await axios("http://localhost:3000/product");
    console.log(data);
    let result = await data.data;
    console.log(result);
    product = result.map((eleman) => {
      return `

          <div class=" card cart m-0 d-flex flex-column justify-content-center align-items-center ">
            <img src="${eleman.image}"  class="card-image-top image" id="image-1"  alt=""/>
            <h3 class="text-name card-title text-light ">${eleman.name}</h3>
            <h4 class="text-price text-light ">${eleman.price}</h4>
            <h5 class="text-color text-light ">${eleman.color}</h5>
            <p class="text-about card-text m-0 text-light ">${eleman.about}</p>
            <div class="login-box bg-success rounded">
            <a href="${eleman.href}" class="text-light p-login">${eleman.login}</a>
            </div>
          </div>
    
            `;
    });
    document.querySelector(".carts").innerHTML = product.join("");
  } catch (error) {
    console.log(error);
  }
};
product();

let offer = async () => {
  let offer = "";
  try {
    let data = await axios("http://localhost:3000/offer");
    console.log(data);
    let result = await data.data;
    console.log(result);
    offer = result.map((offer) => {
      return `
  
     <div class="parentcard">
     <div class="card  flex-shrink-0" data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="2000">

      <div class="card-body p-0 d-flex justify-content-center align-items-center flex-column" >
      <img src="${offer.image}" alt="" class=" total-image"  style="width: 100px;" "/>
      <h5 class="card-title cartname">${offer.cartname}</h5>
      <div class="sale d-flex ">
      <p class="card-text">${offer.pricee}</p>
      </div>
      <p class="saleprice">${offer.saleprice}</p>
      <button type="button" class="btn bg-success " ><a>${offer.about}</a></button>
      </div>

      <div class="card-back d-flex justify-content-center flex-column align-items-center">
        <p class="lorem">${offer.lorem}</p>
        <button type="button" class="btn bg-success " ><a href="${offer.href}">${offer.buy}</a></button>
      </div>
      </div>
      </div>

    
            `;
    });
    document.querySelector("#offer").innerHTML = offer.join("");
  } catch (error) {
    console.log(error);
  }
};
offer();

let endtime = localStorage.getItem("endtime");
if(!endtime){
  endtime = new Date().getTime() + 2 * 60 * 60 * 1000
  localStorage.setItem("endtime" , endtime)
}else{
endtime = parseInt(endtime)
}
function updateTimer() {
  let now = new Date().getTime();
  let distance = endtime - now;
  if ( distance <= 0) {
    document.getElementById("timer").innerHTML = "تخفیف تمام شد!";
    clearInterval(timerInterval);
    localStorage.removeItem("endtime");
    return;
  }

  let hours = Math.floor(( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor(( distance % (1000 * 60 * 60)) / (1000 * 60));
  let seccond = Math.floor(( distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("secconds").innerText = String(seccond).padStart(
    2,
    "0"
  );
}

let timerInterval = setInterval(updateTimer, 1000);
updateTimer();

const search = document.getElementById("search");
const aseom = document.getElementById("aseom_search");
aseom.addEventListener("mouseenter", () => {
  search.style.display = "block";
});
aseom.addEventListener("click", () => {
  search.style.display = "none";
});
window.addEventListener("DOMContentLoaded", () => {
  search.style.display = "none";
});

const slider = document.getElementById("offer");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.style.cursor = "grabbing";
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

function addComment() {
  let input = document.getElementById("comment_input");
  let commentText = input.value.trim();

  if (commentText !== "") {
    // ایجاد یک div جدید برای کامنت

    let div = document.createElement("div");
    div.classList.add("parent_comment");

    let pdiv = document.createElement("div");
    pdiv.style.width = "90px";
    pdiv.style.height = "90px";
    pdiv.style.display = "flex";
    pdiv.style.flexDirection = "column";
    pdiv.style.justifyContent = "center";
    pdiv.style.alignItems = "center";
    pdiv.style.flexShrink = "0";
    pdiv.style.backgroundColor = "rgba(255, 255, 255, 0.216)";
    pdiv.style.borderRadius = "50%";
    pdiv.style.flexShrink = "0";
    let i = document.createElement("i");
    i.classList = "fa-regular fa-user";
    i.style.color = "white";
    i.style.fontSize = "50px";
    i.style.margin = "34px auto";
    i.style.display = "block";
    // اضافه کردن به لیست کامنت‌ها
    pdiv.appendChild(i);
    let newComment = document.createElement("div");
    newComment.classList.add("text_box4");
    newComment.textContent = commentText;
    div.appendChild(pdiv);
    div.appendChild(newComment);

    document.querySelector("#comments-list").appendChild(div);

    // document.getElementById("comments-list").appendChild(newComment);
    // document.getElementById("comments-list").appendChild(pdiv);

    input.value = "";
  } else {
    alert("لطفاً یک متن وارد کنید!");
  }
}
let input = document.getElementById("comment_input");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    addComment();
  }
});
