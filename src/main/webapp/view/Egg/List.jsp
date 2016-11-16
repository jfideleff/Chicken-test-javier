<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!-- Import de JSTL para utilizar los tags de Java  -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<a href="<%=request.getContextPath()%>/Egg/NewEgg/${chicken.id}">New
		Egg</a>
	<table>
		<tr>
			<td>Egg Id</td>
			<td>Size</td>
		</tr>
		<c:if test="${!empty list}">
			<c:forEach items="${ list}" var="item">
				<tr>
					<td><c:out value="${item.id}"></c:out></td>
					<td><c:out value="${item.eggSize}"></c:out></td>
					<td><a href="../EditEgg/${item.id}">Edit</a></td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty list}">
			<tr>
				<td colspan="5">No information at the moment</td>
			</tr>
		</c:if>
	</table>
	<a href="../../Chicken/List/${chicken.farm.id}">Back</a>
</body>
</html>