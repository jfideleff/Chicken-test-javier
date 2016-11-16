<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/js/Style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div>
		<h2>Chickens</h2>
		<button id="addChicken">Add Chicken</button>
		<br><br>
		<table id="chickens" border="1">
			<tr>
				<td>Chicken Id</td>
				<td># of Eggs</td>
				<td>Show Eggs</td>
				<td>Delete</td>
			</tr>
		</table>
		<br>
		<a href="<%=request.getContextPath()%>/">Volver</a>
		
	</div>
	
	<template id="chicken-template">
	<tr class="canBeRemove">
	<td>{{id}}</td>
	<td>{{eggsList.length}}</td>
	<td>
	<a href="<%=request.getContextPath()%>/eggs/{{id}}"><button>--></button></a>
	</td>
	<td><button class="delete" id='{{id}}'>X</button></td>
	</tr>
	</template>
<!----------------------Jquery & AJAX-------------------------------------------------------->
	<script
	src="https://ajax.googleapis.com/ajax/
libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/mustache.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/info.js"></script>
</body>
</html>