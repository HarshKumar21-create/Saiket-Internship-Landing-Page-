let cards = document.querySelectorAll(".album-card, .playlist-card, .artist-card");

cards.forEach(card => {
    card.onclick = function(){
        card.style.background = "gray";
        card.classList.toggle("active");
        console.log("clicked");
    }
});

let search = document.querySelector("#search");
search.addEventListener("input",
    function() {

        let searchText = 
        search.value.toLowerCase();

        cards.forEach(function(card){
            let cardText = card.innerText.toLowerCase();
        
           if(cardText.includes(searchText))
            {
               card.style.display = "";
            }
           else{
               card.style.display = "none";
            }
        });
    });

    let listenBtn = document.querySelector("#listenBtn");
    let status = document.querySelector("#status");

    listenBtn.addEventListener("click",
        function() {

            listenBtn.classList.toggle("active");

            if(listenBtn.classList.contains("active")){

            
                status.innerText = "Now Playing... Enjoy Your Music";
                listenBtn.innerText = "Playing...";
            }
             else{
                status.innerText = "Music Stopped";
                listenBtn.innerText = "Start Listening";
             }
        });

