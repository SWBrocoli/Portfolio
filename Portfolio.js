function AffichagePropos(){ 
    document.getElementById("btns").style.fontSize="18px"; 
    document.getElementById("btns").style.color="Navy"; 
    document.getElementById("btns").style.fontWeight="bold"
    document.getElementById("btns").innerHTML= "Curieux et motivé, j’aime apprendre, créer et découvrir de nouvelles choses. Je prends plaisir à développer des projets simples, utiles et bien pensés. Toujours en envie de progresser, je cherche à m’améliorer à travers chaque expérience.";
 }

 function HOOBIES(Numéro){ 
    var Image;
    if(Numéro==1){ 
        Image = "IMG_3558.MOV" } 
        else if (Numéro == 2){ 
            Image = "IMG_7773.jpg" } 
            else { 
                Image = "IMG_5851.jpg" 
            }
            document.getElementById('MonImage'). src =Image;
        }