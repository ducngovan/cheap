var col = parseInt(prompt("nhap column: "));
var row = parseInt(prompt("nhap row: "));

if(col>0 && row>0){
    let html, i, j;
    html = '';
    for(i=0;i<row;i++) {
        html += '<div>';
        for(j=0;j<col;j++){
            html += '<button onclick="choose(this)">O</button>';
        }
        html += '</div>';
    }
    document.getElementById('caro').innerHTML = html;
}else{
    alert("nhap lai N,M.!");
}

function choose(val) {
    val.innerHTML = 'X';
}