document.getElementById('theDateTwo').valueAsDate = new Date();
alert("succes");
document.getElementById('button-succes').onclick = function getDate(){
    let dateDip = new Date();
    let dateStart = document.getElementById('theDateOne').value;
    let dateEnd = document.getElementById('theDateTwo').value;
    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);
    let out = document.getElementById('out');
    for (i = dateStart; i < dateEnd; i = i+24*60*60*1000){
       dateDip += new Date(i).toISOString().substr(0, 10);
    }
}

document.getElementById('button-2').onclick = function showDate(){
    document.getElementById('theDateOne').show;
    document.getElementById('theDateTwo').show;
}
