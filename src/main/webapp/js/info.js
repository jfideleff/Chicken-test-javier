$(function(){
	
	var url = window.location.href.toString();
	var parts = url.split("/");
	var farmId = parts[parts.length-1]; 
	
	var $chickens = $('#chickens');
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
});