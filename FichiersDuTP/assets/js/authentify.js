"use strict";

$(function(){
	// validation formulaire -----> Login
	/*$("#login").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorLogin");
		var valid = $("#loginOk");
		validationAlpha(saisie, error, valid);
	});*/
	
	/*$("#passwordLog").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorPasswordLog");
		var valid = $("#passwordOkLog");
		validationAlphaNumerique(saisie, error, valid);
	});*/
	
	$("#connecter").click(function(){
		/*var nbrElements = 0;
		var nbrOk = 0;
		$("#formLogin .spanValid").each(function(){
			nbrElements++;

			if($(this).html() == "Ok"){
				nbrOk++;
			}
		});

		if(nbrElements == nbrOk){
			$("#formLogin").submit();
		}*/
		console.log("fct connecter as été lancée");
		
		var xhr = getXhr();
		var element;
		var queryString="?";
		// On défini ce qu'on va faire quand on aura la réponse
		xhr.onreadystatechange = function(){
			// On ne fait quelque chose que si on a tout reçu et que le serveur est ok
			if(xhr.readyState == 4 && xhr.status == 200){
				//alert(xhr.responseText);
			}
		}
		
		element = document.getElementById("login");
		queryString += "login=" + element.value;
		element = document.getElementById("passwordLog");
		queryString +="&amp;passwordLog=" + element.value;
		console.log(queryString);
		//xhr.open("GET","ajax.php",true);
		//xhr.send(null);
		
		//return false;
	});

	// validation formulaire -----> Register
	$("#passwordRegConfirm").keyup(function(){
		var pwd = $("#passwordReg").val();
		
		if($(this).val() == pwd){
			$(this).addClass("passwordValid");
			$(this).removeClass("passwordInvalid");
		}else{
			$(this).addClass("passwordInvalid");
			$(this).removeClass("passwordValid");
		}
	});

	$("#passwordRegConfirm").blur(function(){
		var pwd = $("#passwordReg").val();
		
		if($(this).val() == pwd){
			$("#passwordRegConfirmError").text("");
		}else{
			$("#passwordRegConfirmError").text("Les mots de passe ne correspondent pas.");
		}
	});	
	
	/*$("#nomReg").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorNomReg");
		var valid = $("#nomOk");
		validationAlpha(saisie, error, valid);
	});*/

	/*$("#prenomReg").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorPrenomReg");
		var valid = $("#prenomOk");
		validationAlpha(saisie, error, valid);
	});*/

	/*$("#nomFamilleReg").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorNomFamilleReg");
		var valid = $("#nomFamilleOk");
		validationAlpha(saisie, error, valid);
	});*/

	/*$("#adresse").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorAdresse");
		var valid = $("#adresseOk");
		validationAlphaNumSpace(saisie, error, valid);
	});*/

	// validation password
	/*$("#passwordReg").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorPasswordReg");
		var valid = $("#passwordOkReg");
		validationAlphaNumerique(saisie, error, valid);
	});*/

	/*$("#email").blur(function(){
		var saisie = $(this).val();
		var error = $("#errorEmail");
		var valid = $("#emailOk");
		validationCourriel(saisie, error, valid);
	});*/

	/*$("#register").click(function(){
		var nbrElements = 0;
		var nbrOk = 0;
		$("#formRegister .spanValid").each(function(){
			nbrElements++;

			if($(this).html() == "Ok"){
				nbrOk++;
			}
		});

		if(nbrElements == nbrOk){
			$("#formRegister").submit();
		}
	});*/
});

// Fonctions générique de validation des champs pour un formulaire
/*function validationAlpha(saisie, error, valid){
		if(saisie.match(/^[a-zA-Z]+$/)){
			$(valid).text("Ok");
			$(error).text("");
		}
		else if(saisie == ""){
			$(error).text("");
			$(valid).text("");
		}
		else{
			$(error).text("* Veuillez entrer des lettres seulement");
			$(valid).text("");
		}
	}
*/
/*
function validationAlphaNumerique(saisie, error, valid){
	if(saisie.match(/^[a-zA-Z0-9]+$/)){
		$(valid).text("Ok");
			$(error).text("");
		}
		else if(saisie == ""){
			$(error).text("");
			$(valid).text("");
		}
		else{
			$(error).text("* Aucun caractère spéciaux permis !");
			$(valid).text("");
		}
}
*/
/*
function validationAlphaNumSpace(saisie, error, valid){
	if(saisie.match(/^[a-zA-Z0-9\s]+$/)){
		$(valid).text("Ok");
			$(error).text("");
		}
		else if(saisie == ""){
			$(error).text("");
			$(valid).text("");
		}
		else{
			$(error).text("* Aucun caractère spéciaux permis !");
			$(valid).text("");
		}
}
*/
/*
function validationCourriel(saisie, error, valid){
	if(saisie.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
		$(valid).text("Ok");
		$(error).text("");
		}
		else if(saisie == ""){
			$(error).text("");
			$(valid).text("");
		}
		else{
			$(error).text("* La forme doit être 'nom@domaine.com' !");
			$(valid).text("");
		}
}
*/
/* == EOF == */
