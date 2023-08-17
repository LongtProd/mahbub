//bootstrapStyle()
async function bootstrapStyle(){
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'vendor/bootstrap/css/bootstrap.min.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}

async function fontawesomeStyle(){
    await bootstrapStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'assets/css/fontawesome.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}
async function templatemoStyle(){
    await fontawesomeStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'assets/css/templatemo-574-mexant.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}

async function owlStyle(){
    await templatemoStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var surl = 'assets/css/owl.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}

async function swiperStyle(){
    await owlStyle()
    return new Promise((resolve, reject) => {
    var link = document.createElement('link');
    var link = document.createElement('link');
    var surl = 'https://unpkg.com/swiper@7/swiper-bundle.min.css';
    link.href = surl;
    link.rel="stylesheet"
    resolve(document.head.appendChild(link))
    });
}

async function appfScript(){
    await swiperStyle()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'appf.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

appfScript();