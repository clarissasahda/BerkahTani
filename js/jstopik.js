
function kliked() {
	document.getElementById('popup1').style.display='block'
}
function tutup1() {
	document.getElementById('popup1').style.display="none";
}
var closed=document.getElementById('popup1');
window.onclick = function(event){
	if (event.target == closed) {
		document.getElementById('popup1').style.display="none";
	}
}
function input() {
	document.getElementById('popup2').style.display='block'
}
function tutup2() {
	document.getElementById('popup2').style.display="none";
}
var closed=document.getElementById('popup2');
window.onclick = function(event){
	if (event.target == closed) {
		document.getElementById('popup2').style.display="none";
	}
}
var list1 = [];
var list2 = [];

var n = 1;
var x = 0;

function terimainput(){
	document.getElementsByClassName('kirim')
	alert('Komentar akan dikirimkan')

    var TambahBaris = document.getElementById('inputan');
    var BarisBaru =TambahBaris.insertRow(n);

    list1[x] = document.getElementById("inputNama").value;
    list2[x] = document.getElementById("inputKomen").value;

    var cell1 = BarisBaru.insertCell(0);
    var cell2 = BarisBaru.insertCell(1);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    alert("Komentar disimpan!")
}

