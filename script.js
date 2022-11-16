const catImgEl = document.querySelector('.cat-img');
const circle = document.querySelector('.circle');

async function fetchCatImage(url) {


    try {
        circle.classList.add('active');
        const res = await fetch(url);
        const data = await res.json();
        const imgSrc = data[0].url;
        catImgEl.src = imgSrc;
        circle.classList.remove('active');
        
    } catch (err) {
        console.log(err);
    }
}

window.addEventListener('load', ()=>{
    fetchCatImage('https://api.thecatapi.com/v1/images/search');
})

