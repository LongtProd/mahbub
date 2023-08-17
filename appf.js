function headPage() {
    return new Promise((resolve, reject) => {
    var header = document.getElementById("header");
    var xhr = new XMLHttpRequest();
            var url = '_head.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                resolve( header.innerHTML = xhr.response)
               
                //footPage();
            }
            else {
               reject(console.log('Request failed.  Returned status of ' + xhr.status))
            }
            };
            xhr.send();
        });
}

async function footPage() {
    await headPage()
    return new Promise((resolve, reject) => {
    var footer = document.getElementById("footer");
    var xhr = new XMLHttpRequest();
            var url = '_foot.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                resolve(footer.innerHTML = xhr.response)
                //turnonbody()
            }
            else {
                reject(console.log('Request failed.  Returned status of ' + xhr.status))
            }
            };
            xhr.send();
        });
}
async function turnonbody() {
    await footPage()
    return new Promise((resolve, reject) => {
    resolve(document.getElementById("mainbody").style.display = '')
    var d = new Date(); 
    document.getElementById("mahcryear").innerHTML = d.getFullYear();
    });
}

async function jqueryScript(){
    await turnonbody()
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        var surl = 'vendor/jquery/jquery.min.js';
        script.src = surl;
        resolve(document.body.appendChild(script))
    });
}
    
async function bootstrapScript(){
    await jqueryScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'vendor/bootstrap/js/bootstrap.min.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function isotopeScript(){
    await bootstrapScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'assets/js/isotope.min.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function owlScript(){
    await isotopeScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'assets/js/owl-carousel.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function tabsScript(){
    await owlScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'assets/js/tabs.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function swiperScript(){
    await tabsScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'assets/js/swiper.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function customScript(){
    await swiperScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'assets/js/custom.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}

async function sweeperoptionScript(){
    await customScript()
    return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    var surl = 'sweeperoption.js';
    script.src = surl;
    resolve(document.body.appendChild(script))
    });
}


async function dosofink() {
    await sweeperoptionScript()
    return new Promise((resolve, reject) => {
    var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
    if(currento == "team.html" || currento.includes("team")){
        function functeam() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/team.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
        function funcmedia() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/media.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
            functeam()
            .then(funcmedia)
    }else if(currento == "contact.html" || currento.includes("contact")){
        function funccontact() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/contact.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
        function funcmedia() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/media.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
            funccontact()
            .then(funcmedia)
    }else if(currento == "services.html"){
       resolve('')
    }else if(currento.includes("service")){
        function funccontact() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/contact.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
        function funcmedia() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                var surl = 'assets/js/media.js';
                script.src = surl;
                resolve(document.body.appendChild(script))
            });
        }
            funccontact()
            .then(funcmedia)
    }else{
        resolve('')
    }
    });
}

dosofink();