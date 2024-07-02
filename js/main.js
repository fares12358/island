let Dom1 = `

<p class="text-light py-3 fw-bold fs-2 txt-shadow">islands</p>
<h1 class="text-light py-3 fw-bold txt-shadow">Bali</h1>
<p class="text-light  fs-4 fw-bold txt-shadow">it is an indonesian island known and beautiful for
    its lush active volcanic mountains</p>
<div class="main-btn btn btn-primary fs-5 px-4  mt-5 text-light txt-shadow">Explore <span
        class="ps-4  "><i class="fa-solid fa-arrow-right"></i></span>
</div>

`;

let Dom2 = `

<p class="text-light py-3 fw-bold fs-2 txt-shadow">islands</p>
<h1 class="text-light py-3 fw-bold txt-shadow ">Bora Bora</h1>
<p class="text-light  fs-4 fw-bold txt-shadow">Small South Pacific island northwest of Tahiti in
    French Polynesia, surrounded by motus.</p>
<div class="main-btn btn btn-primary fs-5 px-4  mt-5 text-light txt-shadow">Explore <span
        class="ps-4  "><i class="fa-solid fa-arrow-right"></i></span></div>


`;

let Dom3 = `

<p class="text-light py-3 fw-bold fs-2 txt-shadow">islands</p>
<h1 class="text-light py-3 fw-bold txt-shadow ">Palawan</h1>
<p class="text-light  fs-4 fw-bold txt-shadow">Also known as La Paragua, it is the largest island in
    the province of Palawan.</p>
<div class="main-btn btn btn-primary fs-5 px-4  mt-5 text-light txt-shadow">Explore <span
        class="ps-4  "><i class="fa-solid fa-arrow-right"></i></span></div>
`;

let body = document.querySelector('body .main');

let content = document.querySelector(".text-holder");

let imgSwap = document.querySelectorAll(".swap-img .swap-bg div");

let vdiPlay=document.querySelector('.vdi-holder');
let pop=document.querySelector('.pop');
let popCloser=document.querySelector('.close-pop');

vdiPlay.onclick=function(){
    pop.style.display="flex";
    vdiPlay.style.display="none";
}

popCloser.onclick=function(){
    pop.style.display="none";
    vdiPlay.style.display="flex";

}


imgSwap.forEach((ele) => {
    ele.onclick = function () {
        imgSwap.forEach((e) => {
            e.style.transform = "scale(0.9)";
        })
        ele.style.transform = "scale(1)";

        if (ele === imgSwap[0]) {
            body.classList.remove("bg-2");
            body.classList.remove("bg-3");
            body.classList.add("bg-1");
            content.innerHTML=Dom1;
        }
        else if (ele === imgSwap[1]) {
            body.classList.remove("bg-1");
            body.classList.remove("bg-3");
            body.classList.add("bg-2");
            content.innerHTML=Dom2;

        }
        else if(ele === imgSwap[2])
        {
            body.classList.remove("bg-1");
            body.classList.remove("bg-2");
            body.classList.add("bg-3");
            content.innerHTML=Dom3;

        }
    }
})

