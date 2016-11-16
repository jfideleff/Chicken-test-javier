$(function(){
	
	var $chickens = $('#chickens');
	
	var farmId2 = $('#chickens').attr('farmid');
	
	var $nameC = $('#nameC');
	
	var chickenTemplate = $('#chicken-template').html();
	
	function listChicken(chicken){
		$chickens.append(Mustache.render(chickenTemplate,chicken));
	}
	
	//GET
	
	$.ajax({
		type: 'GET',
		url:'/ChickenTest/view/getFarm/'+ farmId2,
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
			url: '/ChickenTest/view/addChicken/'+ farmId2,
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
});