angular.module("listaTelefonicaApp").filter("name", function() {
	return function(input) {
		var lista = "";

		var listaDeNomes = input.split(" ");
		var listaNomesFormatada = listaDeNomes.map(function(nome) {
			if(/(da|de)/.test(nome)) return nome;
			return nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
			
		});
		return listaNomesFormatada.join(" ");
	};
})