const listMessage = document.querySelector('#message-box');
console.log(listMessage);

let dataMessage = [];
let countMessage = 0;

const addMessage = (event) => {
	event.preventDefault();
	console.log('test !!!');

	// get time
	var rtClock = new Date();
	var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Saptu'];
	var day = rtClock.getDay();
	var year = rtClock.getFullYear();

	countMessage += 1;
	let nameMessage = prompt('Tambahkan nama anda ');
	let messageDescription = prompt('Tambahkan pesan anda');
	let timeMessage = days[day] + ', ' + year + '  - now';

	if (nameMessage.length == 0 && messageDescription == 0) {
		console.log('kosong !!!');
	} else {
		let newData = {
			id: countMessage,
			title: nameMessage,
			description: messageDescription,
		};
		console.log(newData);
		dataMessage.push(newData);
		console.log(dataMessage);

		dataMessage.map((item) => {
			let displayList = document.createElement('li');
			let displayTitle = document.createElement('p');

			displayTitle.innerHTML = `<p class="tags"> ${item.title}  
										<br /><span> ${item.description}
										<span id="time-chat"> ${timeMessage} </span></span></p>`;

			if (newData.id == countMessage) {
				console.log('tampil');
				displayList.append(displayTitle);
				listMessage.appendChild(displayList);
			}
		});
	}
};

// real time

function realtime() {
	var rtClock = new Date();

	var tanggal = rtClock.getUTCDate();
	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var month = rtClock.getMonth();

	var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Saptu'];
	var day = rtClock.getDay();

	var year = rtClock.getFullYear();

	// menambah AM dan PM sistem
	var amPm = hours < 12 ? 'AM' : 'PM';

	// mengubabah jam ke format 12 jam
	hours = hours > 12 ? hours - 12 : hours;

	hours = ('0' + hours).slice(-2);
	minutes = ('0' + minutes).slice(-2);
	seconds = ('0' + seconds).slice(-2);

	//menampilkan jam
	document.getElementById('real-time').innerHTML = days[day] + ', ' + tanggal + ' ' + months[month] + ' ' + year + ' | ' + hours + ' : ' + minutes + ' : ' + seconds + ' ' + amPm;

	var t = setTimeout(realtime, 500);
}

// background change

var c = ['#A1C7BA', '#C3E6D2', '#A9D1E8', '#A9D1E8', '#97C4DE', '#FAD8BF', '#F8ECBD', '#FAF7EA', '#B3E3F8', '#8CD1F6', '#85BEF9'];
var i = 0;
var myVar = setInterval(function () {
	myTimer();
}, 1000);

function myTimer() {
	document.getElementsByTagName('body')[0].style.background = c[i];
	i = i + 1;
	if (i >= c.length) i = 0;
}
