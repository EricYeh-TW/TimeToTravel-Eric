import { getCurrentUserInformation } from './header.js';

window.addEventListener('load', function () {
	let saveBtn = document.querySelector('.save__btn__commit');
	let journeyId;
	let mimeType = 'img/jpeg';
	let onShelveBtn = document.querySelector('.nav_list_on_shelve');

	onShelveBtn.addEventListener('click', () => {
		localStorage.removeItem('selectedRoom');
		localStorage.removeItem('selectedPrivateScene');
		localStorage.removeItem('selectedGift');
		localStorage.removeItem('selectedJourney');
	});
	// 處理從journey_manage.html來的journey
	function handleSelectedJourney() {
		const selectedJourney = JSON.parse(localStorage.getItem('selectedJourney'));
		console.log(selectedJourney);
		let journeyNameInput = document.querySelector('.journey__name > input');
		let journeyDescInput = document.querySelector('#journey__description__content');
		let journeyPriceInput = document.querySelector('.journey__price > input');
		let journeyPhoto = convertBase64ToImage(selectedJourney.journeyPic, mimeType);

		// 賦值給input欄位
		journeyNameInput.value = selectedJourney.journeyName;
		journeyDescInput.value = selectedJourney.journeyDesc;
		journeyPriceInput.value = selectedJourney.journeyPrice;
		// 加入<img>標籤
		picturePreview.appendChild(journeyPhoto);

		// 存journeyId，為了發fetch到對應的controller
		journeyId = selectedJourney.journeyId;
	}

	saveBtn.addEventListener('click', function () {
		let journeyName = document.querySelector('.journey__name > input').value;
		let journeyDesc = document.querySelector('#journey__description__content').value;
		let journeyPrice = document.querySelector('.journey__price > input').value;

		// 要按下儲存後才能取到imgUrl
		let imgUrl = picturePreview.querySelector('img').getAttribute('src');
		let journeyPic = extractBase64String(imgUrl).base64String;

		let requestData = {
			comId: 5, // 假的comId
			journeyName: journeyName,
			journeyDesc: journeyDesc,
			journeyPrice: journeyPrice,
			journeyPic: journeyPic,
			journeyStatus: false,
		};

		if (journeyName !== null && journeyDesc !== null && journeyPrice !== null && journeyPic !== null) {
			if (journeyId == undefined) {
				fetch('/journeyController/journey', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(requestData),
				})
					.then((resp) => resp)
					.then((body) => {
						alert('新增成功!!');
						window.location.href = '../html/journey_manage.html';
					});
			} else {
				fetch('/journeyController/journey/updateJourney/' + journeyId, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(requestData),
				})
					.then((resp) => {
						if (resp.ok) {
							return resp;
						} else {
							alert('發生錯誤! 請確認所有欄位皆以填寫!');
							throw Error(`Request rejected with status ${resp.status}`);
						}
					})
					.then((body) => {
						alert('修改成功!');
						window.location.href = '../html/journey_manage.html';
					})
					.catch(console.error);
			}
		} else {
			alert('請確認所有欄位皆不能為空');
		}
	});

	// 隱藏input=file的預設按鈕，並設立預覽區
	let picturePreview = document.querySelector('.journey__photo__preview');
	picturePreview.addEventListener('click', function () {
		pictureUpdateBtn.click();
	});

	let pictureUpdateBtn = document.querySelector('.journey__photo__update');
	// click()後，發生change()
	pictureUpdateBtn.addEventListener('change', function (e) {
		const file = e.target.files[0]; // 第0個檔案
		const reader = new FileReader(); // 用來讀取檔案
		reader.onload = function (e) {
			const img = document.createElement('img');
			img.setAttribute('src', e.target.result);
			img.addEventListener('load', function () {
				// 圖片加載完後設立寬高
				const width = img.width;
				const height = img.height;
				const maxWidth = picturePreview.offsetWidth;
				const maxHeight = picturePreview.offsetHeight;
				// const aspectRatio = width / height;

				if (width > maxWidth || height > maxHeight) {
					if (width / height > maxWidth / maxHeight) {
						img.style.width = maxWidth + 'px';
						img.style.height = 'auto';
					} else {
						img.style.width = 'auto';
						img.style.height = maxHeight + 'px';
					}
				} else {
					img.style.width = width + 'px';
					img.style.height = height + 'px';
				}
			});
			picturePreview.innerHTML = '';
			picturePreview.appendChild(img);
			picturePreview.style.border = 'none'; // 上傳圖片後把框線隱藏
		};
		reader.readAsDataURL(file);
	});

	/**
	 * img轉Base64
	 */
	function extractBase64String(dataURL) {
		var prefix = 'data:image/';
		var index = dataURL.indexOf(';base64,');

		if (index !== -1) {
			var mimeType = dataURL.substring(prefix.length, index);
			var base64String = dataURL.substring(index + ';base64,'.length);
			return {
				mimeType: mimeType,
				base64String: base64String,
			};
		}
		console.log(mimeType);
		console.log(base64String);
		return null;
	}

	/**
	 * Base64轉圖片
	 */
	function convertBase64ToImage(base64String, mimeType) {
		let img = new Image();
		img.src = `data:${mimeType};base64,${base64String}`;
		img.addEventListener('load', function () {
			// 圖片加載完後設立寬高
			const width = img.width;
			const height = img.height;
			const maxWidth = picturePreview.offsetWidth;
			const maxHeight = picturePreview.offsetHeight;
			// const aspectRatio = width / height;

			if (width > maxWidth || height > maxHeight) {
				if (width / height > maxWidth / maxHeight) {
					img.style.width = maxWidth + 'px';
					img.style.height = 'auto';
				} else {
					img.style.width = 'auto';
					img.style.height = maxHeight + 'px';
				}
			} else {
				img.style.width = width + 'px';
				img.style.height = height + 'px';
			}
		});
		picturePreview.style.border = 'none'; // 上傳圖片後把框線隱藏
		return img; // 傳整個<img>標籤
	}

	handleSelectedJourney();
	getCurrentUserInformation();
});
