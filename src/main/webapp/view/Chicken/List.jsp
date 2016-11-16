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
<a href="<%=request.getContextPath()%>/Chicken/NewChicken/${farm.id}">New Chicken</a>
<table>
		<tr>
			<td>Chickens</td>
			<td>Eggs</td>
		</tr>
		<c:if test="${!empty list}">
			<c:forEach items="${ list}" var="item">
				<tr>
					<td><c:out value="${item.nameC}"></c:out></td>
					<td><a href="../../Egg/List/${item.id}"><c:out value="${item.countEggs()}"></c:out></a></td>
					<td><a href="../Delete/${item.id}">Delete</a></td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty list}">
			<tr>
				<td colspan="5">No information at the moment</td>
			</tr>
		</c:if>
	</table>
	<a href="../../Farm/">Back</a>
</body>
</html>