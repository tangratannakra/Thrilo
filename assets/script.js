const wrapper = document.getElementById('content');
const cta = document.getElementById('cta');

cta.addEventListener('click', scrollContent );

window.onload = function(){
    setTimeout(() => scrollContent(), 5000);
}


function scrollContent() {
    wrapper.scrollIntoView({behavior: "smooth", inline: "nearest"});
}