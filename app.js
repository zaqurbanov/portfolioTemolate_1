const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controlls");
const sectionBtn = document.querySelectorAll(".controll");
const allSections = document.querySelector(".main-content");


const headerImage = document.getElementById('headerImage');
const hShape = document.getElementById("h-shape");
  
function pageTransition() {
        // Button Active Class

        for(let i =0; i<sectionBtn.length;i++){
            sectionBtn[i].addEventListener("click",function(){
                let currentBtn= document.querySelectorAll(".active-btn")
                currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ");

                this.className += "active-btn"
            })




        }

            allSections.addEventListener("click",(e)=>{

                // bu kod ile biz ekranda clicklenen her hansi bir containerin data-id sini aliriq.
                const id = e.target.dataset.id;
                if(id){
                    sectionBtns.forEach((btn)=>{
                        btn.classList.remove("active");

                    })
                   
                        
                    sections.forEach((section)=>{
                            section.classList.remove("active")
                })
                        const element = document.getElementById(id);
                    
                        element.classList.add("active")
                }
               
            });

            headerImage.addEventListener("mouseenter",function(){
                hShape.classList.add("active1")
            })
            headerImage.addEventListener("mouseleave",function(){
                hShape.classList.remove("active1")
            })

            const themeBtn = document.querySelector(".theme-btn");
           themeBtn.addEventListener("click", ()=>{
                let element = document.body;
                element.classList.toggle("light-mode");
                
           })
}




pageTransition();