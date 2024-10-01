window.onload = function() {
    var boxes = document.querySelectorAll(".box");
    var resetBtn = document.querySelector("#reset-btn");
    var newGameBtn = document.querySelector("#newGame-btn");
    var msgContainer = document.querySelector(".msg-container");
    var msg = document.querySelector("#msg");
    var turnO = true; // playerO, playerX
    var winingPattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function resetGame() {
        turnO = true;
        enableboxes();
        msgContainer.classList.add("hide");
    }

    function enableboxes() {
        boxes.forEach(function(box) {
            box.disabled = false;
            box.innerText = "";
        });
    }

    function showinner(winner) {
        msg.innerText = "Congratulations, Winner is " + winner;
        msgContainer.classList.remove("hide");
    }

    function chkWinner() {
        for (var i = 0; i < winingPattern.length; i++) {
            var pattern = winingPattern[i];
            var pos1val = boxes[pattern[0]].innerText;
            var pos2val = boxes[pattern[1]].innerText;
            var pos3val = boxes[pattern[2]].innerText;
            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("Winner: " + pos1val);
                    boxes.forEach(function(box) {
                        box.disabled = true;
                    });
                    showinner(pos1val);
                    return;
                }
            }
        }
    }

    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            chkWinner();
        });
    });

    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);
};
