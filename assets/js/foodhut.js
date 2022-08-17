/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

new WOW().init();

function initMap() {
  var uluru = { lat: 37.227837, lng: -95.700513 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

let flag = true;

document.querySelectorAll(".arabic").forEach((item) => {
  item.style.display = "none";
});

document.getElementById("arabic_button").addEventListener("click", function () {
  flag = !flag;
  if (flag === false) {
    document.querySelectorAll(".english").forEach((item) => {
      item.style.display = "none";
    });
    document.querySelectorAll(".arabic").forEach((item) => {
      item.style.display = "block";
    });

    // for the evaluations
    document.querySelectorAll(".count-box").forEach((item) => {
      item.classList.remove("count-box");
      item.classList.add("count-box2");
    });

    // for the info
    document.querySelectorAll(".info").forEach((item) => {
      item.classList.remove("info");
      item.classList.add("info2");
    });

    // for the navbar
    document.getElementById("the_collapse").setAttribute("dir", "rtl");
  } else {
    document.querySelectorAll(".english").forEach((item) => {
      item.style.display = "block";
    });
    document.querySelectorAll(".arabic").forEach((item) => {
      item.style.display = "none";
    });
    // for the evaluations
    document.querySelectorAll(".count-box2").forEach((item) => {
      item.classList.remove("count-box2");
      item.classList.add("count-box");
    });

    // for the info
    document.querySelectorAll(".info").forEach((item) => {
      item.classList.remove("info2");
      item.classList.add("info");
    });

    // for the navbar
    document.getElementById("the_collapse").setAttribute("dir", "ltr");
  }
});

document
  .getElementById("english_button")
  .addEventListener("click", function () {
    flag = !flag;
    if (flag === false) {
      document.querySelectorAll(".english").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll(".arabic").forEach((item) => {
        item.style.display = "block";
      });

      // for the evaluations
      document.querySelectorAll(".count-box").forEach((item) => {
        item.classList.remove("count-box");
        item.classList.add("count-box2");
      });

      // for the info
      document.querySelectorAll(".info").forEach((item) => {
        item.classList.remove("info");
        item.classList.add("info2");
      });

      // for the navbar
      document.getElementById("the_collapse").setAttribute("dir", "rtl");
    } else {
      document.querySelectorAll(".english").forEach((item) => {
        item.style.display = "block";
      });
      document.querySelectorAll(".arabic").forEach((item) => {
        item.style.display = "none";
      });
      // for the evaluations
      document.querySelectorAll(".count-box2").forEach((item) => {
        item.classList.remove("count-box2");
        item.classList.add("count-box");
      });

      // for the info
      document.querySelectorAll(".info").forEach((item) => {
        item.classList.remove("info2");
        item.classList.add("info");
      });

      // for the navbar
      document.getElementById("the_collapse").setAttribute("dir", "ltr");
    }
  });
