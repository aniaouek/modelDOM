//wyglad dokumentu - glownego obirktu DOM
//console.log(dokument);
//console.log(dokument.documentElement); - wyciagiem element html
//console.log(dokument.head); wyciagam sekcje head
//console.log(document.body);

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

//otrzymujemy tablice elementow - mozemy uzywac metod pzeznaczonych dla tablic
var linki = document.getElementsByClassName('link');
console.log(linki);

//console.log(linki[1];

//po nazwie znacznika
var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

//po okreslonym selektorze (podajemy # lub .) - zawsze pierwsze trafienie
var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

var linkPoKlasie = document.querySelector('#parFirst .link');
console.log(linkPoKlasie);

//po okreslonym selektorze (podajemy # lub .) zwraca wszystkie trafienia
var linkiPoKlasie = document.querySelectorAll('#parFirst .link');
console.log(linkiPoKlasie);

//odnajdywanie wezlow
//odnalezienie rodzica
console.log(parFirst.parentNode);

//odnajdywanie wezlow
console.log(parFirst.childNodes);

//var text = document.querySelector('#parFirst p');
//console.log(text.childNodes);

//odnajdowanie konkretnego wezla
console.log(parFirst.childNodes[2]);

//odnalezienie dzieci (elementow HTML)
var pierwszaSekcja = document.getElementById('sectionFirst');
console.log(pierwszaSekcja.children);

//wyszukanie konkretnego dziecka - jak po tablicy
console.log(pierwszaSekcja.children[2]);

//wyszukanie pierwszego wezla
console.log(pierwszaSekcja.firstChild);

//wyszukane ostatniegoo wezla
console.log(pierwszaSekcja.lastChild);

//wczesniejsze/nastepne rodzenstwo
//element
console.log(document.getElementById('link').nextElementSibling.nodeType);
//Node
console.log(document.getElementById('link').previousSibling.nodeType);

//tworzenie nowych wezlow i dodawanie ich do html
var btn = document.createElement('button');
console.log(btn);

//dodajemy text (node)
var btnTxt = document.createTextNode('Kliknij mnie');
console.log(btnTxt);

// tworzenie atrybutu klasy
var btnClass = document.createAttribute('class');
//ustawianie wartosci dla atrybutu class
btnClass.value = 'btn';
//dodaj btn do body
document.body.appendChild(btn);

//dodaj wezel tekstu do dodanego buttona 
btn.appendChild(btnTxt);

//podpinamy do buttona node z klasa (elementu)
btn.setAttributeNode(btnClass);

btn.setAttribute('title', 'jestem guzikiem');

//var newPar = document.createElement('p');
//function stworzElement(typ, txt, atrybut, wartosc_atrybutu) {
//	var typ = document.createElement(this.typ);
//	var text = document.createTextNode(this.text);
//	var atrybut = document.createAttribute(this.atrybut);
//	arybut.value = this.wartosc_atrybutu;
//	
//	document.body.appendChild(typ);
//	typ.appendChild(text);
//	typ.setAttributeNode(atrybut);
//}
//
//stworzElement('p', 'jestem paragrafem', 'class', 'paragraf');


//usuwanie elementow za pomoca funkcji
btn.removeAttribute('title');

//usuwanie elementow za pomoca wezla
//najpierw do zmiennej przypisujemy wezel z atrybutem, nastepnie go usuwamy
var attrClass = btn.getAttributeNode('class');
btn.removeAttributeNode(attrClass);

//btn.removeAttribute('class');

document.body.removeChild(btn);

//manipulacja DOM
var header = document.getElementById('header');
console.log(header.innerHTML);
header.innerHTML = '<p>Nowa tresc w naglowku</p>';






















