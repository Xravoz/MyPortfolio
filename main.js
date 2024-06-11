document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".s");
  element.style.animationPlayState = "running";
});


const counters = document.querySelectorAll(".count");
const speed = 200;

// The code to start the animation is now wrapped in a function
const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = Number(counter.getAttribute("data-target"));
      const count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Call the startCounters function to initiate the animation

// On the first scroll in this window, call the function to start the counters
window.addEventListener("scroll", startCounters, {
  once: true,
});



function reveal() {
  var reveals = document.querySelectorAll(".services");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

 let switcherlist = document.querySelectorAll(".tap li");
let imgs = Array.from(document.images);

switcherlist.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImages);

});

function removeActive() {
    switcherlist.forEach((li) => {
        li.classList.remove("actives");
        this.classList.add("actives");
    });
};

function manageImages(){
    imgs.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((element) => {
        element.style.display = "block";
    });
};







const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});




 document.addEventListener("DOMContentLoaded", function () {
   document.body.classList.add("loading"); // تفعيل الخاصية التي تعطل التفاعل مع الصفحة
   setTimeout(function () {
     document.getElementById("loading").style.display = "none";
     document.body.classList.remove("loading"); // إلغاء تفعيل الخاصية بعد انتهاء التحميل
   }, 3000); // 5000 مللي ثانية تعادل خمس ثوانٍ
 });