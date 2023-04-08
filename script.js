function validaCPF(cpf) {
	if (cpf.length != 11) {
		return false;
	} else {

		//checks if all numbers are the same
		let arrayCpf = cpf.split("");
		if(arrayCpf.every(number => number === arrayCpf[0])){
			return false;
		}

		let numbers = cpf.substring(0, 9);
		let digits = cpf.substring(9);

		//First digit validation
		let sum = 0;
		for (let i = 10; i > 1; i--) {
			sum += numbers.charAt(10 - i) * i;
        }

		let firstDigitResult = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

		if (firstDigitResult != digits.charAt(0)) {
			return false;
        }
        
		//Second digit validation
		sum = 0;
		numbers = cpf.substring(0, 10);

		for (let i = 11; i > 1; i--) {
			sum += numbers.charAt(11 - i) * i;
        }

		let secondDigitResult = sum % 11 < 2 ? 0 : 11 - (sum % 11);

		if (secondDigitResult != digits.charAt(1)) {
			return false;
		}

		return true;
	}
}

function cpfValidation(e) {
	e.preventDefault();
    
	console.log("Iniciando validação de CPF");
	document.getElementById('error').style.display = 'none';
	document.getElementById('success').style.display = 'none';

	let cpfInput = document.getElementById("cpf_digitado").value;

    //Regex to remove all non-number characters
    let cpf = cpfInput.replace(/\D/g, '');

	let resultadoValidacao = validaCPF(cpf);

	resultadoValidacao ? document.getElementById('success').style.display = 'block' : document.getElementById('error').style.display = 'block';
}