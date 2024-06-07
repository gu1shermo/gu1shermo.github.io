// JavaScript code to include HTML content
var htmlContent = "<nav>";
htmlContent+= "<ul class=\"menu\">";
htmlContent+= "<li class=\"menu\"><a href=\"./index.html\">Accueil</a></li>";
htmlContent+= "<li class=\"menu\"><a href=\"#about\">À propos</a></li>";
htmlContent+= "<li class=\"menu\"><a href=\"./memoire/index.html\">Mémoire</a></li>";
htmlContent+= "<li class=\"menu\" id=\"loadContentButton\"><a href=\"#test\">Test</a></li>";
htmlContent+= "<li class=\"menu\"><a href=\"#contact\">Contact</a></li>";
htmlContent+= "</ul>";
htmlContent+= "</nav>";
document.getElementById('menu').innerHTML = htmlContent;