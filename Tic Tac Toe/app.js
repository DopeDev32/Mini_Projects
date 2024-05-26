let boxes = document.querySelectorAll("#box")
let restart = document.querySelector("#restart")
let newg = document.querySelector("#new")
let msgcon = document.querySelector(".msgcon")
let msg = document.querySelector("#msg")

let turn0 = true //playerX, player0

const winpattern = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],	
	[0,4,8],
	[2,4,6]
];

const reset = ()=>{
	turn0 = true
	enablebox()
	msgcon.classList.add("hide")
	restart.style.display = "block"
}

boxes.forEach((box) => {
	box.addEventListener("click",() => {	
	
	if(turn0){
		//player0
		box.innerText = "O"
		turn0 = false;
	}
	else{
		//playerX
		box.innerText = "X"
		turn0= true
	}
	boxes.disabled = true

	checkwinner()
	});
});

const enablebox = () => {
	for (let box of boxes) {
		box.disabled = false
		box.innerText = ""
	}
}
const disablebox = () => {
	for (let box of boxes) {
		box.disabled = true
	}
}

const showinner = (winner) => {
	msg.innerText = `Congratulation, Winner is ${winner}`;
	msgcon.classList.remove("hide")
	disablebox()
	restart.style.display = "none"
}

const checkwinner = () => {
	for (let pattern of winpattern){
		let pos1 = boxes[pattern[0]].innerText
		let pos2 = boxes[pattern[1]].innerText
		let pos3 = boxes[pattern[2]].innerText

		if (pos1 != "" && pos2 != "" && pos3 != ""){
			if (pos1 === pos2 && pos2 === pos3){
				console.log("winner",pos1)
				showinner(pos1)
			}
		}	
	}

}


restart.addEventListener("click",reset)
newg.addEventListener("click",reset)
