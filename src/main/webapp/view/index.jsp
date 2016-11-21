<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/js/Style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><spring:message code="test.farmTittle"></spring:message></title>
</head>
<body>
<a href="<%=request.getContextPath()%>/?lenguage=en">Eng</a> | <a href="<%=request.getContextPath()%>/?lenguage=es">Spa</a>
<div class="container">
<h2><spring:message code="test.farm"></spring:message></h2>
<button id="showAdd" class="btn btn-default"><spring:message code="test.newFarm"></spring:message></button>
		<div id="showForm" class="hide">
		<label><spring:message code="test.farmName"></spring:message></label><input class="form-control" id="nameF">
			<button id="addFarm" class="btn btn-default"><spring:message code="test.addFarm"></spring:message></button>
			<button id="cancel" class="btn btn-default"><spring:message code="test.cancelFarm"></spring:message></button>
		</div>
		<br><br>
		<table id="farms" class="table table-striped">
			<tr>
				<th><spring:message code="test.farmNameTable"></spring:message></th>
				<th><spring:message code="test.farmChickenNumberTable"></spring:message></th>
				<th><spring:message code="test.farmInfoTable"></spring:message></th>
				<th><spring:message code ="test.farmDelete"></spring:message></th>
				<th><spring:message code="test.farmEdit"></spring:message></th>
			</tr>
		</table>
		
	</div>
	
<!----------------------Templates-------------------------------------------------------->
<div class="hide">
<script type="text/x-mustache-tmpl" id="farm-template">
<tbody>
<tr>
<td>
<span class="name">{{nameF}}</span>
<input class="name hide">
</td>
<td>
{{chickenList.length}}
</td>
<td>
<a class="info btn btn-default" href="<%=request.getContextPath()%>/info/{{id}}"><spring:message code="test.farmInfo"></spring:message></a>
</td>
<td>
<button class="deleteFarm btn btn-default" id='{{id}}'><spring:message code="test.farmDelete"></spring:message></button>
</td>
<td class="td1">
<button class="editFarm btn btn-default"><spring:message code="test.farmEdit"></spring:message></button>
</td>
<td class="td2 hide">
<button class="saveFarm btn btn-default" id='{{id}}'><spring:message code="test.addFarm"></spring:message></button>
<button class="cancelEdit btn btn-default"><spring:message code="test.cancelFarm"></spring:message></button>
</td>
</tr>
</tbody>
</script>
</div>
<!----------------------Jquery & AJAX-------------------------------------------------------->
	<!-- <script
	src="https://ajax.googleapis.com/ajax/
libs/jquery/3.1.1/jquery.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/mustache.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/index.js"></script>
</body>
</html>