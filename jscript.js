let cur_img, empty_id, cur_m, cur_m_img;
let index = ['8','1','6','3','2','4','5','7','0']

function selected_img(id){
    cur_img = id;
    for(let i=0; i<9; i++){
        if (index[i] == '0'){ cur_m = "m"+(i+1); }
        if (index[i] == cur_img[6]){ cur_m_img = "m"+(i+1); }
    }

    console.log("cur_m    : "+cur_m)
    console.log("cur_m_img: "+cur_m_img)
    console.log("cur_img  : "+cur_img)
    console.log(index);

    var selected_drag = document.getElementById(cur_img);
    selected_drag.ondragstart = function(evt){
        evt.dataTransfer.setData('key','dragElement')
        console.log(cur_img+" dragging...");
    }
    
    masbro0.ondragover = function(evt){
        evt.preventDefault();
        console.log(cur_img+" drag over "+cur_m);
    }

    masbro0.ondrop = function(evt){
        console.log(cur_img+" dropped at "+cur_m);
        
        evt.dataTransfer.getData('key');
        evt.preventDefault();

        document.getElementById("masbro0").src = selected_drag.src;
        document.getElementById("masbro0").draggable = "true";
        document.getElementById("masbro0").alt = selected_drag.alt;
        document.getElementById("masbro0").onmouseover = selected_drag.onmouseover;

        for (let i=0; i<9; i++){
            if (index[i]=='0'){
                index[i]=cur_img[6];
                index[cur_m_img[1]-1]='0';
            }
        }

        document.getElementById(cur_img).src = "";
        document.getElementById(cur_img).draggable = "";
        document.getElementById(cur_img).alt = "";
        document.getElementById(cur_img).onmouseover = "";

        var elem = document.getElementById(cur_img);
        elem.parentNode.removeChild(elem);

        document.getElementById("masbro0").id = cur_img;

        var img = document.createElement("img");
        img.id = "masbro0";
        document.getElementById(cur_m_img).appendChild(img);
        check_img();
    }
}

function check_img(){
    console.log("check")
    let index_win = ['1','2','3','4','5','6','7','8','0'];
    if (index[0] == index_win[0] &&
        index[1] == index_win[1] &&
        index[2] == index_win[2] &&
        index[3] == index_win[3] &&
        index[4] == index_win[4] &&
        index[5] == index_win[5] &&
        index[6] == index_win[6] &&
        index[7] == index_win[7] &&
        index[8] == index_win[8]
        ){
        document.getElementById("note").innerHTML = "Halo masbro!";
        console.log("menang");
    }
    console.log(index);
    console.log(index_win);
}

function restart(){
    loaction.reload()
}