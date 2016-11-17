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
	
	$farms.delegate('.editFarm','click',function(){
		var $tr = $(this).closest('tr');
		$tr.find('td.td1').addClass('hide');
		$tr.find('td.td2').removeClass('hide');
		$tr.find('input.name').removeClass('hide');
		$tr.find('input.name').val($tr.find('span.name').html());
		$tr.find('span.name').addClass('hide');
		
	});
	
	$farms.delegate('.cancelEdit','click',function(){
		var $tr = $(this).closest('tr');
		$tr.find('td.td1').removeClass('hide');
		$tr.find('td.td2').addClass('hide');
		$tr.find('input.name').addClass('hide');
		$tr.find('span.name').removeClass('hide');
	});
	
	$farms.delegate('.saveFarm','click',function(){
		
		var $tr = $(this).closest('tr');
		
		var farm = {
				id: $(this).attr('id'),
				nameF: $tr.find('input.name').val()
		};
		
		$.ajax({
			type:'PUT',
			url:'/ChickenTest/view/editFarm/'+ $(this).attr('id'),
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(farm),
			success: function(farm){
				$tr.find('span.name').html(farm.nameF);
				$tr.find('td.td1').removeClass('hide');
				$tr.find('td.td2').addClass('hide');
				$tr.find('input.name').addClass('hide');
				$tr.find('span.name').removeClass('hide');
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