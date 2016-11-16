<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
<form:form action="../NewChicken" method="post" modelAttribute="newChicken">

<form:label path="nameC">Name: </form:label>
<form:input path="nameC" required="required"/>
<form:hidden path="farm.id" value="${farm.id}"/>
<input type="submit" value="Save" id="save" />
</form:form>
<a href="../../Chicken/List/${farm.id}">Back</a>

<script type="text/javascript">
	$("#save").hover(function(){
		$(this).css('background-color','black');
	},
	function(){
		$(this).css('background-color','red')
	});
</script>
</body>
</html>