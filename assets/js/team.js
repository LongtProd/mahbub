var myModal = new bootstrap.Modal(document.getElementById('myModal'))


var teammail = document.querySelectorAll('.emailTeam')
var teamexec = document.querySelectorAll('.custom-mah-item-nm')
var teamonTw = document.querySelectorAll('.fa-twitter')
var teamonLk = document.querySelectorAll('.fa-linkedin')


for (var i = 0; i < teamonTw.length; i++) {
    teamonTw[i].addEventListener("click", function(e) { 
        e.preventDefault();
        console.log(i[i])
    });
}
for (var i = 0; i < teamonLk.length; i++) {
    teamonLk[i].addEventListener("click", function(e) { 
        e.preventDefault();
    });
}


/*
for (var i = 0; i < teammail.length; i++) {
    //var noreport = [i];
    teammail[i].addEventListener("click", function(e) { 
        e.preventDefault();
        console.log("just clicked team email")
        console.log(e)
        //console.log(teamexec[i])
        //console.log(`Send ${teamexec[i].innerHTML} A message.`)
        myModal.show()
    });
}
*/


teammail.forEach(function (item, index, array) { 
    item.addEventListener("click", function(e) { 
        e.preventDefault();
        let modalTitle = document.getElementById('modalTitle');
        //console.log("just clicked team email")
        
        modalTitle.innerHTML = `Contact ${teamexec[index].innerHTML}`;
        //console.log(teamexec[index].innerHTML)
        //console.log(`Send ${teamexec[i].innerHTML} A message.`)
        myModal.show()
    });
});
