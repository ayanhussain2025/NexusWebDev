//1. first i want ki when i click in boxes it some symbol like X or O must appear
//2.if you fill one box with one symbol you cannot change it later
//3. we have to write condition for winning
//4. condition for draw
//5.after winning you cannot enter symbol in free spaces
//6 adding restart features
const winnning=[
    [0,1,2,],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let moves = new Array(9).fill("E");

function IsWinner(){
    for(let i of winnning)
    {
        if(moves[i[0]]!="E"&&moves[i[0]]==moves[i[1]]&&moves[i[1]]==moves[i[2]])
            return 1;
    }
    return 0;
}
let turn = "O";
let total_moves=0;
const printer = (event)=>{
    if(moves[event.target.id]=="E")
    {
        total_moves++;
        if(turn=="O")
        {
            event.target.innerText=turn;
            moves[event.target.id]=turn;
            if(IsWinner())
            {
                document.getElementById('winningMessage').innerText=`${turn} is winner`;
                board.removeEventListener('click',printer);
                return;

            }
            turn="X";            
        }
        else
        {
            event.target.innerText=turn;
            moves[event.target.id]=turn;
            if(IsWinner())
            {
                document.getElementById('winningMessage').innerText=`${turn} is winner`;
                board.removeEventListener('click',printer);
                return;
            }
            turn="O";
        }
        if(total_moves==9)
        {
            document.getElementById('winningMessage').innerText="Match is Draw";
            board.removeEventListener('click',printer);
        }
    }
}
const board = document.querySelector('.board');
board.addEventListener('click',printer)
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })


   turn = "O";
   total_moves = 0;
   moves= new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.removeEventListener('click',printer);
   board.addEventListener('click',printer);
})



