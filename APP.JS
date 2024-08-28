let showme = document.getElementById("showlinks")
// let showme2 = document.getElementById("lines2"/)
let show = document.getElementById("line1")
let show1 = document.getElementById("line2")
let show2 = document.getElementById("line3")
// const closeme = "<p>X</p>"
let line = document.getElementById("lines")
// let closer = document.getElementById("pp")
// let gg = document.createElement("<p>X</p>")
let closer = document.createElement("p").textContent = "X"
let clo = document.createElement("span").textContent = "ll"

let isFirstFunction = true;

        function firstFunction() {
            document.getElementById("lines").onclick = function() {
                show.style.top = "50%"
                // show.style.left = "50%"
                show.style.marginTop = "10px"
                show.style.left = "50%"
                show.style.position = "absolute"
                show.style.transform = "translate(-50%, -50%) rotate(45deg)"
                
                show1.style.position = "absolute"
                show1.style.top = "50%"
                show1.style.marginTop = "10px"
                show1.style.left = "50%"
                show1.style.transform = "translate(-50%, -50%) rotate(-45deg)"

                show2.style.display = 'none'
                showme.style.display = "block"
                document.getElementById('dg').style.opacity = '.1'
                document.getElementById('dg').style.pointerEvents = 'none'
                
            }
           
        }

        function secondFunction() {
            document.getElementById("lines").onclick = function() {
                show.style.top = "0%"
                show.style.left = "0%"
                show.style.marginTop = "0px"
                show.style.left = "0%"
                show.style.position = ""
                show.style.transform = "translate(0%, 0%) rotate(0deg)"
                showme.style.display = "none"
                
                show1.style.position = ""
                show1.style.top = "0%"
                show1.style.marginTop = "0px"

                show1.style.left = "0%"
                show1.style.transform = "translate(0%, 0%) rotate(0deg)"

                show2.style.display = 'block'
                document.getElementById('dg').style.opacity = '.9'
                document.getElementById('dg').style.pointerEvents = 'visible'
                
            }
           
        }
        

        document.getElementById("lines").addEventListener("click", function() {
            if (isFirstFunction) {
                firstFunction();
            } else {
                secondFunction();
            }
            isFirstFunction = !isFirstFunction; // Toggle the flag
        });

        document.getElementById('dg').onclick = function() {
            showme.style.display = 'none'
            document.getElementById('dg').pointerEvents = "visible"
        }






