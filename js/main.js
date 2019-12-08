const show_more = document.querySelector('.show-more');
const show_less = document.querySelector('.show-less')
const show_all = document.querySelector('.show-all')
const row=document.querySelector('.row');
const hidden_section = document.querySelector('.sec-3');
const button_projects = document.querySelector('#button-projects');

$(window).load(function() {
    // When the page has loaded
    $("body").fadeIn(1700);
});

function show_projects(){
    row.style.height= 'unset';
    show_more.style.display = 'none';
    show_all.style.display = 'none';
    hidden_section.classList.remove('section-overflow');
}

button_projects.addEventListener('click',()=>{
    show_projects();
})

show_more.addEventListener('click', () => {
    show_projects();
})

show_all.addEventListener('click', () => {
   show_projects();
})


show_less.addEventListener('click', () => {
    row.style.height= '0'
    show_all.style.display = 'block';
    hidden_section.classList.add('section-overflow');
})



