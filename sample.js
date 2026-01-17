import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';
// let con=document.querySelector("#confetti");
// function fun(){
//     canvasConfetti();
// }
// con.addEventListener("click",fun);
// let time=3*1000;
// console.log(Date.now());
// let end=Date.now()+time;


// function con(){
//     canvasConfetti({
//         particleCount:50,
//         // ticks: 200,
//         spread: 90,

//     });
//     if(Date.now()<end){
//         requestAnimationFrame(con);
//     }
// }
// requestAnimationFrame(con);

// console.log(end);


let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".container");
let newgame=document.querySelector("#newgame");
let resetbtn=document.querySelector("#resetbtn");
let win=document.querySelector("#win");
let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turn=true;

// let game=(box)=>{
//     console.log("box was cliked");
//     if(turn){
//         box.innerText="X";
//         turn=false;
//     }
//     else{
//         box.innerText="O";
//         turn=true;
//     }
// }

const winner= (box)=>{
    for(let pattern of patterns)
    {
        let valbox1=boxes[pattern[0]].innerText;
        let valbox2=boxes[pattern[1]].innerText;
        let valbox3=boxes[pattern[2]].innerText;

        if(box.innerText===valbox1 && box.innerText===valbox2 && box.innerText===valbox3 ){
            console.log("winner");
            // canvasConfetti({
            //     particleCount:350,
            //     ticks: 400,
            //     spread: 180,
            //     gravity: 0.5

            // });


            boxes.forEach((box)=>{
                box.disabled=true;

            });
            container.style.display="none";
            resetbtn.style.display="none";
            win.innerText="Congratulations!!! WINNER IS "+valbox1;
            if(valbox1=="O")
                players[0].innerText=`Player O : ${++o_count}`;
            else
                players[1].innerText=`Player X : ${++x_count}`
            win.style.display="block";

            //CELEBRATION CODE
            let time=3*1000;
            console.log(Date.now());
            let end=Date.now()+time;
            
            
            function con(){
                canvasConfetti({
                    particleCount:70,
                    // ticks: 200,
                    spread: 270,
                    origin:{
                        x:0.5,
                        y:0.5
                    }
            
                });
                if(Date.now()<end){
                    requestAnimationFrame(con);
                }
            }

            requestAnimationFrame(con);
        }

    }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was cliked");
    if(turn){
        box.innerText="X";
        turn=false;
        winner(box);
    }
    else{
        box.innerText="O";
        turn=true;
        winner(box);
    }
    box.disabled=true;
    });
});

// const winner= (box)=>{
//     for(let pattern of patterns)
//     {
//         let valbox1=boxes[pattern[0]].innerText;
//         let valbox2=boxes[pattern[1]].innerText;
//         let valbox3=boxes[pattern[2]].innerText;

//         if(box.innerText===valbox1 && box.innerText===valbox2 && box.innerText===valbox3 ){
//             console.log("winner");
//         }

//     }
// }


newgame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        container.style.display="flex";

            resetbtn.style.display="block";
            
            win.style.display="none";
    });
});
resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        players[0].innerText="Player O :";
        players[1].innerText="Player X :";
        x_count=0;
        o_count=0;
    });

});
let x_count=0;
let o_count=0;
let players=document.querySelectorAll(".player");

