<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/js/Style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container">
<h2>Farms</h2>
<button id="showAdd" class="btn btn-default">Add Farm</button>
		<div id="showForm" class="hide">
		<label>Name: </label><input class="form-control" id="nameF">
			<button id="addFarm" class="btn btn-default">Add</button>
			<button id="cancel" class="btn btn-default">Cancel</button>
		</div>
		<br><br>
		<table id="farms" class="table">
			<tr>
				<th>Name</th>
				<th># of Chickens</th>
				<th>Info</th>
				<th>Delete</th>
				<th>Edit</th>
			</tr>
		</table>
		
	</div>
	
<!----------------------Templates-------------------------------------------------------->

<template id="farm-template">
<tr>
<td>
<span class="name">{{nameF}}</span>
<input class="name hide">
</td>
<td>
{{chickenList.length}}
</td>
<td>
<a href="<%=request.getContextPath()%>/info/{{id}}"><button class="btn btn-default">Info</button></a>
</td>
<td>
<button class="deleteFarm btn btn-default" id='{{id}}'>Delete</button>
</td>
<td class="td1">
<button class="editFarm btn btn-default">Edit</button>
</td>
<td class="td2 hide">
<button class="saveFarm btn btn-default" id='{{id}}'>Save</button>
<button class="cancelEdit btn btn-default">Cancel</button>
</td>
</tr>
</template>

<!----------------------Jquery & AJAX-------------------------------------------------------->
	<script
	src="https://ajax.googleapis.com/ajax/
libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/mustache.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/index.js"></script>
</body>
</html>