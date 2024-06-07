document.addEventListener("DOMContentLoaded", function() {
      const tocContent = document.getElementById('toc-content');
      const headers = document.querySelectorAll('h1, h2, h3');
      headers.forEach((header, index) => {
          const id = `header-${index}`;
          header.id = id;
          const link = document.createElement('a');
          link.href = `#${id}`;
          link.textContent = header.textContent;
          link.classList.add(`toc-${header.tagName.toLowerCase()}`);
          tocContent.appendChild(link);
      });

      // Assurez-vous que la case est décochée au chargement de la page
      document.getElementById('toc-toggle').checked = false;
  });