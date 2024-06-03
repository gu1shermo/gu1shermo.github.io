import subprocess

def latex_to_html(latex_file, html_file):
    try:
        subprocess.run(["pandoc", "-s", latex_file, "-o", html_file])
        print("Conversion successful!")
    except Exception as e:
        print("Conversion failed:", e)

# Example usage
latex_file = "main.tex"
html_file = "main2.html"
latex_to_html(latex_file, html_file)
