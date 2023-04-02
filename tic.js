const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']
    let board = document.getElementById("gameboard")

    let boardLayout = () => {
       // let x = "";
        gameboard.forEach((square, index) => {
            console.log(`dam + ${index}`)
            board.innerHTML += `<div class="square" id ="square-${index}">${square}</div>`;
        })
    }

    // let click = () => {
    //     document.querySelectorAll(".square").forEach((x) => {
    //         x.addEventListener("click", (e) => {
    //             console.log(e.target.id)
    //         })
    //     })
    // }

    var count = false;
    let click = ()=>{
        document.querySelectorAll(".square").forEach((x)=> {
            x.addEventListener("click", (e) =>{
               count =(!count)
               x.innerHTML =`<h1 id='game-inside'>${count ? "X":"O"}</h1>`
            })
        })
    }
    
    
    
    const render = () => {
        boardLayout();
        click();
    }
    
    return{
        render
    }
})();

// let game = () =>{
//      update = () =>{
//         if()
//      }
// }

console.log(Gameboard.render)



    
Gameboard.render()