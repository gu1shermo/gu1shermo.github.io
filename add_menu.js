// JavaScript code to include HTML content
var htmlContent = "<nav>";
htmlContent+= "<ul class=\"menu\">";
htmlContent+= "<li><a href=\"./index.html\">Accueil</a></li>";
htmlContent+= "<li><a href=\"#about\">À propos</a></li>";
htmlContent+= "<li><a href=\"./memoire/index.html\">Mémoire</a></li>";
htmlContent+= "<li id=\"loadContentButton\"><a href=\"#test\">Test</a></li>";
htmlContent+= "<li><a href=\"#contact\">Contact</a></li>";
htmlContent+= "</ul>";
htmlContent+= "</nav>";
document.getElementById('content').innerHTML = htmlContent;