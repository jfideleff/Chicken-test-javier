$(function() {

	var $farms = $('#farms');
	var $nameF = $('#nameF');
	
	var farmTemplate = $('#farm-template').html();
	
	function listFarm(farm){
		$farms.append(Mustache.render(farmTemplate,farm));
	}
	
	//GET farm list
	
	/*$.ajax({
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
	});*/
	
	$.ajax({
		type : 'GET',
		url : '/ChickenTest/view/farmList',
		success : function(farms) {
			if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)))
			{
				$.each(farms,function(i,farm){
					$farms.append('<tr><td><span class="name">'+ farm.nameF +'</span><input class="name hide"></td><td>'+farm.chickenList.length+'</td><td><a class="info btn btn-default" href="/ChickenTest/info/'+farm.id+'">Info</a></td><td><button class="deleteFarm btn btn-default" id="'+ farm.id+'">Delete</button></td><td class="td1"><button class="editFarm btn btn-default">Edit</button></td><td class="td2 hide"><button class="saveFarm btn btn-default" id="'+farm.id+'">Save</button><button class="cancelEdit btn btn-default">Cancel</button></td></tr>');
				});
			}else{
				$.each(farms,function(i,farm){
					listFarm(farm);		
					});
			}
			
		},
		error:function(){
			alert('Error');
		}
	});
	
	//Add farm display buttons
	
	$('#showAdd').on('click',function(){
		$('#nameF').val('');
		$('#showAdd').addClass('hide');
		$('#showForm').removeClass('hide');
		$('button.deleteFarm').attr('disabled','disabled');
		$('button.info').attr('disabled','disabled');
		$('.editFarm').attr('disabled','disabled');
	});
	
	$('#cancel').on('click',function(){
		$('#showAdd').removeClass('hide');
		$('#showForm').addClass('hide');
		$('button.deleteFarm').removeAttr('disabled','disabled');
		$('button.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
		
	});

	//Add Farms
	
	$('#addFarm').on('click',function(){
		
		var farm = {
				nameF : $nameF.val()
		}
		
		/*$.ajax({
			type: 'POST',
			url: '/ChickenTest/view/addFarm',
			data: farm,
			success: function(newFarm){
				listFarm(newFarm);
			},
			error: function(){
				alert('Error');
			}
		});*/
		
		$.ajax({
			type:'POST',
			url:'/ChickenTest/view/addFarm',
			data: farm,
			success : function(newfarm) {
				if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)))
				{
					$farms.append('<tr><td><span class="name">'+ newfarm.nameF +'</span><input class="name hide"></td><td>'+newfarm.chickenList.length+'</td><td><a href="/ChickenTest/info/'+newfarm.id+'" class="info btn btn-default">Info</a></td><td><button class="deleteFarm btn btn-default" id="'+ newfarm.id+'">Delete</button></td><td class="td1"><button class="editFarm btn btn-default">Edit</button></td><td class="td2 hide"><button class="saveFarm btn btn-default" id="'+newfarm.id+'">Save</button><button class="cancelEdit btn btn-default">Cancel</button></td></tr>');
				}else{
					listFarm(newfarm);
				}	
			},
			error:function(){
				alert('Error');
			}
		});
		
		$('#showAdd').removeClass('hide');
		$('#showForm').addClass('hide');
		$('button.deleteFarm').removeAttr('disabled','disabled');
		$('button.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
		
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
		$('button.deleteFarm').attr('disabled','disabled');
		$('#showAdd').attr('disabled','disabled');
		$('button.info').attr('disabled','disabled');
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
		$('button.info').removeAttr('disabled','disabled');
		$('.editFarm').removeAttr('disabled','disabled');
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
				$('button.deleteFarm').removeAttr('disabled','disabled');
				$('#showAdd').removeAttr('disabled','disabled');
				$('button.info').removeAttr('disabled','disabled');
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
	});
	
	
	
});