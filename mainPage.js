const allDivs=document.querySelector("#theTable").querySelectorAll("div");
const body=document.querySelector("body");
const toggleButton=document.querySelector("#modeChange");
const table=document.querySelector("#theTable");
const img=document.querySelector(".image").querySelector("img");


let itemClicked=0;
let buttonClick=false;
let time=0;
let theInterval=0;
let hitBox=0;
let score=0;
let smlClicked=false;

toggleButton.addEventListener("click",()=>{
	itemClicked++;
	if(itemClicked%2===0){
		darkMode();
	}
	else{
		lightMode();
	}
});

document.querySelector("#restart").addEventListener("click",()=>document.location.reload(true));
document.querySelector("#smlRestart").addEventListener("click",()=>document.location.reload(true));

document.querySelector("#smlModeToggle").addEventListener("click",()=>{
	document.querySelector(".nonVisible").style.visibility="hidden";
	smlClicked=false;
	if(buttonClick===false){
		lightMode();
		buttonClick=true;
	}
	else if(buttonClick===true){
		darkMode();
		buttonClick=false;
	}
})

for(let i=0;i<allDivs.length;i++){
	allDivs[i].setAttribute("id",i);
}

const prevMovements=()=>{
	    document.querySelector(".image").querySelector("img").setAttribute("src","Images/angryFace1.jpg");
		theInterval =setInterval(timeIncreaseAndMoveMole,1000);
		document.querySelector("#timerStarts").style.pointerEvents="none";
}
document.querySelector("#timerStarts").addEventListener("click",prevMovements);
document.querySelector("#smlPlay").addEventListener("click",()=>{
	document.querySelector(".nonVisible").style.visibility="hidden";
	smlClicked=false;
	prevMovements();
})
const lightMode=()=>{
	body.setAttribute("class","bg-light");
	toggleButton.setAttribute("class","btn btn-outline-dark");
	toggleButton.textContent="Dark Mode";
	body.style.color="black";
	table.style.border="1px solid black";
	document.querySelector("#timerAndScoreContainer").style.color="white";
	for(let i=0;i<allDivs.length;i++){
		allDivs[i].style.border="1px solid black";
	}

}
const darkMode=()=>{
	body.setAttribute("class","bg-dark");
	toggleButton.setAttribute("class","btn btn-outline-light");
	toggleButton.textContent="Light Mode";	
	body.style.color="white";
	table.style.border="1px solid white";
	for(let i=0;i<allDivs.length;i++){
		allDivs[i].style.border="1px solid white";
	}
}
const timeIncreaseAndMoveMole=()=>{
	
	if(time<60){
		time++;
		document.querySelector(".timer").textContent=time;
		document.querySelector(".smlTimer").textContent=time;
			for(let i=0;i<allDivs.length;i++){
				allDivs[i].setAttribute("class","unMole");
			}
			let theMoleBox=allDivs[Math.floor(Math.random()*9)];
			theMoleBox.setAttribute("class","mole");
			hitBox=theMoleBox.id;
	}
	else{
		time=0;
		img.setAttribute("src","Images/relievedFace1.jpg");
		clearInterval(theInterval);
		alert("Your total score is " + score);
		document.querySelector("#timerStarts").style.pointerEvents="none";
	}

}

allDivs.forEach(item=>{
	item.addEventListener("click",()=>{
		if(item.id===hitBox){
			score++;
			document.querySelector(".score").textContent=score;
			document.querySelector(".smlScore").textContent=score;
		}
	});
})
document.querySelector("#dropdownMenuButton").addEventListener("click",()=>{
	if(smlClicked===false){
		document.querySelector(".nonVisible").style.visibility="visible";
		smlClicked=true;
	}
	else if(smlClicked===true){
		document.querySelector(".nonVisible").style.visibility="hidden";
		smlClicked=false;
	}
});