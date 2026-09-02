import urllib.request, re

def get_page(path):
    url = f"https://www.chibasushirestaurant.com/{path}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    return urllib.request.urlopen(req, timeout=8).read().decode("utf-8", errors="ignore")

gallery_html = get_page("gallery.php")
gallery_links = re.findall(r'<a[^>]+href=["\'](images/[^"\']+\.jpg)["\']', gallery_html)
print("GALLERY FULL IMAGES:", gallery_links)

for menu_p in ["lunch_menu.php", "dinner_menu.php"]:
    html = get_page(menu_p)
    print(f"\n--- {menu_p} ---")
    # find list items or tables
    text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', '\n', text)
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    in_menu = False
    for l in lines:
        if "Lunch Menu" in l or "Dinner Menu" in l:
            in_menu = True
        if in_menu:
            print(l)
