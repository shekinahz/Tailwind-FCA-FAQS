const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector("nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    headerA.classList.toggle("active");
});

const faqinfo = document.querySelectorAll(".faq__infos");
faqinfo.forEach((infos) => {
    infos.addEventListener("click", ()=>{
        infos.classList.toggle("active");
    });
});


const faqsLinks = document.querySelectorAll(".faq__links");
const faqsContent = document.querySelectorAll(".faq__content");
faqsLinks.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaqs();
    faq.classList.add("active");
    const activeContent = document.querySelector(`#${faq.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveContent() {
  faqsLinks.forEach((content) => {
    content.classList.remove("active");
  });
};

function removeActiveContent() {
  faqsContent.forEach((content) => {
    content.classList.remove("active");
  });
};

 




