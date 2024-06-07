alert("load_html");

document.getElementById('loadContentButton').addEventListener('click', function() {
    fetch('content.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('main_content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
});