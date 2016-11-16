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
	<a href="<%=request.getContextPath()%>/Farm/NewFarm">New Farm</a>
	<table>
		<tr>
			<td>Farms</td>
			<td>Number of Chicken</td>
		</tr>
		<c:if test="${!empty farmList}">
			<c:forEach items="${ farmList}" var="item">
				<tr>
					<td><c:out value="${item.nameF}"></c:out></td>
					<td><c:out value="${item.chickenList.size()}"></c:out></td>
					<td><a href="../Chicken/List/${item.id}">See Chickens</a></td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty farmList}">
			<tr>
				<td colspan="5">No information at the moment</td>
			</tr>
		</c:if>
	</table>
</body>
</html>