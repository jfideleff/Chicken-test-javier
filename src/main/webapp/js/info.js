$(function(){
	
	var $chickens = $('#chickens');
	
	var farmId = $('#chickens').attr('farmid');
	
	var $nameC = $('#nameC');
	
	var chickenTemplate = $('#chicken-template').html();
	
	function listChicken(chicken){
		$chickens.append(Mustache.render(chickenTemplate,chicken));
	}
	
	//GET
	
	$.ajax({
		type: 'GET',
		url:'/ChickenTest/view/getFarm/'+ farmId,
		success: function(chickens){
			$.each(chickens,function(i,chicken){
				listChicken(chicken);
				});
		},
		error: function(){
			alert('error');
		}
	});
	
	//POST
	
	$('#addChicken').on('click',function(){
		var chicken = {}
		
		$.ajax({
			type: 'POST',
			url: '/ChickenTest/view/addChicken/'+ farmId,
			data: chicken,
			success: function(newChicken){
				listChicken(newChicken);
				},
			error: function(){
				alert('Error');
			}
		});
		
	});
	
	//DELETE
	
	$chickens.delegate('.delete','click',function(){
		
		var $tr = $(this).closest('tr');
		
		$.ajax({
			type:'DELETE',
			url:'/ChickenTest/view/deleteChicken/'+ $(this).attr("id"),
			success:function(){
				$tr.remove();
			},
			error:function(){
				alert('Error');
			}
		});
	});
	
	//PUT
	
	$chickens.delegate('.addEgg','click',function(){
		
		var $tr = $(this).closest('tr');
		
		var chicken = {
				id: $(this).attr('data-id'),
				eggs: $tr.find('span.chickEggs').html()
		};
		
		$.ajax({
			type:'PUT',
			url:'/ChickenTest/view/addEgg/' + farmId,
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(chicken),
			success: function(chicken){
				$tr.find('span.chickEggs').html(chicken.eggs);
				$(this).find('data-eggs').html(chicken.eggs);
			},
			error: function(){
				alert('Error');
			}
		});
		
	});
	
	$chickens.delegate('.editEgg','click',function(){
		var $tr = $(this).closest('tr');
		$tr.find('td.td1').addClass('hide');
		$tr.find('td.td2').removeClass('hide');
		$tr.find('input.chickEggs').removeClass('hide');
		$tr.find('input.chickEggs').val($tr.find('span.chickEggs').html());
		$tr.find('span.chickEggs').addClass('hide');
		$('button.addEgg').attr('disabled','disabled');
		$('button.delete').attr('disabled','disabled');
		$('#addChicken').attr('disabled','disabled');
		$('.editEgg').attr('disabled','disabled');
	});
	
	$chickens.delegate('.cancelEdit','click',function(){
		var $tr = $(this).closest('tr');
		$tr.find('td.td1').removeClass('hide');
		$tr.find('td.td2').addClass('hide');
		$tr.find('input.chickEggs').addClass('hide');
		$tr.find('span.chickEggs').removeClass('hide');
		$('button.addEgg').removeAttr('disabled','disabled');
		$('button.delete').removeAttr('disabled','disabled');
		$('#addChicken').removeAttr('disabled','disabled');
		$('.editEgg').removeAttr('disabled','disabled');
	});
	
	$chickens.delegate('.saveEgg','click',function(){
		
		var $tr = $(this).closest('tr');
		
		var chicken= {
				id: $(this).attr('data-id'),
				eggs: $tr.find('input.chickEggs').val()
		};
		
		$.ajax({
			type: 'PUT',
			url:'/ChickenTest/view/editEgg/' + farmId,
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(chicken),
			success: function(chicken){
				$tr.find('span.chickEggs').html(chicken.eggs);
				$tr.find('td.td1').removeClass('hide');
				$tr.find('td.td2').addClass('hide');
				$tr.find('input.chickEggs').addClass('hide');
				$tr.find('span.chickEggs').removeClass('hide');
				$('button.addEgg').removeAttr('disabled','disabled');
				$('button.delete').removeAttr('disabled','disabled');
				$('#addChicken').removeAttr('disabled','disabled');
				$('.editEgg').removeAttr('disabled','disabled');
			},
			error: function(){
				alert('Error');
			}
		});
		
		
	});
});