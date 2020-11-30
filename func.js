$(function(){
			$(".btn-add").click(function(){
				var el = '<div class="anotacao-single"><textarea placeholder="sua nova anotação"></textarea></div>';
				$('.container-anotacoes').append(el);


					var textArea = $('.anotacao-single').last().find('textarea');

					var date = new Date();
					var hh = date.getHours();
					var mm = date.getMinutes();

					var finalTime = hh+":"+mm;

					textArea.html('Nova anotação as '+finalTime);

			})

			$(".btn-add").click(function(){
				var bt = '<button>Salvar</button>';

					$('.butao').append(bt);

					$('button').click(function(){
						var al = '<div class="alerta-texto"><h3>Sua anotação foi salva com sucesso!</h3></div>';

						$('.alerta').append(al);
					})
			})

		})