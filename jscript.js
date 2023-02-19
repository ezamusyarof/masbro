
// var masbro1 = document.getElementById("masbro1");
// var masbro2 = document.getElementById("masbro2");

// console.log(masbro1);

// masbro1.ondragstart = function(evt){
//     evt.dataTransfer.setData('key','dragElement')
//     console.log("dragging...");
//     // document.getElementById('masbro1').style.display = 'none';
// }
// masbro2.ondragover = function(evt){
//     evt.preventDefault();
//     console.log("drag over...");
// }
// masbro2.ondrop = function(evt){
//     evt.dataTransfer.getData('key');
//     evt.preventDefault();
//     console.log("dropped");
// }

let cur_img = '';
function selected_img(id){
    cur_img = id;
    console.log(cur_img);
    var selected_drag = document.getElementById(cur_img);
    selected_drag.ondragstart = function(evt){
        evt.dataTransfer.setData('key','dragElement')
        console.log("dragging...");
        console.log(selected_drag);
        // document.getElementById('masbro1').style.display = 'none';
    }

    empty.ondragover = function(evt){
        evt.preventDefault();
        console.log("drag over...");
    }
    empty.ondrop = function(evt){
        evt.dataTransfer.getData('key');
        evt.preventDefault();
        console.log("dropped");
        document.getElementById("masbro0").src = document.getElementById(cur_img).src;
        document.getElementById("masbro0").draggable = document.getElementById(cur_img).draggable;
        document.getElementById("masbro0").alt = document.getElementById(cur_img).alt;
        document.getElementById("masbro0").onmouseover = document.getElementById(cur_img).onmouseover;
        document.getElementById("empty").classList.remove('mini-box-empty');
        document.getElementById("empty").classList.add('mini-box');

    //     var edit_save = document.getElementById("edit-save");
    // edit_save.onclick = function(){
    //    this.src = "../template/save.png";
    // }
    }
}





// const draggableElements = document.querySelectorAll(".mini-box");
// const droppableElement = document.querySelector(".mini-box-empty");

// draggableElements.forEach(elem => {
//     elem.addEventListener("dragstart", dragStart);
//     // elem.addEventListener("dragstart", drag);
//     // elem.addEventListener("dragstart", dragEnd);
// });

// droppableElement.forEach(elem => {
//     // elem.addEventListener("dragenter", dragEnter);
//     elem.addEventListener("dragover", dragOver);
//     // elem.addEventListener("dragleave", dragLeave);
//     elem.addEventListener("drop", drop);
// })

// function dragStart(event) {
//     console.log("dragging...");
//     console.log(event);
//     event.dataTransfer.setData("text", event.target.color);
// }