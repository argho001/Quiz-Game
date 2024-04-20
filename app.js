
let selectedImage = null; // Variable to keep track of the selected image
let selectionLocked = false; // Flag to indicate if selection is locked
let i=0;
let quiz_no = [];
let question_no;
let quiz_no_ran ;
let display_question="";
var newButton ;
let score =0;
var Color_chg = document.getElementById("questions");
var page = document.getElementById("imageContainer");
var page_que = document.getElementById("table1");
var C_Ans=document.getElementById("Ans");
var W_Ans=document.getElementById("Ans2"); 
var Answer = document.createElement("img");
var Ans_container = document.getElementById("Ans_image2");

function addImage() {
    let num = 4;
    let uniqueNumbers = [];
    Ans_container.innerHTML=""; 
    

    while (num > 0) {
        let ran = Math.floor(Math.random() * 9) + 1;

        if (!uniqueNumbers.includes(ran)) {
            uniqueNumbers.push(ran);
            console.log(ran);
            let image = document.createElement("img");
            let name = "one piece photo/pic" + ran + ".jpg";
            image.src = name;
            image.alt = "";
            image.setAttribute("data-index", ran);
            let container = document.getElementById("imageContainer");
            container.appendChild(image);
            quiz_no[i]=ran;
            
            num--;
            i++;
        }
    }  
    quiz_no_ran = Math.floor(Math.random()*4); //random quiz number select
    question_no = quiz_no[quiz_no_ran]; //what question select
    console.log(question_no); 
    Questions(question_no);    
    i=0;       
    addButton.style.display = "none";
    new_button();//New button add
    Color_chg.style.backgroundColor = "#ffffff";
    document.getElementById("display_qs2").innerText=display_question;
    display_question="";
}
function new_button(){
    newButton = document.createElement("button");
    newButton.textContent = "NEXT";
    newButton.id = "next_but";   
    var container2 = document.getElementById("button1");
    container2.appendChild(newButton);
    newButton.onclick = Next;
}


            
function photoClicked(event) {
    let clickedImage = event.target;
    let imageIndex = clickedImage.getAttribute("data-index");
    
    if (!selectionLocked) {
        // If selection is not locked, proceed with selection
        if (selectedImage) {
            // If there's a previously selected image, remove its selection
            selectedImage.classList.remove("selected");
            
            
        }
        console.log("Image clicked: " + imageIndex);
        // Set the clicked image as the selected image
        selectedImage = clickedImage;
        selectedImage.classList.add("selected");

        // Lock the selection to prevent further changes
        selectionLocked = true;
        console.log(question_no);
        // Do something with the clicked image
        if(question_no == imageIndex){
            
            score= score+1;
            
             C_Ans.innerText = "Correct !";
        }else{
           
            score=score-1;
           
            W_Ans.innerText="Wrong 🥲";
            
        }

        document.getElementById("score").innerText="Score :"+score;  
        Answer_photo(); 
        
    }
}

var addButton = document.getElementById("addImageButton");
addButton.addEventListener("click", addImage);


document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addImageButton");
    addButton.addEventListener("click", addImage);

    document.getElementById("imageContainer").addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            photoClicked(event);
        }
    });
});

function Next(){
    selectedImage = null; // Variable to keep track of the selected image
    selectionLocked = false;
    page.innerHTML="";
    //page_que.innerHTML="";
    newButton.style.display="none";
    C_Ans.innerText ="";
    W_Ans.innerText="";
    
    addImage(); 
}
  
function Answer_photo(){
    
    var name2 = "one piece photo/pic"+ question_no +".jpg";
     Answer.src = name2;
     Answer.alt = "";
   
    Ans_container.appendChild(Answer);
    name2="";
   
}

    
function Questions(a){
    

    switch(a){
        case 1:
            //Luffy
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who is the captain of the Straw Hat Pirates?";
            que[2] ="Q: Which character has a strong sense of justice and eats a lot, often falling asleep after meals?";
            que[3] ="Q: This character's signature laugh is * Gomu Gomu no.... * Who is known for this unique laughter?";
            display_question = que[b];
            break;
        case 2://Zoro
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who is known as the (Pirate Hunter) and wields three swords?";
            que[2] ="Q: Who is the first member to officially join the Straw Hat Pirates after Luffy?";
            que[3] ="Q: Which Straw Hat swordsman dreams of becoming the world's greatest swordsman?";
            display_question = que[b];
            break;
        case 3://Nami
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Which crew member is known for her excellent thieving skills and often utilizes a weapon called the Clima-Tact?";
            que[2] ="Q: Who is known as the (Cat Burglar) and hails from the Arlong Pirates?";
            que[3] ="Q: Which character dreams of drawing a complete map of the world, including the dangerous Grand Line?";
            display_question = que[b];
            break;
        case 4://Sanji
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who is the chef of the Straw Hat Pirates and specializes in Black Leg-style martial arts?";
            que[2] ="Q:Who is known for his iconic phrase 'Love Cook'?";
            que[3] ="Q: Who dreams of finding the All Blue, a legendary sea where all the world's fish gather?";
            display_question = que[b];
            break;  
        case 5://ussaf
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who is also known by the alias 'Sogeking'?";
            que[2] ="Q: Who is the sharpshooter?";
            que[3] ="Q: Whoes attack name like the Kabuto and the Pop Green?";
            display_question = que[b];
            break;
        case 6://Shanks
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: ";
            que[2] ="Q: ";
            que[3] ="Q: ";
            display_question = que[b];
            break; 
        case 7://Robin
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who can read ancient texts known as Poneglyphs?";
            que[2] ="Q: Whose homeland was Ohara?";
            que[3] ="Q: Who has vast knowledge of history and literature?";
            display_question = que[b];
            break;
        case 8://choper
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who ate the Human-Human Fruit?";
            que[2] ="Q: Who was once the pet of Dr. Hiriluk ?";
            que[3] ="Q: who was originally ostracized due to his blue nose?";
            display_question = que[b];
            break;  
        case 9://Franki
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: Who is also known by the alias 'Cutty Flam'?";
            que[2] ="Q: Who is the shipwright?";
            que[3] ="Q: Who is a cyborg with cola-powered system?";
            display_question = que[b];
            break;
        case 10:
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: ";
            que[2] ="Q: ";
            que[3] ="Q: ";
            display_question = que[b];
            break;
        case 11:
            var b=0;
            b = Math.floor(Math.random()*3)+1;
            var que = [];
            que[1] = "Q: ";
            que[2] ="Q: ";
            que[3] ="Q: ";
            display_question = que[b];
            break;      
    }

}


