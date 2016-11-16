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
				id: $tr.find('td.chickId').val(),
				eggs: $tr.find('td.chickEggs').val(),
				farm: farmId
		};
		
		$.ajax({
			type:'PUT',
			url:'/ChickenTest/view/addEgg/',
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(chicken),
			success: function(chicken){
				$tr.find('td.chickEggs').html(chicken.eggs);
			},
			error: function(){
				alert('Error');
			}
		});
		
	});
});