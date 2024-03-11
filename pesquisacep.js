$(document).ready(function() {
    $("#buscarCEP").click(function() {
      var cep = $("#cep").val();
      if (cep.trim() != "") {
        $.ajax({
          url: "https://viacep.com.br/ws/" + cep + "/json/",
          type: "GET",
          success: function(response) {
            $("#resultado").html(JSON.stringify(response, null, 2));
          },
          error: function() {
            $("#resultado").html("Erro ao buscar o CEP.");
          }
        });
      } else {
        $("#resultado").html("Por favor, insira um CEP válido.");
      }
    });
  
    $("#buscarCidade").click(function() {
      var cidade = $("#cidade").val();
      if (cidade.trim() != "") {
        $.ajax({
          url: "https://viacep.com.br/ws/" + cidade + "/json/",
          type: "GET",
          success: function(response) {
            $("#resultado").html(JSON.stringify(response, null, 2));
          },
          error: function() {
            $("#resultado").html("Erro ao buscar a cidade.");
          }
        });
      } else {
        $("#resultado").html("Por favor, insira o nome de uma cidade.");
      }
    });
  
    $("#buscarIntervalo").click(function() {
      var cepInicial = $("#cepInicial").val();
      var cepFinal = $("#cepFinal").val();
      if (cepInicial.trim() != "" && cepFinal.trim() != "") {
        $.ajax({
          url: "https://viacep.com.br/ws/" + cepInicial + "/" + cepFinal + "/json/",
          type: "GET",
          success: function(response) {
            $("#resultado").html(JSON.stringify(response, null, 2));
          },
          error: function() {
            $("#resultado").html("Erro ao buscar o intervalo de CEPs.");
          }
        });
      } else {
        $("#resultado").html("Por favor, insira um CEP inicial e um CEP final.");
      }
    });
  });
  