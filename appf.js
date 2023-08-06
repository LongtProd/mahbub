headPage();
function headPage() {
    var header = document.getElementById("header");
    var xhr = new XMLHttpRequest();
            var url = '_head.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                header.innerHTML = xhr.response;
                footPage();
            }
            else {
                console.log('Request failed.  Returned status of ' + xhr.status);
            }
            };
            xhr.send();
}

function footPage() {
    var footer = document.getElementById("footer");
    var xhr = new XMLHttpRequest();
            var url = '_foot.html';
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                // Set the innerHTML property of the div element to display the fetched content
                //console.log(xhr.response)
                footer.innerHTML = xhr.response;
                turnonbody()
            }
            else {
                console.log('Request failed.  Returned status of ' + xhr.status);
            }
            };
            xhr.send();
}
function turnonbody() {
    document.getElementById("mainbody").style.display = '';
    jqueryScript()
}
jqueryScript()
    function jqueryScript(){
        var script = document.createElement('script');
        var surl = 'vendor/jquery/jquery.min.js';
        script.src = surl;
        document.body.appendChild(script);
        bootstrapScript()
    }
    
    function bootstrapScript(){
        var script = document.createElement('script');
        var surl = 'vendor/bootstrap/js/bootstrap.min.js';
        script.src = surl;
        document.body.appendChild(script);
        isotopeScript()
    }
    
    function isotopeScript(){
        var script = document.createElement('script');
        var surl = 'assets/js/isotope.min.js';
        script.src = surl;
        document.body.appendChild(script);
        owlScript()
    }
    
    function owlScript(){
        var script = document.createElement('script');
        var surl = 'assets/js/owl-carousel.js';
        script.src = surl;
        document.body.appendChild(script);
        tabsScript()
    }
    
    function tabsScript(){
        var script = document.createElement('script');
        var surl = 'assets/js/tabs.js';
        script.src = surl;
        document.body.appendChild(script);
        swiperScript()
    }
    
    function swiperScript(){
        var script = document.createElement('script');
        var surl = 'assets/js/swiper.js';
        script.src = surl;
        document.body.appendChild(script);
        customScript()
    }
    
    function customScript(){
        var script = document.createElement('script');
        var surl = 'assets/js/custom.js';
        script.src = surl;
        document.body.appendChild(script);
        sweeperoptionScript()
    }
    
    function sweeperoptionScript(){
        var script = document.createElement('script');
        var surl = 'sweeperoption.js';
        script.src = surl;
        document.body.appendChild(script);
        
    }