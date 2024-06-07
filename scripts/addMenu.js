function getRootFolder() {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const rootFolder = `${protocol}//${host}/`;
    return rootFolder;
}

// Usage
const rootFolder = getRootFolder();
console.log("Root folder:", rootFolder);

// JavaScript code to include HTML content
var htmlContent = "<nav>";
htmlContent+= "<ul class=\"menu\">";
htmlContent+= "<li><a href=\"./index.html\">Accueil</a></li>";
htmlContent+= "<li><a href=\"#about\">À propos</a></li>";
htmlContent+= "<li><a href=\"./memoire/index.html\">Mémoire</a></li>";
htmlContent+= "<li><a href=\"#test\">Test</a></li>";
htmlContent+= "<li><a href=\"#contact\">Contact</a></li>";
htmlContent+= "</ul>";
htmlContent+= "</nav>";
document.getElementById('menu').innerHTML = htmlContent;