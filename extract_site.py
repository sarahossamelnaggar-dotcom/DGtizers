import shutil
import struct
from pathlib import Path

src = Path(r"D:\DGtizers\DGtizers\DGtizers-products.zip")
site = Path(r"D:\DGtizers\DGtizers\site")
media = site / "media"
data_dir = site / "data"
assets = site / "assets"
for folder in (media, data_dir, assets):
    folder.mkdir(parents=True, exist_ok=True)

logo_src = Path(
    r"C:\Users\Acer\.cursor\projects\d-DGtizers\assets"
    r"\c__Users_Acer_AppData_Roaming_Cursor_User_workspaceStorage_6f93b32cd6bd7394f3c88791d2528aad_images_"
    r"WhatsApp_Image_2026-11-11_at_9.00.59_PM-e69f80d8-0657-42f9-a878-40120370595d.jpg"
)
if logo_src.exists():
    shutil.copyfile(logo_src, assets / "logo.jpg")

raw = src.read_bytes()
files = 0
photos = 0
products = 0
skipped = []
i = 0
while i + 30 < len(raw) and raw[i : i + 4] == b"PK\x03\x04":
    ver, flag, method, time, date, crc, csize, usize, nlen, elen = struct.unpack_from(
        "<HHHHHIIIHH", raw, i + 4
    )
    name = raw[i + 30 : i + 30 + nlen].decode("utf-8", "replace")
    start = i + 30 + nlen + elen
    end = start + csize
    if end > len(raw):
        skipped.append(name)
        break
    rel = name[len("DGtizers-products/") :] if name.startswith("DGtizers-products/") else None
    keep = False
    dest = None
    if rel == "catalog.json":
        keep = True
        dest = data_dir / "catalog.json"
    elif rel and rel.startswith("products/") and not rel.endswith("/"):
        if rel.endswith("/product.json") or "/photos/" in rel:
            keep = True
            dest = media / rel
    if keep and dest is not None:
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(raw[start:end])
        files += 1
        if rel.endswith("/product.json"):
            products += 1
        elif "/photos/" in (rel or ""):
            photos += 1
    i = end

log = site.parent / "extract-log.txt"
log.write_text(
    f"files {files}\nproducts {products}\nphotos {photos}\nskipped {skipped}\n",
    encoding="utf-8",
)
print(f"files {files} products {products} photos {photos} skipped {len(skipped)}")
