document.getElementById('theDateTwo').valueAsDate = new Date();

alert("JS подключён");

document.getElementById('buttonSucces').onclick = function getDate(){
    let dipDate = new Date();
    let dateStart = document.getElementById('theDateOne').valueAsDate;
    let dateEnd = document.getElementById('theDateTwo').valueAsDate;
    let out = document.getElementById('out');

    let dateDipDay = dateEnd - dateStart;
    let dateConvert = 1000 * 60 * 60 * 24;
    dateDipDay = dateDipDay / dateConvert;

    if(dateEnd > dipDate){
        document.getElementById('checkDate').innerHTML = "Выберите дату не позднее сегодняшнего дня";
    }
    else{
        let yearsDate = Math.floor(dateDipDay/365);
        let months = Math.floor(dateDipDay/30);
        document.getElementById('daysDate').innerHTML = "Дней " + dateDipDay;
        document.getElementById('yearsDate').innerHTML = "Лет " + yearsDate;
        document.getElementById('monthsDate').innerHTML = "Месяцев " + months;
        document.getElementById('checkDate').innerHTML = "Проверка даты не позднее сегодня";
    }
}
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function convertDate(date_str) {
  temp_date = date_str.split("-");
  return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
}
