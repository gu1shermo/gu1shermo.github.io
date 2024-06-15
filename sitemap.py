import os
import xml.etree.ElementTree as ET
from datetime import datetime

def create_sitemap(directory, base_url):
    print("lol")
    urlset = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                url = ET.SubElement(urlset, 'url')
                loc = ET.SubElement(url, 'loc')
                loc.text = base_url + os.path.relpath(os.path.join(root, file), directory).replace("\\", "/")
                lastmod = ET.SubElement(url, 'lastmod')
                lastmod.text = datetime.now().strftime("%Y-%m-%d")

    tree = ET.ElementTree(urlset)
    tree.write("sitemap.xml", encoding='utf-8', xml_declaration=True)

# Utilisation
create_sitemap('.', 'https://hrst4.xyz/')
