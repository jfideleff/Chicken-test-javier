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
<div id="asd">
<h2>Farms</h2>
<button id="showAdd">Add Farm</button>
		<div id="showForm" class="hide">
			<span>Name: </span><input id="nameF">
			<button id="addFarm">Add</button>
			<button id="cancel">Cancel</button>
		</div>
		<br><br>
		<table id="farms" border="1">
			<tr>
				<td>Name</td>
				<td># of Chickens</td>
				<td>Info</td>
				<td>Delete</td>
				<td>Edit</td>
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
<a href="<%=request.getContextPath()%>/info/{{id}}"><button>--></button></a>
</td>
<td>
<button class="deleteFarm" id='{{id}}'>X</button>
</td>
<td class="td1">
<button class="editFarm">Edit</button>
</td>
<td class="td2 hide">
<button class="saveFarm" id='{{id}}'>Save</button>
<button class="cancelEdit">Cancel</button>
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