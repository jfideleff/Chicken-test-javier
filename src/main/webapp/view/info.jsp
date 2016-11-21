<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/Style.css" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><spring:message code="test.farmTittle"></spring:message></title>
</head>
<body>
	<div class="container">
		<h2><spring:message code="test.chicken"></spring:message></h2>
		<button id="addChicken" class="btn btn-default"><spring:message code="test.newChicken"></spring:message></button>
		<br>
		<br>
		<table id="chickens" class="table" farmid="${farm.id}">
			<tr>
				<th><spring:message code="test.chickenIdTable"></spring:message></th>
				<th><spring:message code="test.chickenEggsTable"></spring:message></th>
				<th><spring:message code="test.chickenAddEggTable"></spring:message></th>
				<th><spring:message code="test.chickenDeleteTable"></spring:message></th>
				<th><spring:message code="test.chickenEditTable"></spring:message></th>
			</tr>
		</table>
		<br> <a class="btn btn-default" href="<%=request.getContextPath()%>/"><spring:message code="test.back"></spring:message></a>

	</div>
<!----------------------Templates-------------------------------------------------------->
	<script type="text/x-mustache-tmpl" id="chicken-template">
	<tbody>
	<tr class="canBeRemove">
		<td>{{id}}</td>
		<td>
		<span class="chickEggs">{{eggs}}</span>
		<input class="chickEggs hide">
		<span class="empty hide"><spring:message code="test.empty2"></spring:message></span>	
		</td>
		<td><button class="addEgg btn btn-default " data-id='{{id}}'
				data-eggs='{{eggs}}'><spring:message code="test.chickenAddEgg"></spring:message></button></td>
		<td><button class="delete btn btn-default" id='{{id}}'><spring:message code ="test.farmDelete"></spring:message></button></td>
		<td class="td1">
			<button class="editEgg btn btn-default"><spring:message code="test.farmEdit"></spring:message></button>
		</td>
		<td class="td2 hide">
			<button class="saveEgg btn btn-default" data-id='{{id}}'><spring:message code="test.addFarm"></spring:message></button>
			<button class="cancelEdit btn btn-default"><spring:message code="test.cancelFarm"></spring:message></button>
		</td>
	</tr>
	</tbody>
	</script>
	
	<!----------------------Jquery & AJAX-------------------------------------------------------->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/mustache.min.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/info.js"></script>
</body>
</html>