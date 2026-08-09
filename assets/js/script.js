const img_DA = [
    "https://i.pinimg.com/1200x/45/2e/55/452e5522cacdeb270aa39db3cfc453bd.jpg",
    "https://i.pinimg.com/736x/b2/98/12/b2981216cdd73fcae472f0cfd4776c81.jpg",
    "https://i.pinimg.com/736x/94/31/76/943176da35110100097e4709359ddcbd.jpg",
    "https://i.pinimg.com/736x/49/91/c4/4991c4dd01dac9de48652ff8615b5816.jpg",
    "https://i.pinimg.com/736x/45/fa/97/45fa972cc9d1d7b1967f91a38fc2f542.jpg",
    "https://i.pinimg.com/736x/d9/fb/8b/d9fb8b637892c260b1946bf535c97f40.jpg",
    "https://i.pinimg.com/736x/79/f3/34/79f334691108ec347a11cbe3ad20ad85.jpg",
    "https://i.pinimg.com/736x/41/f0/dd/41f0dd5c19c2417f4ae266a63de70388.jpg",
    "https://i.pinimg.com/736x/b5/b0/dd/b5b0dd3e37bbd6907a775bc6af86a8a0.jpg",
    "https://i.pinimg.com/736x/96/c6/56/96c656972b3e1b432d95cb3fa3913d30.jpg",
    "https://i.pinimg.com/736x/d2/1a/7a/d21a7ab263df3185eb1139234fed859e.jpg",
    "https://i.pinimg.com/736x/01/ab/f1/01abf1588460839882b01bf7072f1b83.jpg",
    
];

const digitalSingle = document.getElementById("digitalSingle");

img_DA.forEach(src => {
    const div = document.createElement("div");
    div.className = "img-album";

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img);
    digitalSingle.appendChild(div);
});

const img_MA = [
    "https://i.pinimg.com/736x/49/73/cc/4973cc5f6435db5d11182c1353a8c36f.jpg",
    "https://i.pinimg.com/736x/ba/12/d3/ba12d3169e307d375ea31606d804323a.jpg",
    "https://i.pinimg.com/736x/1b/65/7b/1b657b2f089c5f99e5674989643bada8.jpg",
    
];

const miniAlbum = document.getElementById("miniAlbum");

img_MA.forEach(src => {
    const div = document.createElement("div");
    div.className="img-album";

    const img= document.createElement("img");
    img.src= src;

    div.appendChild(img);
    miniAlbum.appendChild(div)
});


const img_SA = [
    "https://i.pinimg.com/736x/1c/f8/0c/1cf80c56b475b6d19321558eeddb822b.jpg",
    "https://i.pinimg.com/736x/24/a1/f9/24a1f9b5a5b4917beae4113859f4afd8.jpg",
    "https://i.pinimg.com/736x/4c/16/b0/4c16b0d8a58c02fab58631f196de5406.jpg",
    "https://i.pinimg.com/736x/90/5f/b6/905fb6340590201124e3778855e39533.jpg",
];

const winterAlbum = document.getElementById("winterAlbum");

img_SA.forEach(src => {
    const div = document.createElement("div");
    div.className="img-album";

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img);
    winterAlbum.appendChild(div);
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        }
    });
});

document.querySelectorAll('.hidden-scroll').forEach(el => observer.observe(el));

//"https://i.pinimg.com/736x/0b/2c/86/0b2c86f30a36aad1595d13f5db0a8475.jpg",
//"https://i.pinimg.com/736x/4b/e0/44/4be044e7b63a317bb7a257263192b32f.jpg",
//"https://i.pinimg.com/736x/00/36/14/003614cfbe4fc1c3e9200e1ceba402c2.jpg",
//"https://i.pinimg.com/736x/ee/b5/57/eeb5578b8605f85940959495545ef80a.jpg",
//"https://i.pinimg.com/736x/29/6e/5d/296e5d393583b47cb364a2a5adee08c4.jpg",
//"https://i.pinimg.com/736x/e5/46/59/e546592a9ee9a2e5f56a2ffd2add4513.jpg" 
//"https://i.pinimg.com/736x/1c/f8/0c/1cf80c56b475b6d19321558eeddb822b.jpg", what is love