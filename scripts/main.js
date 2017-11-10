
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//myHeading.textContent = 'About hawks';

function setUserName() {
	if (storageAvailable('localStorage')) {
		var myName = prompt('Please enter your name.');
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Hawks are cool, ' + myName + '!';
	}
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hawk.png') {
      myImage.setAttribute ('src','images/hawk2.png');
    } else {
      myImage.setAttribute ('src','images/hawk.png');
    }
}

if (storageAvailable('localStorage')) {
	if (!localStorage.getItem('name')) {
	  setUserName();
	} else {
	  var storedName = localStorage.getItem('name');
	  myHeading.innerHTML = 'Hawks are cool, ' + storedName + '!';
	}
}

myButton.onclick = function() {
  setUserName();
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

var locStorage = document.querySelector('#locStor');
var sessStorage = document.querySelector('#sessStor');

if (storageAvailable('sessionStorage')) {
  sessStorage.textContent = 'Session storage is available';
}
else {
  sessStorage.textContent = 'Session storage is NOT available';
}
if (storageAvailable('localStorage')) {
  locStorage.textContent = 'Local storage is available';
}
else {
  locStorage.textContent = 'Local storage is NOT available';
}