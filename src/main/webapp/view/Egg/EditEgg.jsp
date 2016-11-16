<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form:form action="../EditEgg" method="post" modelAttribute="egg">

<form:label path="eggSize">Size: </form:label>
<form:input path="eggSize" value="${egg.eggSize}"/>
<form:hidden path="chicken.id" value="${egg.chicken.id}"/>
<form:hidden path="id" value="${egg.id}"/>
<input type="submit" value="Save" />
</form:form>
<a href="../../Egg/List/${egg.chicken.id}">Back</a>
</body>
</html>