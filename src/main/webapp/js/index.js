$(function() {

	var $farms = $('#farms');
	var $nameF = $('#nameF');
	
	var farmTemplate = $('#farm-template').html();
	
	function listFarm(farm){
		$farms.append(Mustache.render(farmTemplate,farm));
	}
	
	//GET farm list
	
	$.ajax({
		type : 'GET',
		url : '/ChickenTest/view/farmList',
		success : function(farms) {
			$.each(farms,function(i,farm){
				listFarm(farm);		
				});
		},
		error : function() {
			alert('Error loading farms')
		}
	});
	
	//Add farm display buttons
	
	$('#showAdd').on('click',function(){
		$('#nameF').val('');
		$('#showAdd').addClass('hide');
		$('#showForm').removeClass('hide');
	});
	
	$('#cancel').on('click',function(){
		$('#showAdd').removeClass('hide');
		$('#showForm').addClass('hide');
		
	});

	//Add Farms
	
	$('#addFarm').on('click',function(){
		var farm = {
				nameF : $nameF.val()
		}
		
		$.ajax({
			type: 'POST',
			url: '/ChickenTest/view/addFarm',
			data: farm,
			success: function(newFarm){
				listFarm(newFarm);
			},
			error: function(){
				alert('Error');
			}
		});
		$('#showAdd').removeClass('hide');
		$('#showForm').addClass('hide');
		
	});
	
	//Delete Farms
	
	$farms.delegate('.deleteFarm','click',function(){
		
		var $tr = $(this).closest('tr');
		
		$.ajax({
			type:'DELETE',
			url:'/ChickenTest/view/deleteFarm/'+ $(this).attr('id'),
			success: function(){
				$tr.remove();
			},
			error: function(){
				alert('Error');
			}
		})
	});
	
	//Edit Farms
	
	$farms.delegate('#editFarm','click',function(){
		$('#name1').addClass('hide');
		$('#name2').removeClass('hide');
		$('#name2').val($('#name1').html());
		$('#td1').addClass('hide');
		$('#td2').removeClass('hide');
	});
	
	$farms.delegate('#cancelEdit','click',function(){
		$('#name2').addClass('hide');
		$('#name1').removeClass('hide');
		$('#td2').addClass('hide');
		$('#td1').removeClass('hide');
	});
	
	$farms.delegate('.saveFarm','click',function(){
		
		var farm = {
				id: $(this).attr('id'),
				nameF: $('#name2').val()
		};
		
		$.ajax({
			type:'PUT',
			url:'/ChickenTest/view/editFarm/'+ $(this).attr('id'),
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(farm),
			success: function(farm){
				$('#name1').html(farm.nameF);
			},
			error: function(){
				alert('Error');
			}
		});
		
		$('#name2').addClass('hide');
		$('#name1').removeClass('hide');
		$('#td2').addClass('hide');
		$('#td1').removeClass('hide');
	});
	
	
	
});