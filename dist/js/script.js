const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector("nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    headerA.classList.toggle("active");
});

const faqinfoAccordion = document.querySelectorAll(".faq__infos");
faqinfoAccordion.forEach((accordions) => {
    accordions.addEventListener("click", ()=>{
        accordions.classList.toggle("active");
    });
});


const faqsLinks = document.querySelectorAll(".faq__links");
const faqsContent = document.querySelectorAll(".faq__block");
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

 




