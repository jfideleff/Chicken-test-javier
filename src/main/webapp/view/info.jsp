<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/Style.css" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h2>Chickens</h2>
		<button id="addChicken" class="btn btn-default">Add Chicken</button>
		<br>
		<br>
		<table id="chickens" class="table" farmid="${farm.id}">
			<tr>
				<th>Chicken Id</th>
				<th># of Eggs</th>
				<th>Add Egg</th>
				<th>Delete</th>
				<th>Edit</th>
			</tr>
		</table>
		<br> <a class="btn btn-default" href="<%=request.getContextPath()%>/">Volver</a>

	</div>

	<div class="hide">
	<template id="chicken-template">
	<tr class="canBeRemove">
		<td>{{id}}</td>
		<td>
		<span class="chickEggs">{{eggs}}</span>
		<input class="chickEggs hide">
		</td>
		<td><button class="addEgg btn btn-default " data-id='{{id}}'
				data-eggs='{{eggs}}'>Add</button></td>
		<td><button class="delete btn btn-default" id='{{id}}'>Delete</button></td>
		<td class="td1">
			<button class="editEgg btn btn-default">Edit</button>
		</td>
		<td class="td2 hide">
			<button class="saveEgg btn btn-default" data-id='{{id}}'>Save</button>
			<button class="cancelEdit btn btn-default">Cancel</button>
		</td>
	</tr>
	</template>
	</div>
	<!----------------------Jquery & AJAX-------------------------------------------------------->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<!-- <script
		src="https://ajax.googleapis.com/ajax/
libs/jquery/3.1.1/jquery.min.js"></script> -->
<script src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/mustache.min.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/info.js"></script>
</body>
</html>