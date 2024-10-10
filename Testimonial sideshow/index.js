const testimonial = [
    {
        name: "Michael E",
        photoUrl:
         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I am grateful for the amazing products that Apple has brought into my life."
    },
    {
        name: "June B",
        photoUrl:
         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fdb8MHxwag90by1wYWdlfHx8fgvufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what grat service, I love it! Appple impressed me on multiple levels.",
    },
    {
        name: "Clark K",
        photoUrl:
         "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best",
    },
];

const imgEl = document.querySelector('img')
const textEL = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];
    imgEl.src =photoUrl;
    textEL.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonial.length) {
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)
}