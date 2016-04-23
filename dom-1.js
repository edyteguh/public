<!doctype html>
<html>
	<head>
		<title>JS Programmer's reference</title>
	</head>
	<body>
	<p id="myParagraph">This is my paragraph!</p>
	<span class="hideme">Lorem ipsum</span>
	dolor sit amet.
	<span></span>
	</p>
	<p class="sideme">
		Another paragraph!
	</p>
	<script>
	var myPar = document.getElementById("myParagraph");
	myPar.innerText = "I have changed the content!";
	</script>
	</body>
</html>