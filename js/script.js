'use strict'

/*==========================①　ハンバーガーメニュー==========================*/

document.getElementById('menu-btn').onclick = function(evt){
	evt.preventDefault();
	document.getElementById('gnavi').classList.toggle('open');
	evt.currentTarget.classList.toggle('close');
}



/*==========================②　曜日表示==================================*/

document.getElementById('what-day').onsubmit = function(evt){
	evt.preventDefault();
	const yyyy = evt.currentTarget.year.value;
	const mm = ('00' + evt.currentTarget.month.value).slice(-2);
	const dd = ('00' + evt.currentTarget.date.value).slice(-2);
	const day = new Date(yyyy, mm-1, dd).getDay();
	
	let dayList = '';
	switch (day) {
		case 0:
			dayList = '日曜日';
			break;
		case 1:
			dayList = '月曜日';
			break;
		case 2:
			dayList = '火曜日';
			break;
		case 3:
			dayList = '水曜日';
			break;
		case 4:
			dayList = '木曜日';
			break;
		case 5:
			dayList = '金曜日';
			break;
		case 6:
			dayList = '土曜日';
			break;
	}
	
	document.getElementById('A02-date').textContent =`${yyyy}年${mm}月${dd}日`;
	document.getElementById('A02-day').textContent = dayList;
}


/*==========================③　BMI表示==================================*/

const whatBMI = document.getElementById('what-bmi');

whatBMI.onsubmit = function(evt){
	evt.preventDefault();
	const kg = whatBMI.kg.value;
	const cm = whatBMI.cm.value / 100;
	
	const bmi = (kg / (cm * cm)).toFixed(1);
	
	let judge = '';
	if(bmi >= 30){
		judge = `肥満`;
	} else if(bmi >= 25) {
		judge = `肥満気`;
	} else if(bmi >= 18.5) {
		judge = `標準`;
	} else {
		judge = `痩せすぎ`;
	}
	
	document.getElementById('A03-bmi').textContent = bmi;
	document.getElementById('A03-result').textContent = judge;
}



/*==========================④　オリンピック開催年==================================*/

const oriYEAR =[];

for (let i = 1896; i <= 2020; i+=4){
	oriYEAR.push(i);

}

oriYEAR.forEach(function(data, index){
	if(index === 6-1){return;}
	if(index === 12-1){return;}
	if(index === 13-1){return;}

	document.getElementById('A04-result').innerHTML += `<p>第${index+1}回　${data}年`;
})