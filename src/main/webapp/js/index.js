$(function() {

	var $farms = $('#farms');
	var $nameF = $('#nameF');
	var token = $("meta[name='_csrf']").attr("content");
	var header = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
	
	var farmTemplate = $('#farm-template').html();
	
	function listFarm(farm){
		$farms.append(Mustache.render(farmTemplate,farm));
	}
	
	//GET farm list
	
	$.ajax({
		type : 'GET',
		url : '/ChickenTest/farmList',
		success : function(farms) {
			$.each(farms,function(i,farm){
				listFarm(farm);		
				});
		},
		error : function() {
			alert('Error loading farms');
		}
	});
	
	//Add farm display buttons
	
	$('#showAdd').on('click',function(){
		$('#nameF').val('');
		$('#showAdd').addClass('hide');
		$('#showForm').removeClass('hide');
		$('button.deleteFarm').attr('disabled','disabled');
		$('a.info').attr('disabled','disabled');
		$('.editFarm').attr('disabled','disabled');
	});
	
	$('#cancel').on('click',function(){
		$('#showAdd').removeClass('hide');
		$('#showForm').addClass('hide');
		$('button.deleteFarm').removeAttr('disabled','disabled');
		$('a.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
		$('.empty').addClass('hide')
		
	});

	//Add Farms
	
	$('#addFarm').on('click',function(){
		
		var $div = $(this).closest('div');
		
		var farm = {
				nameF : $nameF.val()
		}
		
		if($nameF.val().trim()==""){
			$div.find('span.empty').removeClass('hide');
		}else{
			$.ajax({
			type: 'POST',
			url: '/ChickenTest/addFarm',
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
		$('button.deleteFarm').removeAttr('disabled','disabled');
		$('a.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
		$div.find('span.empty').addClass('hide');
		
		
		}
			
	});
	
	//Delete Farms
	
	$farms.delegate('.deleteFarm','click',function(){
		
		var $tr = $(this).closest('tr');
		
		$.ajax({
			type:'DELETE',
			url:'/ChickenTest/deleteFarm/'+ $(this).attr('id'),
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
		$('button.deleteFarm').attr('disabled','disabled');
		$('#showAdd').attr('disabled','disabled');
		$('a.info').attr('disabled','disabled');
		$('.editFarm').attr('disabled','disabled');
		
	});
	
	$farms.delegate('.cancelEdit','click',function(){
		var $tr = $(this).closest('tr');
		$tr.find('td.td1').removeClass('hide');
		$tr.find('td.td2').addClass('hide');
		$tr.find('input.name').addClass('hide');
		$tr.find('span.name').removeClass('hide');
		$('button.deleteFarm').removeAttr('disabled','disabled');
		$('#showAdd').removeAttr('disabled','disabled');
		$('a.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
		$('span.empty').addClass('hide');
	});
	
	$farms.delegate('.saveFarm','click',function(){
		
		var $tr = $(this).closest('tr');
		
		var farm = {
				id: $(this).attr('id'),
				nameF: $tr.find('input.name').val()
		};
		
		if($tr.find('input.name').val().trim()==""){
			$tr.find('span.empty').removeClass('hide');
		}else{
		
		$.ajax({
			type:'PUT',
			url:'/ChickenTest/editFarm/'+ $(this).attr('id'),
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify(farm),
			success: function(farm){
				$tr.find('span.name').html(farm.nameF);
				$tr.find('td.td1').removeClass('hide');
				$tr.find('td.td2').addClass('hide');
				$tr.find('input.name').addClass('hide');
				$tr.find('span.name').removeClass('hide');
				$('button.deleteFarm').removeAttr('disabled','disabled');
				$('#showAdd').removeAttr('disabled','disabled');
				$('a.info').removeAttr('disabled','disabled');
				$('.editFarm').removeAttr('disabled','disabled');
			},
			error: function(){
				alert('Error');
			}
		});
		
		$('#name2').addClass('hide');
		$('#name1').removeClass('hide');
		$('#td2').addClass('hide');
		$('#td1').removeClass('hide');
		$('span.empty').addClass('hide');
		}
	});
	
	
	
});