function fhs(namagame)
{
	var i;
	var x = document.getElementsByClassName("game");
	for (i = 0; i < x.length; i++)
	{
	    x[i].style.display = "none";
	}
	document.getElementById(namagame).style.display = "block" ;
}