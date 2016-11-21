$(function(){
	
	var $chickens = $('#chickens');
	
	var farmId = $('#chickens').attr('farmid');
	
	var $nameC = $('#nameC');
	
	var $chickenTemplate = $('#chicken-template');
	
	var chickenTemplate = $('#chicken-template').html();
	
	function listChicken(chicken){
		$chickens.append(Mustache.render(chickenTemplate,chicken));
	}
	
	//GET
	
	$.ajax({
		type: 'GET',
		url:'/ChickenTest/getFarm/'+ farmId,
		success: function(chickens){
			$.each(chickens,function(i,chicken){
				listChicken(chicken);
				});
		},
		error: function(){
			alert('error');
		}
	});
	
	/*$.ajax({
		type:'GET',
		url:'/ChickenTest/getFarm/'+ farmId,
		success: function (chickens){
			if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)))
				{
					$.each(chickens,function(i,chicken){
						$chickens.append('<tr class="canBeRemove"><td>'+chicken.id+'</td><td><span class="chickEggs">'+chicken.eggs+'</span><input class="chickEggs hide"></td><td><button class="addEgg btn btn-default " data-id="'+chicken.id+'" data-eggs="'+chicken.eggs+'">Add</button></td><td><button class="delete btn btn-default" id="'+chicken.id+'">Delete</button></td><td class="td1"><button class="editEgg btn btn-default">Edit</button></td><td class="td2 hide"><button class="saveEgg btn btn-default" data-id="'+chicken.id+'">Save</button><button class="cancelEdit btn btn-default">Cancel</button></td></tr>');
					});
				}
			else
				{
				$.each(chickens,function(i,chicken){
					listChicken(chicken);
					});
				}
		},
		error: function(){
			alert('Error');
		}
	});*/
	
	//POST
	
	$('#addChicken').on('click',function(){
		var chicken = {}
		
		$.ajax({
			type: 'POST',
			url: '/ChickenTest/addChicken/'+ farmId,
			data: chicken,
			success: function(newChicken){
				listChicken(newChicken);
				},
			error: function(){
				alert('Error');
			}
		});
		
	});
	
	/*$('#addChicken').on('click',function(){
		var chicken = {}
		
		$.ajax({
			type:'POST',
			url: '/ChickenTest/addChicken/'+ farmId,
			data: chicken,
			success:function(newChicken){
				if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)))
					{
					$chickens.append('<tr class="canBeRemove"><td>'+newChicken.id+'</td><td><span class="chickEggs">'+newChicken.eggs+'</span><input class="chickEggs hide"></td><td><button class="addEgg btn btn-default " data-id="'+newChicken.id+'" data-eggs="'+newChicken.eggs+'">Add</button></td><td><button class="delete btn btn-default" id="'+newChicken.id+'">Delete</button></td><td class="td1"><button class="editEgg btn btn-default">Edit</button></td><td class="td2 hide"><button class="saveEgg btn btn-default" data-id="'+newChicken.id+'">Save</button><button class="cancelEdit btn btn-default">Cancel</button></td></tr>');
					}
				else
					{
					listChicken(newChicken);
					}
			},
			error: function(){
				alert('Error');
			}
		});
	});*/
	
	//DELETE
	
	$chickens.delegate('.delete','click',function(){
		
		var $tr = $(this).closest('tr');
		
		$.ajax({
			type:'DELETE',
			url:'/ChickenTest/deleteChicken/'+ $(this).attr("id"),
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
			url:'/ChickenTest/addEgg/' + farmId,
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
			url:'/ChickenTest/editEgg/' + farmId,
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