bootstrapStyle()


function bootstrapStyle(){
    var link = document.createElement('link');
    var surl = 'vendor/bootstrap/css/bootstrap.min.css';
    link.href = surl;
    link.rel="stylesheet"
    document.head.appendChild(link);
    fontawesomeStyle()
}

function fontawesomeStyle(){
    var link = document.createElement('link');
    var surl = 'assets/css/fontawesome.css';
    link.href = surl;
    link.rel="stylesheet"
    document.head.appendChild(link);
    templatemoStyle()
}
function templatemoStyle(){
    var link = document.createElement('link');
    var surl = 'assets/css/templatemo-574-mexant.css';
    link.href = surl;
    link.rel="stylesheet"
    document.head.appendChild(link);
    owlStyle()
}

function owlStyle(){
    var link = document.createElement('link');
    var surl = 'assets/css/owl.css';
    link.href = surl;
    link.rel="stylesheet"
    document.head.appendChild(link);
    swiperStyle()
}

function swiperStyle(){
    var link = document.createElement('link');
    var surl = 'https://unpkg.com/swiper@7/swiper-bundle.min.css';
    link.href = surl;
    link.rel="stylesheet"
    document.head.appendChild(link);
    appfScript()
}

function appfScript(){
    var script = document.createElement('script');
    var surl = 'appf.js';
    script.src = surl;
    document.body.appendChild(script);
}