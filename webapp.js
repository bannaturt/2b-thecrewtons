// JavaScript Document

// global variables
var money = 0;
var trees = 1;
var land = 5;
var slaves = 0;
var Big_Bois = 0;
var tree_price = 1;
var land_price = 10;
var slave_price = 5;
var Big_Bois_price = 1000;

function crouton_click() {
	money += trees;
	update_values();
}

window.onload = function() {
	// load cookies (if they exist)
	
	// setinterval to start bonus() repeating...
	setInterval(bonus, 1000);
	// update values
	update_values();
	// add event listeners
	document.getElementById("tree").addEventListener("click", crouton_click);
	document.getElementById("moretrees").addEventListener("click", buy_trees);
	document.getElementById("moreland").addEventListener("click", buy_land);
	document.getElementById("moreslaves").addEventListener("click", buy_slaves);
	document.getElementById("moreBig_Bois").addEventListener("click", buy_Big_Bois);
};

// runs every second
function bonus() {
	//alert ("yaythebonusworked");
	money += Big_Bois*slaves*trees;
	update_values();
}

function buy_land() {
	if( money >= land_price ) {
		money -= land_price;
		land += 5;
		land_price = (land_price * 1.1).toFixed(2);
	}
	else if( money < land_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function buy_trees() {
	//alert("money: " + money + "\ntrees: " + trees + "\nland: " + land);
	if( money >= tree_price && trees < land ) {
		money -= tree_price;
		trees++;
	}
	else if( trees >= land ) {
		alert ("You do not have enough land");
	}
	else if( money < tree_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function buy_slaves() {
	if( money >= slave_price) {
		money -= slave_price;
		slaves++;
	}
	else if( money < slave_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function buy_Big_Bois() {
	if( money >= Big_Bois_price) {
		money -= Big_Bois_price;
		Big_Bois++;
		Big_Bois_price= Big_Bois_price*10
	}
	else if( money < Big_Bois_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function update_values() {
	document.getElementById("score").value = "$" + money.toFixed(2);
	document.getElementById("trees").value = trees;
	document.getElementById("land").value = land;
	document.getElementById("slaves").value = slaves;
	document.getElementById("Big_Bois").value = Big_Bois;
	document.getElementById("moretrees").innerHTML = "Buy More Trees $" + tree_price;
	document.getElementById("moreland").innerHTML = "Buy More Land $" + land_price;
	document.getElementById("moreslaves").innerHTML = "Buy More Slaves $" + slave_price;
	document.getElementById("moreBig_Bois").innerHTML = "Buy More Big_Bois $" + Big_Bois_price;

}