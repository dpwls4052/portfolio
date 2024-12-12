const modals = document.querySelectorAll(".modal");
const kkpc = document.getElementById("Kkpc");
const hyundai = document.getElementById("Hyundai");
const hyundaisteel = document.getElementById("Hyundaisteel");
const gangWha = document.getElementById("GangWha");
const mize = document.getElementById("Mize");
const gwedu = document.getElementById("Gwedu");

function kkpcModal() {
  kkpc.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
}
function hyundaiModal() {
  hyundai.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
  const video = hyundai.querySelector("video");
    if (video) {
      video.currentTime = 0; // 비디오 시작 위치 초기화
      video.play(); // 비디오 재생
    }
}
function hyundaisteelModal() {
  hyundaisteel.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
  const video = hyundaisteel.querySelector("video");
    if (video){
      video.currentTime = 0;
      video.play();
    }
}
function gangWhaModal() {
  gangWha.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
}
function mizeModal() {
  mize.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
}
function gweduModal() {
  gwedu.style.display = "flex";
  document.body.style.overflow = "hidden"; // 스크롤 방지
  const video = gwedu.querySelector("video");
    if (video) {
      video.currentTime = 0; // 비디오 시작 위치 초기화
      video.play(); // 비디오 재생
    }
}

function closeModal(modal) {
  modal.style.display = "none";
  document.body.style.overflow = ""; // 배경 스크롤 복원
  const video = modal.querySelector("video");
    if (video) {
      video.pause(); // 비디오 일시 정지
      video.currentTime = 0; // 비디오 시작 위치 초기화
    }
}

// 모달 외부 클릭 및 Esc 키 이벤트
modals.forEach((modal) => {
  // 모달 외부 클릭 시 모달 닫기
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      // 모달 전체를 감지하되 컨테이너 외부 클릭만 닫기
      closeModal(modal);
    }
  });

  // Esc 키 눌렀을 때 모달 닫기
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal(modal);
    }
  });
});

// 버튼 클릭 시 맨 위로 이동
function topBtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  // .main 섹션 처리
  const mainSection = document.querySelector(".main");
  const mainTop = mainSection.getBoundingClientRect().top;
  const mainBottom = mainSection.getBoundingClientRect().bottom;
  const topbtn = document.querySelector(".top_btn");

  if (mainTop <= windowHeight * 0.8 && mainBottom >= 0) {
    topbtn.style.display = "none"; // .main 영역 안에서는 버튼 숨김
  } else {
    topbtn.style.display = "block"; // .main 영역 밖에서는 버튼 표시
  }

  // .about 섹션 처리
  const aboutSection = document.querySelector(".about");
  const aboutTop = aboutSection.getBoundingClientRect().top;
  const aboutA = document.querySelector(".about_a");

  if (aboutTop <= windowHeight * 0.8) {
    aboutSection.classList.add("about_view");
    aboutA.classList.add("on");
  } else {
    aboutA.classList.remove("on");
  }
  
   // .portfolio 섹션 처리
  const portfolioSection = document.querySelector(".portfolio");
  const portfolioTop = portfolioSection.getBoundingClientRect().top;
  const portfolioA = document.querySelector(".portfolio_a");

  if (portfolioTop <= windowHeight * 0.8) {
    portfolioA.classList.add("on");
    aboutA.classList.remove("on");
  } else {
    portfolioA.classList.remove("on");
  }

  // .contact 섹션 처리
  const contactSection = document.querySelector(".contact");
  const contactTop = contactSection.getBoundingClientRect().top;
  const contactA = document.querySelector(".contact_a");

  if (contactTop <= windowHeight * 0.8) {
    contactSection.classList.add("contact_view");
    contactA.classList.add("on");
    aboutA.classList.remove("on");
    portfolioA.classList.remove("on");
  } else {
    contactA.classList.remove("on");
  }
});

function isModalOn(index) {
  return modals[index].style.display === "flex";
}

// 스크롤 감지
window.onload = function(){
const elm = document.querySelectorAll('.section');
const elmCount = elm.length;
elm.forEach(function(item, index){
  item.addEventListener('mousewheel', function(event){
    
    let checkModal=false;
    modals.forEach((modal, i) => {
    if (isModalOn(i)) {
      checkModal = true;
    }
  });
    
  if(!checkModal){
  
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
      } 
      else if (event.detail)
          delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      // wheel up : move to previous section
      else{
        if (elmSelector !== 0){
          try{
            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
  }
  
});
});
}