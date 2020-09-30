let myImage = document.querySelector('img');

myImage.onclick = function () {　//クリックでイベント発火
  let mySrc = myImage.getAttribute('src'); //画像のsrc属性の値を取得
  if (mySrc === 'images/logo_transparent.png') {  //src属性の値が元の画像のパスと一致するかチェック
    myImage.setAttribute('src', 'images/onsen_animal.png'); //元の画像と同じなら2番目の画像に置き換え
  } else {
    myImage.setAttribute('src', 'images/logo_transparent.png')　//元の画像と異なれば元の画像に戻す
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'エンジニアを目指す' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'エンジニアを目指す' + storedName;
}

myButton.onclick = function () {
  setUserName();
}