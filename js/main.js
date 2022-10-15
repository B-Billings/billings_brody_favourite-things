import {getData} from "./modules/dataMiner.js";
(() => {
    let theTemplate = document.querySelector("#bio-template").content,
    lightbox = document.querySelector(".lightbox"),
        btns = document.querySelectorAll(".favourites"),
        close = document.querySelector("#close"), 
        activebtns; 

        function openbox() {
            lightbox.classlist.remove('hidden');
        }
    
        //function closelight(){
        //    console.log("fired from the close");
        //    lightbox.classList.add('hidden');
        //}
        
    function getinfo (event) {
        getData("./data.json", datachange);  
        activebtns = event.target.parentElement.id;
    }
    

    function datachange(i) {

        let box = theTemplate.cloneNode(true),
        containers = box.firstElementChild.children;
        containers[0].textContent = i[activebtns].name;
        containers[1].querySelector('img').src = `images/${i[activebtns].Image}`;    
        containers[2].textContent = i[activebtns].description;
        containers[3].textContent = i[activebtns].favouritepart;
        lightbox.innerHTML = "";
        lightbox.appendChild(box);
    

    } 

    btns.forEach(addEventListener("click", getinfo,openbox));
    close.addEventListener("click", getinfo, closelight);

})();