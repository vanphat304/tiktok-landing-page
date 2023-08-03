$(".input100").each(function () {
  $(this).on("blur", function () {
    if ($(this).val().trim() != "") {
      $(this).addClass("has-val");
    } else {
      $(this).removeClass("has-val");
    }
  });
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 670) {
    $("#resiter-sticky").removeClass("hidden");
      $("#resiter-sticky").addClass("mobile");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#resiter-sticky").removeClass("mobile");
     $("#resiter-sticky").addClass("hidden");
  }
});

function getId(id) {
  return document.getElementById(id);
}

function resetForm() {
  getId("fullName").value = "";
  getId("email").value = "";
  getId("phoneNumber").value = "";
  getId("note").value = "";
}

function reset() {
  getId("buttonrest").click();
  getId('loadMe').click()

  // window.location.href = "/tiktok-landing-page#payment";
  window.location.reload()
  // window.location.;
}

async function validate() {
  let invalid = false;
  if (getId("fullName").value == "") {
    getId("errorFullName").style.display = "block";
    getId("fullName").focus();
    invalid = true;
  } else {
    getId("errorFullName").style.display = "none";
  }
  if (getId("email").value == "") {
    getId("errorEmail").style.display = "block";
    invalid = true;
  } else {
    getId("errorEmail").style.display = "none";
  }
  if (getId("phoneNumber").value == "") {
    getId("errorPhoneNumber").style.display = "block";
    invalid = true;
  } else {
    getId("errorPhoneNumber").style.display = "none";
  }
  if (getId("job").value == "") {
    getId("errorJob").style.display = "block";
    invalid = true;
  } else {
    getId("errorJob").style.display = "none";
  }


  
  if (invalid) {
    return false;
  } else {
    getId("button-submit").disabled = true;
    getId('loadMe').click()
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();


    let result = await registerLiveStream({
      "SỐ ĐIỆN THOẠI": getId("phoneNumber").value,
      "HỌ TÊN": getId("fullName").value,
      EMAIL: getId("email").value,
      "KHÓ KHĂN": getId("note").value,
      "SẢN PHẨM ĐANG BÁN": getId("job").value,
      "NGÀY ĐĂNG KÝ": `${day}/${month}/${year} ${hour}:${minute}`,
    });
    if (result.status == 201) {
      resetForm();
      getId("buttonrest").click();
    }
  }
}

let mybutton = document.getElementById("btn-back-to-top");

console.log(mybutton);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("contextmenu", e => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

const swiperEl = document.getElementById('swiper-coaching');
Object.assign(swiperEl, {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 1800,
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();





const swiperEl3 = document.getElementById('swiper-list');
Object.assign(swiperEl3, {
  slidesPerView: 2,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1110: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1248: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    
    1320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1730: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
swiperEl3.initialize();



// const swiperEl2 = document.getElementById('swiper-intro');
// Object.assign(swiperEl2, {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   pagination: {
//     clickable: true,
//   },
//   // autoplay: {
//     // delay: 2200,
//   // },
//   breakpoints: {
//     340: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     440: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     540: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });


// swiperEl2.initialize();