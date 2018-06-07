$(function() {

	var numero = 0;

$('.box_tweet').on('click','#like', function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).toggleClass('red_heart');
		var target = $(this).parents('.tweet').find('.icons').children('.contador')
		var numero = parseInt(target.text())

		if ($(this).hasClass('red_heart')){
			numero++ 
		} else {
			numero--
		}

		target.text(numero)
	})

// var target = $(this).parent().find('.social__element').eq(1).children('.social__number')

$('#mi_form').on('submit', function (e){
	e.preventDefault();
	var text = $('#exampleFormControlTextarea1').val();
	var nombre = $('.nombre_avatar').val();
	var content = `<div class="tweet">
				<div class="avatar"></div>
				<div class="nombre_avatar">Paz Romero</div>
				${nombre, text}
				<div class="icons">
				<a class="heart" href="#">
				<i id="like" class="fas fa-heart"></i>
				</a>
				<div class="contador">${numero}</div>
				<a class="delete" href="#">
				<i id="trash"  class="fas fa-trash-alt"></i>
				</a>
				</div></div>`
	$('#exampleFormControlTextarea1').val('');
	$('#exampleFormControlTextarea1').focus();
	$('.box_titulo').append(content);
	$('.box_tweet').on('click', '#trash', function(e){
		e.stopPropagation();
		e.preventDefault();
	 	$(this).parents('.tweet').fadeOut();//Obtienes el tweet (parents, porque es el padre del padre) apartir del trash.
	});

});

});

