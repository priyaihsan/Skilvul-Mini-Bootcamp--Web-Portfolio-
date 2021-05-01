const listMessage = document.querySelector('#message-box');
console.log(listMessage);

let dataMessage = [];

const addMessage = (event) => {
	event.preventDefault();
	console.log('test !!!');

	let nameMessage = prompt('Tambahkan nama anda ');
	let messageDescription = prompt('Tambahkan pesan anda');

	if (nameMessage.length == 0 && messageDescription == 0) {
		console.log('kosong !!!');
	} else {
		let newData = {
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
                                        <span>January, 2019 - now</span></span></p>`;

			displayList.append(displayTitle);
			listMessage.appendChild(displayList);
		});
	}
};
