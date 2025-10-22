function add(id1, id2){
    let score = Number(document.getElementById(id1).innerText);

    if(id2 == 'one'){
        score = score+1;
    }
    else if(id2 == 'two'){
        score = score+2;
    }
    else if(id2 == 'three'){
        score = score+3;
    }

    document.getElementById(id1).innerText = score;
    return;
}