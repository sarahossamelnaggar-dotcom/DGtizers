const SHIPPING = 50;
const COD_MAX = 10000;
const INSTALLMENT_MIN = 500;

const I18N = {
  en: {
    skip: "Skip to content",
    topStrong: "72 hours",
    topRest: "delivery across Egypt · 50 EGP shipping · 0% installments up to 6 months",
    menu: "Menu",
    navShop: "Shop",
    navTablets: "Tablets",
    navMonitors: "Monitors",
    navAccessories: "Accessories",
    navAbout: "About",
    navSupport: "Support",
    searchLabel: "Search products",
    searchPlaceholder: "Search products",
    search: "Search",
    cart: "Cart",
    loading: "Loading the catalog…",
    footerBlurb: "Digital drawing tools in Egypt since 2013. Official distributor of Wacom, XPPen, and Huion.",
    footerShop: "Shop",
    footerHelp: "Help",
    delivery: "Delivery",
    warranty: "Warranty",
    heroEyebrow: "Your ideas. No limits.",
    heroTitle: "Turning ideas",
    heroEm: "into what's next.",
    heroLede: "Your next creative chapter starts with the right tools. Graphic tablets, pen displays, and people who get it.",
    shopCta: "Explore your next tool",
    inStockCta: "Find my match",
    stickerT: "Let's create.",
    sticker: "Something extraordinary.",
    calloutT: "Creator tools",
    callout: "Human support",
    crewKicker: "The characters",
    factShip: "Across Egypt, weekends excluded",
    factFee: "Flat delivery fee",
    factPay: "On selected bank cards",
    categories: "Shop by category",
    featured: "Ready to ship",
    seeAll: "See all",
    brands: "Brands on the shelf",
    crewTitle: "Four reasons, four characters",
    crewLede: "Same family. Each one stands for a different part of DGtizers.",
    crewBlueT: "Technology & support",
    crewBlue: "Technical know-how and someone to guide you after the purchase.",
    crewYellowT: "Innovation & ideas",
    crewYellow: "The spark: new tools, better habits, and a clearer way to draw.",
    crewGreyT: "Digital creativity",
    crewGrey: "For artists and designers, and the work they actually make.",
    crewBlackT: "Growth & progress",
    crewBlack: "Ambition, practice, and the next step the studio takes.",
    whyTitle: "Why artists stay",
    why1t: "In this since 2013",
    why1: "DGtizers specializes in digital drawing tools, with service that starts after the sale.",
    why2t: "Parts and support",
    why2: "Spare parts stay available, and technical support is part of the relationship.",
    why3t: "Compare in person",
    why3: "Try products side by side and pick the brand that fits, without a push toward one name.",
    shopTitle: "The catalog",
    allCategories: "All categories",
    allBrands: "All brands",
    allStock: "Any availability",
    inStock: "In stock",
    outStock: "Out of stock",
    preOrder: "Pre-order",
    discontinued: "Discontinued",
    sortFeatured: "In stock first",
    sortPriceAsc: "Price: low to high",
    sortPriceDesc: "Price: high to low",
    sortName: "Name",
    showing: "Showing {n} of {total}",
    clear: "Clear filters",
    loadMore: "Load more",
    emptyShop: "Nothing matches that search. Try a brand, a model, or a shorter word.",
    home: "Home",
    add: "Add to cart",
    added: "Added to cart",
    unavailable: "Unavailable",
    priceOnRequest: "Price on request",
    specs: "Specifications",
    description: "Description",
    related: "You may also need",
    color: "Options",
    qty: "Quantity",
    cartTitle: "Your cart",
    emptyCart: "The cart is empty.",
    browse: "Browse products",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    checkout: "Checkout",
    remove: "Remove",
    codNote: "Cash on delivery is available up to 10,000 EGP.",
    checkoutTitle: "Checkout",
    name: "Full name",
    phone: "Phone",
    city: "City",
    address: "Address",
    payment: "Payment",
    notes: "Notes",
    place: "Place order",
    payCod: "Cash on delivery",
    payCard: "Visa, Mastercard, or Meeza",
    payWallet: "Smart wallet",
    payInstall: "Card installments",
    errName: "Add the full name.",
    errPhone: "Add a phone number with at least 8 digits.",
    errCity: "Add the city.",
    errAddress: "Add the delivery address.",
    errCod: "Cash on delivery is limited to 10,000 EGP. Choose another payment method.",
    errInstall: "Installments start from 500 EGP.",
    orderTitle: "Order saved on this device",
    orderLede: "This browser stored the order. Share the summary with the shop to confirm it.",
    copy: "Copy summary",
    copied: "Summary copied",
    missingOrder: "That order is not on this device.",
    aboutTitle: "The house of makers",
    aboutLede: "DGtizers has specialized in digital drawing tools since 2013. The aim is a service that fits the customer, not a sale that ends at the counter.",
    supportTitle: "Delivery, payment, and warranty",
    supportLede: "Policies below follow what DGtizers publishes for the Egyptian store.",
    notFound: "That page is not in the shop.",
    photoSoon: "Photo",
    other: "Other",
    uncategorized: "Uncategorized",
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    topStrong: "٧٢ ساعة",
    topRest: "توصيل لكل مصر · شحن ٥٠ جنيه · تقسيط ٠٪ حتى ٦ شهور",
    menu: "القائمة",
    navShop: "المتجر",
    navTablets: "أجهزة الرسم",
    navMonitors: "شاشات الرسم",
    navAccessories: "الإكسسوارات",
    navAbout: "من نحن",
    navSupport: "الدعم",
    searchLabel: "ابحث في المنتجات",
    searchPlaceholder: "ابحث عن تابلت أو قلم أو ماركة",
    search: "بحث",
    cart: "السلة",
    loading: "جارٍ تحميل الكتالوج…",
    footerBlurb: "أدوات الرسم الرقمي في مصر من ٢٠١٣. موزع رسمي لـ Wacom و XPPen و Huion.",
    footerShop: "المتجر",
    footerHelp: "مساعدة",
    delivery: "الشحن",
    warranty: "الضمان",
    heroEyebrow: "أفكارك. بلا حدود.",
    heroTitle: "نحوّل الأفكار",
    heroEm: "إلى اللي جاي.",
    heroLede: "الفصل الجاي في شغلك يبدأ بالأداة الصح. جرافيك تابلت، شاشات رسم، وناس فاهمة اللي بتعمله.",
    shopCta: "اختار أداتك الجاية",
    inStockCta: "لاقِ الأنسب",
    stickerT: "يلا نبدع.",
    sticker: "حاجة غير عادية.",
    calloutT: "أدوات المبدعين",
    callout: "ودعم بشري",
    crewKicker: "الشخصيات",
    factShip: "لكل أنحاء مصر، ما عدا العطلات",
    factFee: "تكلفة شحن ثابتة",
    factPay: "على بطاقات بنوك مختارة",
    categories: "تسوق حسب النوع",
    featured: "جاهز للشحن",
    seeAll: "عرض الكل",
    brands: "الماركات",
    crewTitle: "أربع شخصيات، أربعة أسباب",
    crewLede: "نفس العيلة. كل شخصية بتمثّل جانب من ديجيتيزرز.",
    crewBlueT: "التقنية والدعم",
    crewBlue: "خبرة فنية وحد يوجهك بعد الشراء.",
    crewYellowT: "الابتكار والأفكار",
    crewYellow: "الشرارة: أدوات جديدة وطريقة أوضح ترسم بيها.",
    crewGreyT: "الإبداع الرقمي",
    crewGrey: "للفنانين والمصممين وللشغل اللي بيطلع من إيديهم.",
    crewBlackT: "النمو والتقدم",
    crewBlack: "الطموح، والتمرين، والخطوة الجاية للاستوديو.",
    whyTitle: "ليه الفنانين بيكملوا معانا",
    why1t: "متخصصين من ٢٠١٣",
    why1: "ديجيتيزرز متخصصة في أدوات الرسم الرقمي، والعلاقة مع العميل تبدأ بعد الشراء.",
    why2t: "قطع غيار ودعم",
    why2: "قطع الغيار متوفرة، والدعم الفني جزء من الخدمة مش إضافة.",
    why3t: "جرّب وقارن",
    why3: "تقدر تجرب المنتجات وتقارن بينها من غير تحيز لماركة.",
    shopTitle: "الكتالوج",
    allCategories: "كل الأنواع",
    allBrands: "كل الماركات",
    allStock: "كل حالات التوفر",
    inStock: "متوفر",
    outStock: "غير متوفر",
    preOrder: "طلب مسبق",
    discontinued: "متوقف",
    sortFeatured: "المتاح أولاً",
    sortPriceAsc: "السعر: من الأقل",
    sortPriceDesc: "السعر: من الأعلى",
    sortName: "الاسم",
    showing: "عرض {n} من {total}",
    clear: "مسح التصفية",
    loadMore: "عرض المزيد",
    emptyShop: "مفيش نتائج. جرّب اسم الماركة أو الموديل.",
    home: "الرئيسية",
    add: "أضف إلى السلة",
    added: "اتضاف للسلة",
    unavailable: "غير متاح",
    priceOnRequest: "السعر عند الطلب",
    specs: "المواصفات",
    description: "الوصف",
    related: "ممكن تحتاج كمان",
    color: "الخيارات",
    qty: "الكمية",
    cartTitle: "سلتك",
    emptyCart: "السلة فاضية.",
    browse: "تصفح المنتجات",
    subtotal: "المجموع",
    shipping: "الشحن",
    total: "الإجمالي",
    checkout: "إتمام الطلب",
    remove: "حذف",
    codNote: "الدفع عند الاستلام متاح حتى ١٠٬٠٠٠ جنيه.",
    checkoutTitle: "إتمام الطلب",
    name: "الاسم بالكامل",
    phone: "الموبايل",
    city: "المدينة",
    address: "العنوان",
    payment: "طريقة الدفع",
    notes: "ملاحظات",
    place: "تأكيد الطلب",
    payCod: "الدفع عند الاستلام",
    payCard: "فيزا أو ماستركارد أو ميزة",
    payWallet: "محفظة إلكترونية",
    payInstall: "تقسيط بالبطاقة",
    errName: "اكتب الاسم بالكامل.",
    errPhone: "اكتب رقم موبايل فيه ٨ أرقام على الأقل.",
    errCity: "اكتب المدينة.",
    errAddress: "اكتب عنوان التوصيل.",
    errCod: "الدفع عند الاستلام بحد أقصى ١٠٬٠٠٠ جنيه. اختار طريقة تانية.",
    errInstall: "التقسيط يبدأ من ٥٠٠ جنيه.",
    orderTitle: "الطلب محفوظ على الجهاز ده",
    orderLede: "المتصفح خزّن الطلب. ابعت الملخص للمحل عشان يتأكد.",
    copy: "انسخ الملخص",
    copied: "تم نسخ الملخص",
    missingOrder: "الطلب ده مش موجود على الجهاز.",
    aboutTitle: "بيت المبدعين",
    aboutLede: "ديجيتيزرز متخصصة في أدوات الرسم الرقمي من ٢٠١٣. الهدف خدمة تليق بالعميل، مش بيعة تخلص عند الكاشير.",
    supportTitle: "الشحن والدفع والضمان",
    supportLede: "السياسات دي حسب اللي ديجيتيزرز بتنشره لمتجر مصر.",
    notFound: "الصفحة دي مش موجودة في المتجر.",
    photoSoon: "صورة",
    other: "أخرى",
    uncategorized: "بدون تصنيف",
  },
};

const CAT_AR = {
  "Graphic Tablets": "جرافيك تابلت",
  "Pen Tablet Monitor": "شاشات الرسم",
  "Accessories & Spare Parts": "إكسسوارات وقطع غيار",
  Stylus: "أقلام",
  "iPad Pen": "أقلام آيباد",
  "All in One (AIO)": "أجهزة الكل في واحد",
  Uncategorized: "بدون تصنيف",
  "EMR, Surface, and Chromebook": "EMR وسيرفس وكروم بوك",
  "Tracing Board": "لوحات تتبع",
  eLearning: "تعليم إلكتروني",
  "Document Camera": "كاميرا مستندات",
  "Universal Pen": "قلم عام",
  "Artist Corner": "ركن الفنان",
  Computer: "كمبيوتر",
  "Signature Pad": "جهاز توقيع",
  "PC Monitor": "شاشة كمبيوتر",
  Laptop: "لابتوب",
  "Passive Pen": "قلم سلبي",
  "Buy with Trendatoo": "Trendatoo",
};

const ABOUT = {
  en: [
    ["Who we are", "DGtizers is a destination for digital drawing tools. The work is quality and value, and a community that keeps up with the tools."],
    ["After the receipt", "The relationship starts after the purchase. What sets the shop apart is after-sales service, spare parts, and support."],
    ["The brands", "As an official distributor in Egypt, DGtizers works with Wacom, XPPen, Huion, and other drawing-tablet makers."],
  ],
  ar: [
    ["من نحن", "ديجيتيزرز وجهة لكل أدوات الرسم الرقمي. الهدف جودة وقيمة، ومجتمع مواكب للأدوات، مش مجرد أرقام مبيعات."],
    ["بعد الفاتورة", "العلاقة بتبدأ بعد الشراء. اللي بيميز المحل هو خدمة ما بعد البيع، وقطع الغيار، والدعم الفني."],
    ["الماركات", "كموزع رسمي في مصر، ديجيتيزرز بتشتغل مع Wacom و XPPen و Huion وغيرها من ماركات أجهزة الرسم."],
  ],
};

const POLICIES = {
  en: [
    ["delivery", "Delivery", ["Fast shipping across Egypt within 72 hours, excluding weekends and public holidays.", "Shipping fee: 50 EGP."]],
    ["payment", "Payment", ["Cash on delivery, up to 10,000 EGP per order. A COD fee can apply by order value.", "Visa, Mastercard, Meeza, and smart wallets.", "Card installments with 0% interest and 0 down payment for 6 months on cards from NBE, CIB, Mashreq, and Emirates NBD. Minimum order 500 EGP. Other tenors and banks can add a service fee."]],
    ["warranty", "Warranty", ["Devices sold by the company or an authorized distributor are covered for one year from the invoice date, and two years for Wacom.", "The pen and separate accessories are not covered unless the invoice or the site says so. Keep the original invoice.", "Exchange or return within 14 days if the device is in its original condition, including the packaging.", "A manufacturing defect within 30 days can be exchanged for a new unit or refunded.", "Warranty is void after misuse, opening the device, removing the serial, or using non-original accessories."]],
    ["returns", "Exchange and return", ["Returns follow consumer protection rules and need the original invoice.", "Exchange within 14 days if the box is sealed and unopened, for the same value or higher. The customer covers the shipping.", "Opened one-time products are not returned unless they are unfit, and only within 14 days."]],
  ],
  ar: [
    ["delivery", "الشحن", ["شحن سريع لكل أنحاء مصر خلال ٧٢ ساعة، باستثناء الإجازات والعطلات الرسمية.", "تكلفة الشحن ٥٠ جنيه."]],
    ["payment", "الدفع", ["الدفع عند الاستلام بحد أقصى ١٠٬٠٠٠ جنيه للطلب. ممكن تتطبق مصاريف حسب قيمة الطلب.", "فيزا، ماستركارد، ميزة، والمحافظ الإلكترونية.", "تقسيط ٠٪ وبدون مقدم لمدة ٦ شهور لبطاقات الأهلي و CIB والمشرق والإمارات دبي الوطني. الحد الأدنى ٥٠٠ جنيه. المدد والبنوك التانية ممكن يضاف عليها مصاريف خدمة."]],
    ["warranty", "الضمان", ["الأجهزة المبيعة من الشركة أو موزع معتمد مضمونة سنة من تاريخ الفاتورة، وسنتين لمنتجات واكوم.", "القلم والإكسسوارات المنفصلة مش داخلة في الضمان إلا لو الفاتورة أو الموقع قال غير كده. احتفظ بأصل الفاتورة.", "استبدال أو استرجاع خلال ١٤ يوم لو الجهاز بحالته الأصلية وبالعبوة.", "عيب الصناعة خلال ٣٠ يوم يحق فيه الاستبدال بجهاز جديد أو استرداد الثمن.", "الضمان يلغى مع سوء الاستخدام أو فتح الجهاز أو إزالة السيريال أو استخدام ملحقات غير أصلية."]],
    ["returns", "الاستبدال والاسترجاع", ["الاسترجاع حسب قواعد حماية المستهلك، وأصل الفاتورة أساسي.", "الاستبدال خلال ١٤ يوم لو العلبة مقفولة ولم تُفتح، بنفس القيمة أو أعلى. مصاريف الشحن على العميل.", "المنتجات اللي بتتفتح مرة واحدة لا تُرجع إلا لو غير صالحة، وخلال ١٤ يوم فقط."]],
  ],
};

const state = {
  lang: "en",
  products: [],
  photos: new Set(),
  bySlug: new Map(),
  byNorm: new Map(),
  cart: [],
  fetchedAt: "",
  ready: false,
};

let renderToken = 0;
let shopKey = "";
let shopShown = 24;
let toastTimer = 0;

function t(key) {
  const table = I18N[state.lang] || I18N.en;
  return table[key] || I18N.en[key] || key;
}
function tf(key, vars) {
  return Object.entries(vars).reduce((text, [name, value]) => text.replaceAll("{" + name + "}", String(value)), t(key));
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
function norm(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}
function decodePart(value) {
  try { return decodeURIComponent(value || ""); }
  catch { return value || ""; }
}
function cleanText(value) {
  return String(value || "")
    .replace(/&nbsp;?/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&n(?![a-z])/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function money(amount) {
  const number = Number(amount);
  if (!number) return t("priceOnRequest");
  const formatted = new Intl.NumberFormat(state.lang === "ar" ? "ar-EG" : "en-EG", { maximumFractionDigits: 0 }).format(number);
  return state.lang === "ar" ? `${formatted} جنيه` : `${formatted} EGP`;
}
function brandName(product) {
  if (!product.brand || product.brand === "Other") return t("other");
  return product.brand;
}
function catName(name) {
  if (!name || name === "Uncategorized") return t("uncategorized");
  if (state.lang === "ar" && CAT_AR[name]) return CAT_AR[name];
  return name;
}
function pname(product) {
  return state.lang === "ar" && product.name_ar ? product.name_ar : product.name;
}
function stockClass(stock) {
  if (stock === "In stock") return "in";
  if (stock === "Pre-order") return "pre";
  if (stock === "Discontinued") return "gone";
  return "out";
}
function stockLabel(stock) {
  if (stock === "In stock") return t("inStock");
  if (stock === "Pre-order") return t("preOrder");
  if (stock === "Discontinued") return t("discontinued");
  return t("outStock");
}
function canBuy(product, price, stock) {
  return (stock === "In stock" || stock === "Pre-order") && Number(price) > 0 && product;
}
function mediaUrl(folder, file) {
  return ["media", ...String(folder || "").split("/"), ...String(file || "").split("/")].filter(Boolean).map(encodeURIComponent).join("/");
}
function initials(product) {
  const source = brandName(product);
  return source.slice(0, 2).toUpperCase();
}
function parseRoute() {
  const raw = (location.hash || "#/").slice(1);
  const qIndex = raw.indexOf("?");
  const path = qIndex >= 0 ? raw.slice(0, qIndex) : raw;
  const query = qIndex >= 0 ? raw.slice(qIndex + 1) : "";
  return { parts: path.split("/").filter(Boolean), params: new URLSearchParams(query) };
}
function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}
function shopHash(filters) {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.cat) params.set("cat", filters.cat);
  if (filters.brand) params.set("brand", filters.brand);
  if (filters.stock) params.set("stock", filters.stock);
  if (filters.sort && filters.sort !== "featured") params.set("sort", filters.sort);
  const query = params.toString();
  return "#/shop" + (query ? "?" + query : "");
}
function loadCart() {
  try { return JSON.parse(localStorage.getItem("dgtizers-cart")) || []; }
  catch { return []; }
}
function saveCart() {
  try { localStorage.setItem("dgtizers-cart", JSON.stringify(state.cart)); }
  catch { /* private mode */ }
  updateCartCount();
}
function loadOrders() {
  try { return JSON.parse(localStorage.getItem("dgtizers-orders")) || []; }
  catch { return []; }
}
function updateCartCount() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = String(count);
}
function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = state.cart.length ? SHIPPING : 0;
  return { subtotal, shipping, total: subtotal + shipping, count: state.cart.reduce((sum, item) => sum + item.qty, 0) };
}
function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}
function knockWhite(img) {
  if (img.dataset.knocked) return;
  const paint = () => {
    if (img.dataset.knocked) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    let frame;
    try { frame = ctx.getImageData(0, 0, w, h); }
    catch { return; }
    const px = frame.data;
    for (let i = 0; i < px.length; i += 4) {
      const min = Math.min(px[i], px[i + 1], px[i + 2]);
      if (min > 232) px[i + 3] = Math.min(px[i + 3], Math.max(0, 255 - (min - 232) * 12));
    }
    ctx.putImageData(frame, 0, 0);
    img.dataset.knocked = "1";
    img.src = canvas.toDataURL("image/png");
  };
  if (img.complete && img.naturalWidth) paint();
  else img.addEventListener("load", paint, { once: true });
}
function bindImages(root) {
  root.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const box = document.createElement("div");
      box.className = "ph";
      box.textContent = img.dataset.fallback || t("photoSoon");
      img.replaceWith(box);
    });
  });
  root.querySelectorAll(".float img, .card-photo img, .gallery-main img, .thumbs img").forEach(knockWhite);
}
function photoHtml(product, file, className) {
  if (!state.photos.has(product.folder)) {
    return `<div class="ph ${className || ""}">${esc(initials(product))}</div>`;
  }
  return `<img src="${esc(mediaUrl(product.folder, file || "photos/01.webp"))}" alt="${esc(pname(product))}" data-fallback="${esc(initials(product))}">`;
}
function cardHtml(product) {
  return `<a class="card" href="#/product/${encodeURIComponent(product.slug)}">
    <div class="card-photo">${photoHtml(product)}</div>
    <div class="card-body">
      <p class="brand-name">${esc(brandName(product))}</p>
      <h3>${esc(pname(product))}</h3>
      <div class="card-meta">
        <span class="price">${esc(money(product.price_egp))}</span>
        <span class="badge ${stockClass(product.stock)}">${esc(stockLabel(product.stock))}</span>
      </div>
    </div>
  </a>`;
}
function applyChrome() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  const langBtn = document.getElementById("lang-toggle");
  langBtn.textContent = state.lang === "ar" ? "English" : "عربي";
  langBtn.setAttribute("aria-label", state.lang === "ar" ? "Switch to English" : "التحويل إلى العربية");
  const logoSrc = state.lang === "ar" ? "assets/logo-ar.png" : "assets/logo-en.png";
  document.querySelectorAll("[data-logo]").forEach((img) => {
    if (img.getAttribute("src") !== logoSrc) img.setAttribute("src", logoSrc);
  });
  const route = parseRoute();
  const page = route.parts[0] || "home";
  const cat = route.params.get("cat") || "";
  const map = {
    home: page === "home",
    shop: page === "shop" && !cat,
    tablets: cat === "Graphic Tablets",
    monitors: cat === "Pen Tablet Monitor",
    accessories: cat === "Accessories & Spare Parts",
    about: page === "about",
    support: page === "support",
    cart: page === "cart" || page === "checkout",
  };
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (map[link.dataset.nav]) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const search = document.getElementById("search-input");
  if (document.activeElement !== search) search.value = page === "shop" ? (route.params.get("q") || "") : search.value;
  const legal = document.getElementById("legal");
  const date = state.fetchedAt || "11 Nov 2026";
  legal.textContent = state.lang === "ar"
    ? `الأسعار بالجنيه المصري كما نُشرت في ${date}، وقابلة للتغيير.`
    : `Prices are in EGP as published ${date}, and they can change.`;
  updateCartCount();
}

function categoryCounts() {
  const map = new Map();
  state.products.forEach((product) => {
    const name = product.categories[0] || "Uncategorized";
    map.set(name, (map.get(name) || 0) + 1);
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}
function brandCounts() {
  const map = new Map();
  state.products.forEach((product) => map.set(product.brand, (map.get(product.brand) || 0) + 1));
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}
function picks(limit) {
  const preferred = new Set(["Graphic Tablets", "Pen Tablet Monitor", "Stylus"]);
  const pool = state.products.slice().sort((a, b) => {
    const score = (product) => preferred.has(product.categories[0]) ? 0 : 1;
    return score(a) - score(b);
  });
  const chosen = [];
  const seen = new Set();
  pool.forEach((product) => {
    if (chosen.length >= limit) return;
    if (!state.photos.has(product.folder) || product.stock !== "In stock" || !(product.price_egp > 0)) return;
    if (seen.has(product.brand)) return;
    seen.add(product.brand);
    chosen.push(product);
  });
  pool.forEach((product) => {
    if (chosen.length >= limit) return;
    if (!state.photos.has(product.folder) || product.stock !== "In stock" || chosen.includes(product)) return;
    chosen.push(product);
  });
  return chosen;
}

function mascot(file, label, small) {
  return `<span class="figure${small ? " figure-sm" : ""}"><img src="assets/${file}" alt="${esc(label)}"></span>`;
}
function renderHome(main) {
  document.title = "DGtizers";
  const tones = ["tone-yellow", "tone-baby", "tone-lavender", "tone-blue"];
  const cats = categoryCounts().slice(0, 6).map(([name, count], index) => `
    <a class="cat-card ${tones[index % tones.length]}" href="${esc(shopHash({ cat: name }))}">
      <strong>${esc(catName(name))}</strong>
      <span>${count}</span>
    </a>`).join("");
  const shown = picks(2);
  const visual = shown.map((product, index) => `
    <a class="float float-${index === 0 ? "back" : "front"}" href="#/product/${encodeURIComponent(product.slug)}">
      ${photoHtml(product)}
    </a>`).join("");
  const featured = picks(8).map(cardHtml).join("");
  const brands = brandCounts().slice(0, 18).map(([name, count]) => `
    <a href="${esc(shopHash({ brand: name }))}">${esc(name === "Other" ? t("other") : name)} · ${count}</a>`).join("");
  main.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><i></i> ${esc(t("heroEyebrow"))}</p>
        <h1>${esc(t("heroTitle"))}<br>${esc(t("heroEm"))}</h1>
        <p class="lede">${esc(t("heroLede"))}</p>
        <div class="actions">
          <a class="btn btn-line" href="#/shop">${esc(t("shopCta"))} <span class="arrow" aria-hidden="true">→</span></a>
          <a class="btn btn-glass" href="${esc(shopHash({ stock: "in" }))}">${esc(t("inStockCta"))} <span class="arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-glow" aria-hidden="true"></div>
        ${visual}
        <a class="sticker" href="#/support">
          <img src="assets/mascot-blue.jpg" alt="${esc(t("crewBlueT"))}">
          <strong>${esc(t("stickerT"))}</strong>
          <span>${esc(t("sticker"))}</span>
        </a>
        <p class="callout"><strong>${esc(t("calloutT"))}</strong><span>${esc(t("callout"))}</span></p>
      </div>
    </section>
    <section class="section">
      <p class="kicker"><i></i>${esc(t("crewKicker"))}<i></i></p>
      <div class="section-head"><h2>${esc(t("crewTitle"))}</h2></div>
      <p class="lede" style="margin-bottom:16px">${esc(t("crewLede"))}</p>
      <div class="crew">
        <a href="#/support">${mascot("mascot-blue.jpg", t("crewBlueT"))}<h3>${esc(t("crewBlueT"))}</h3><p>${esc(t("crewBlue"))}</p></a>
        <a href="#/shop">${mascot("mascot-yellow.jpg", t("crewYellowT"))}<h3>${esc(t("crewYellowT"))}</h3><p>${esc(t("crewYellow"))}</p></a>
        <a href="${esc(shopHash({ cat: "Graphic Tablets" }))}">${mascot("mascot-grey.jpg", t("crewGreyT"))}<h3>${esc(t("crewGreyT"))}</h3><p>${esc(t("crewGrey"))}</p></a>
        <a href="#/about">${mascot("mascot-black.jpg", t("crewBlackT"))}<h3>${esc(t("crewBlackT"))}</h3><p>${esc(t("crewBlack"))}</p></a>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${esc(t("categories"))}</h2><a href="#/shop">${esc(t("seeAll"))}</a></div>
      <div class="cats">${cats}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${esc(t("featured"))}</h2><a href="${esc(shopHash({ stock: "in" }))}">${esc(t("seeAll"))}</a></div>
      <div class="grid">${featured}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${esc(t("brands"))}</h2></div>
      <div class="brands">${brands}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${esc(t("whyTitle"))}</h2></div>
      <div class="why">
        <article><em>01</em><h3>${esc(t("why1t"))}</h3><p>${esc(t("why1"))}</p></article>
        <article><em>02</em><h3>${esc(t("why2t"))}</h3><p>${esc(t("why2"))}</p></article>
        <article><em>03</em><h3>${esc(t("why3t"))}</h3><p>${esc(t("why3"))}</p></article>
      </div>
    </section>`;
  bindImages(main);
}

function filteredProducts(params) {
  const q = (params.get("q") || "").trim().toLowerCase();
  const cat = params.get("cat") || "";
  const brand = params.get("brand") || "";
  const stock = params.get("stock") || "";
  let list = state.products.slice();
  if (q) {
    list = list.filter((product) => [product.name, product.name_ar, product.brand, product.model, product.slug, ...product.categories]
      .join(" ").toLowerCase().includes(q));
  }
  if (cat) list = list.filter((product) => product.categories.includes(cat));
  if (brand) list = list.filter((product) => product.brand === brand);
  if (stock === "in") list = list.filter((product) => product.stock === "In stock");
  else if (stock === "pre") list = list.filter((product) => product.stock === "Pre-order");
  else if (stock === "out") list = list.filter((product) => product.stock === "Out of stock");
  const sort = params.get("sort") || "featured";
  const rank = (product) => product.stock === "In stock" ? 0 : product.stock === "Pre-order" ? 1 : product.stock === "Out of stock" ? 2 : 3;
  if (sort === "price-asc") list.sort((a, b) => (a.price_egp || 0) - (b.price_egp || 0));
  else if (sort === "price-desc") list.sort((a, b) => (b.price_egp || 0) - (a.price_egp || 0));
  else if (sort === "name") list.sort((a, b) => pname(a).localeCompare(pname(b), state.lang));
  else list.sort((a, b) => rank(a) - rank(b) || pname(a).localeCompare(pname(b), state.lang));
  return list;
}
function selectOptions(items, current, allLabel) {
  const head = `<option value="">${esc(allLabel)}</option>`;
  const body = items.map(([value, label]) => `<option value="${esc(value)}"${value === current ? " selected" : ""}>${esc(label)}</option>`).join("");
  return head + body;
}
function renderShop(main, params) {
  document.title = t("shopTitle") + " · DGtizers";
  const key = params.toString();
  if (key !== shopKey) {
    shopKey = key;
    shopShown = 24;
  }
  const list = filteredProducts(params);
  const visible = list.slice(0, shopShown);
  const cats = categoryCounts().map(([name, count]) => [name, `${catName(name)} (${count})`]);
  const brands = brandCounts().map(([name, count]) => [name, `${name === "Other" ? t("other") : name} (${count})`]);
  const filtersActive = ["q", "cat", "brand", "stock", "sort"].some((name) => params.get(name));
  main.innerHTML = `
    <div class="page-intro">
      ${mascot("mascot-grey.jpg", t("crewGreyT"))}
      <div>
        <h1>${esc(t("shopTitle"))}</h1>
        <p class="lede">${esc(t("crewGrey"))}</p>
      </div>
    </div>
    <form id="filters" class="filters">
      <select data-filter="cat" aria-label="${esc(t("allCategories"))}">${selectOptions(cats, params.get("cat") || "", t("allCategories"))}</select>
      <select data-filter="brand" aria-label="${esc(t("allBrands"))}">${selectOptions(brands, params.get("brand") || "", t("allBrands"))}</select>
      <select data-filter="stock" aria-label="${esc(t("allStock"))}">${selectOptions([["in", t("inStock")], ["pre", t("preOrder")], ["out", t("outStock")]], params.get("stock") || "", t("allStock"))}</select>
      <select data-filter="sort" aria-label="${esc(t("sortFeatured"))}">${selectOptions([["featured", t("sortFeatured")], ["price-asc", t("sortPriceAsc")], ["price-desc", t("sortPriceDesc")], ["name", t("sortName")]], params.get("sort") || "featured", t("sortFeatured"))}</select>
    </form>
    <div class="results-line">
      <p>${esc(tf("showing", { n: visible.length, total: list.length }))}</p>
      ${filtersActive ? `<a href="#/shop">${esc(t("clear"))}</a>` : ""}
    </div>
    ${list.length ? `<div class="grid">${visible.map(cardHtml).join("")}</div>` : `<p class="empty">${esc(t("emptyShop"))}</p>`}
    ${visible.length < list.length ? `<div class="more"><button class="btn btn-yellow" type="button" data-more>${esc(t("loadMore"))}</button></div>` : ""}`;
  bindImages(main);
}

function findByUrl(url) {
  try {
    const last = decodeURIComponent(new URL(url, "https://dgtizers.eg").pathname.split("/").filter(Boolean).pop() || "");
    return state.byNorm.get(norm(last)) || null;
  } catch {
    return null;
  }
}
function renderProduct(main, slug, token) {
  const product = state.bySlug.get(decodePart(slug));
  if (!product) {
    renderNotFound(main);
    return;
  }
  paintProduct(main, product, null);
  window.scrollTo(0, 0);
  fetch(mediaUrl(product.folder, "product.json"))
    .then((response) => (response.ok ? response.json() : null))
    .then((detail) => {
      if (token !== renderToken || !detail) return;
      if (parseRoute().parts[1] !== slug && decodePart(parseRoute().parts[1]) !== product.slug) return;
      paintProduct(main, product, detail);
    })
    .catch(() => {});
}
function paintProduct(main, product, detail) {
  document.title = pname(product) + " · DGtizers";
  const price = detail && typeof detail.price_egp === "number" ? detail.price_egp : product.price_egp;
  const stock = (detail && detail.stock) || product.stock;
  const old = (detail && detail.price_old_text) || product.price_old_text || "";
  const text = detail
    ? (state.lang === "ar" ? (detail.description_text_ar || detail.description_text) : (detail.description_text || detail.description_text_ar))
    : cleanText(product.summary);
  const photos = detail && Array.isArray(detail.photos) && detail.photos.length
    ? detail.photos.map((photo) => photo.file)
    : (state.photos.has(product.folder) ? ["photos/01.webp"] : []);
  const gallery = photos.length
    ? `<div class="gallery-main">${photoHtml(product, photos[0])}</div>
       <div class="thumbs">${photos.map((file) => `<button type="button" data-photo="${esc(mediaUrl(product.folder, file))}" aria-label="${esc(pname(product))}">${photoHtml(product, file)}</button>`).join("")}</div>`
    : `<div class="gallery-main"><div class="ph">${esc(initials(product))}</div></div>`;
  const options = detail && Array.isArray(detail.options) ? detail.options : [];
  const optionHtml = options.map((option) => {
    const links = (option.choices || []).map((choice) => {
      const match = findByUrl(choice.url || "");
      return match
        ? `<a href="#/product/${encodeURIComponent(match.slug)}">${esc(choice.label)}</a>`
        : `<span>${esc(choice.label)}</span>`;
    }).join("");
    return `<p class="brand-name">${esc(option.name || t("color"))}</p><div class="choices">${links}</div>`;
  }).join("");
  const groups = new Map();
  (detail && detail.specs || []).forEach((spec) => {
    const group = spec.group || t("specs");
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(spec);
  });
  const specs = [...groups.entries()].map(([group, rows]) => `
    <h3>${esc(group)}</h3>
    <dl>${rows.map((row) => `<div><dt>${esc(row.name)}</dt><dd>${esc(row.value)}</dd></div>`).join("")}</dl>`).join("");
  const related = state.products.filter((item) => item.slug !== product.slug && item.categories[0] === product.categories[0])
    .sort((a, b) => (state.photos.has(b.folder) - state.photos.has(a.folder)) || ((b.stock === "In stock") - (a.stock === "In stock")))
    .slice(0, 4);
  const buyable = canBuy(product, price, stock);
  const buttonLabel = stock === "Pre-order" ? t("preOrder") : buyable ? t("add") : t("unavailable");
  main.innerHTML = `
    <p class="crumbs"><a href="#/">${esc(t("home"))}</a> / <a href="#/shop">${esc(t("navShop"))}</a> / <a href="${esc(shopHash({ cat: product.categories[0] }))}">${esc(catName(product.categories[0]))}</a></p>
    <article class="product">
      <div>${gallery}</div>
      <div>
        <p class="brand-name">${esc(brandName(product))}${product.model ? " · " + esc(product.model) : ""}</p>
        <h1>${esc(pname(product))}</h1>
        <p class="price" style="font-size:1.6rem;margin-top:10px">${old ? `<span class="old">${esc(old)}</span>` : ""}${esc(money(price))}</p>
        <p style="margin-top:8px"><span class="badge ${stockClass(stock)}">${esc(stockLabel(stock))}</span></p>
        ${optionHtml}
        <div class="buy">
          <div class="qty" aria-label="${esc(t("qty"))}">
            <button type="button" data-step="-1">−</button>
            <span id="qty">1</span>
            <button type="button" data-step="1">+</button>
          </div>
          <button class="btn btn-yellow" type="button" data-add="${esc(product.slug)}" ${buyable ? "" : "disabled"}>${esc(buttonLabel)}</button>
        </div>
        ${text ? `<h2 style="margin-top:28px;font-size:1.6rem">${esc(t("description"))}</h2><p class="prose">${esc(text)}</p>` : ""}
      </div>
    </article>
    ${specs ? `<section class="specs">${specs}</section>` : ""}
    ${related.length ? `<section class="section"><div class="section-head"><h2>${esc(t("related"))}</h2></div><div class="grid">${related.map(cardHtml).join("")}</div></section>` : ""}`;
  bindImages(main);
}

function renderAbout(main) {
  document.title = t("aboutTitle") + " · DGtizers";
  const blocks = ABOUT[state.lang].map(([title, body]) => `<article><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  main.innerHTML = `<div class="page-intro">${mascot("mascot-black.jpg", t("crewBlackT"))}<div><h1>${esc(t("aboutTitle"))}</h1><p class="lede">${esc(t("aboutLede"))}</p></div></div><div class="why" style="margin-top:20px">${blocks}</div>`;
}
function renderSupport(main) {
  document.title = t("supportTitle") + " · DGtizers";
  const blocks = POLICIES[state.lang].map(([id, title, lines]) => `
    <article class="policy" id="${esc(id)}"><h2>${esc(title)}</h2>${lines.map((line) => `<p style="margin-top:8px">${esc(line)}</p>`).join("")}</article>`).join("");
  main.innerHTML = `<div class="page-intro">${mascot("mascot-blue.jpg", t("crewBlueT"))}<div><h1>${esc(t("supportTitle"))}</h1><p class="lede">${esc(t("supportLede"))}</p></div></div><div class="support-grid" style="margin-top:20px">${blocks}</div>`;
}
function renderCart(main) {
  document.title = t("cartTitle") + " · DGtizers";
  if (!state.cart.length) {
    main.innerHTML = `<h1>${esc(t("cartTitle"))}</h1><p class="empty">${esc(t("emptyCart"))} <a href="#/shop">${esc(t("browse"))}</a></p>`;
    return;
  }
  const rows = state.cart.map((item) => {
    const product = state.bySlug.get(item.slug);
    const photo = product ? photoHtml(product) : `<div class="ph">${esc(item.brand.slice(0, 2))}</div>`;
    return `<div class="cart-row panel">
      ${photo}
      <div>
        <a href="#/product/${encodeURIComponent(item.slug)}"><strong>${esc(state.lang === "ar" && item.name_ar ? item.name_ar : item.name)}</strong></a>
        <p>${esc(money(item.price))}</p>
        <div class="qty">
          <button type="button" data-delta="-1" data-slug="${esc(item.slug)}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-delta="1" data-slug="${esc(item.slug)}">+</button>
        </div>
      </div>
      <button class="icon-btn" type="button" data-remove="${esc(item.slug)}">${esc(t("remove"))}</button>
    </div>`;
  }).join("");
  const sum = totals();
  main.innerHTML = `<h1>${esc(t("cartTitle"))}</h1>
    <div class="cart-layout" style="margin-top:16px">
      <div>${rows}</div>
      <aside class="summary">
        <p>${esc(t("subtotal"))}: <strong>${esc(money(sum.subtotal))}</strong></p>
        <p>${esc(t("shipping"))}: <strong>${esc(money(sum.shipping))}</strong></p>
        <p style="font-size:1.3rem;margin:8px 0">${esc(t("total"))}: <strong>${esc(money(sum.total))}</strong></p>
        <p>${esc(t("codNote"))}</p>
        <a class="btn btn-yellow" href="#/checkout" style="margin-top:12px">${esc(t("checkout"))}</a>
      </aside>
    </div>`;
  bindImages(main);
}
function renderCheckout(main) {
  document.title = t("checkoutTitle") + " · DGtizers";
  if (!state.cart.length) {
    main.innerHTML = `<h1>${esc(t("checkoutTitle"))}</h1><p class="empty">${esc(t("emptyCart"))} <a href="#/shop">${esc(t("browse"))}</a></p>`;
    return;
  }
  const sum = totals();
  const draft = state.draft || {};
  const errors = state.errors || [];
  const pay = draft.payment || "cod";
  main.innerHTML = `<h1>${esc(t("checkoutTitle"))}</h1>
    <div class="cart-layout" style="margin-top:16px">
      <form id="checkout-form" class="panel stack" novalidate>
        ${errors.length ? `<div class="errors" role="alert">${errors.map((item) => `<p>${esc(item)}</p>`).join("")}</div>` : ""}
        <label>${esc(t("name"))}<input name="name" type="text" required value="${esc(draft.name || "")}" autocomplete="name"></label>
        <label>${esc(t("phone"))}<input name="phone" type="tel" required value="${esc(draft.phone || "")}" autocomplete="tel"></label>
        <label>${esc(t("city"))}<input name="city" type="text" required value="${esc(draft.city || "")}" autocomplete="address-level2"></label>
        <label>${esc(t("address"))}<textarea name="address" required autocomplete="street-address">${esc(draft.address || "")}</textarea></label>
        <label>${esc(t("payment"))}
          <select class="field" name="payment">
            <option value="cod" ${pay === "cod" ? "selected" : ""}>${esc(t("payCod"))}</option>
            <option value="card" ${pay === "card" ? "selected" : ""}>${esc(t("payCard"))}</option>
            <option value="wallet" ${pay === "wallet" ? "selected" : ""}>${esc(t("payWallet"))}</option>
            <option value="installments" ${pay === "installments" ? "selected" : ""}>${esc(t("payInstall"))}</option>
          </select>
        </label>
        <label>${esc(t("notes"))}<textarea name="notes">${esc(draft.notes || "")}</textarea></label>
        <button class="btn btn-yellow" type="submit">${esc(t("place"))}</button>
      </form>
      <aside class="summary">
        ${state.cart.map((item) => `<p>${esc(state.lang === "ar" && item.name_ar ? item.name_ar : item.name)} × ${item.qty}</p>`).join("")}
        <p style="margin-top:10px">${esc(t("total"))}: <strong>${esc(money(sum.total))}</strong></p>
        <p>${esc(t("codNote"))}</p>
      </aside>
    </div>`;
}
function renderOrder(main, id) {
  document.title = t("orderTitle") + " · DGtizers";
  const order = loadOrders().find((item) => item.id === id);
  if (!order) {
    main.innerHTML = `<h1>${esc(t("orderTitle"))}</h1><p class="empty">${esc(t("missingOrder"))}</p>`;
    return;
  }
  const lines = order.items.map((item) => `<p>${esc(state.lang === "ar" && item.name_ar ? item.name_ar : item.name)} × ${item.qty} — ${esc(money(item.price * item.qty))}</p>`).join("");
  main.innerHTML = `<p class="brand-name">DGtizers</p><h1>${esc(t("orderTitle"))}</h1>
    <p class="order-id">${esc(order.id)}</p>
    <p class="lede">${esc(t("orderLede"))}</p>
    <div class="panel" style="margin-top:16px">
      <p><strong>${esc(order.name)}</strong> · ${esc(order.phone)}</p>
      <p>${esc(order.city)} — ${esc(order.address)}</p>
      <div style="margin-top:10px">${lines}</div>
      <p style="margin-top:10px">${esc(t("total"))}: <strong>${esc(money(order.total))}</strong></p>
      <button class="btn btn-blue" type="button" data-copy-order="${esc(order.id)}" style="margin-top:12px">${esc(t("copy"))}</button>
    </div>`;
}
function renderNotFound(main) {
  document.title = "DGtizers";
  main.innerHTML = `<h1>${esc(t("notFound"))}</h1><p class="empty"><a href="#/shop">${esc(t("browse"))}</a></p>`;
}

function render() {
  if (!state.ready) return;
  const token = ++renderToken;
  applyChrome();
  const route = parseRoute();
  const main = document.getElementById("app");
  const page = route.parts[0] || "home";
  if (page === "home") renderHome(main);
  else if (page === "shop") renderShop(main, route.params);
  else if (page === "product") renderProduct(main, route.parts[1], token);
  else if (page === "about") renderAbout(main);
  else if (page === "support") renderSupport(main);
  else if (page === "cart") renderCart(main);
  else if (page === "checkout") renderCheckout(main);
  else if (page === "order") renderOrder(main, decodePart(route.parts[1]));
  else renderNotFound(main);
  if (page !== "product") window.scrollTo(0, 0);
}

function addToCart(slug, qty) {
  const product = state.bySlug.get(slug);
  if (!product || !canBuy(product, product.price_egp, product.stock)) return;
  const amount = Math.min(10, Math.max(1, qty || 1));
  const existing = state.cart.find((item) => item.slug === slug);
  if (existing) existing.qty = Math.min(10, existing.qty + amount);
  else {
    state.cart.push({
      slug,
      qty: amount,
      name: product.name,
      name_ar: product.name_ar || "",
      price: product.price_egp,
      brand: product.brand,
    });
  }
  saveCart();
  toast(t("added"));
}
function changeQty(slug, delta) {
  const item = state.cart.find((entry) => entry.slug === slug);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.slug !== slug);
  if (item.qty > 10) item.qty = 10;
  saveCart();
  render();
}
function orderSummary(order) {
  const lines = order.items.map((item) => `- ${item.name} x ${item.qty} = ${item.price * item.qty} EGP`);
  return [
    `DGtizers ${order.id}`,
    `${order.name} | ${order.phone}`,
    `${order.city} | ${order.address}`,
    `Payment: ${order.payment}`,
    ...lines,
    `Shipping: ${order.shipping} EGP`,
    `Total: ${order.total} EGP`,
    order.notes ? `Notes: ${order.notes}` : "",
  ].filter(Boolean).join("\n");
}
function submitOrder(form) {
  const draft = {
    name: String(form.get("name") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    city: String(form.get("city") || "").trim(),
    address: String(form.get("address") || "").trim(),
    payment: String(form.get("payment") || "cod"),
    notes: String(form.get("notes") || "").trim(),
  };
  const errors = [];
  const digits = draft.phone.replace(/\D/g, "");
  const sum = totals();
  if (draft.name.length < 3) errors.push(t("errName"));
  if (digits.length < 8) errors.push(t("errPhone"));
  if (draft.city.length < 2) errors.push(t("errCity"));
  if (draft.address.length < 5) errors.push(t("errAddress"));
  if (draft.payment === "cod" && sum.total > COD_MAX) errors.push(t("errCod"));
  if (draft.payment === "installments" && sum.total < INSTALLMENT_MIN) errors.push(t("errInstall"));
  state.draft = draft;
  state.errors = errors;
  if (errors.length) {
    renderCheckout(document.getElementById("app"));
    return;
  }
  const order = {
    id: "DG-" + Date.now().toString(36).toUpperCase(),
    ...draft,
    items: state.cart.map((item) => ({ ...item })),
    subtotal: sum.subtotal,
    shipping: sum.shipping,
    total: sum.total,
    createdAt: new Date().toISOString(),
  };
  const orders = loadOrders();
  orders.unshift(order);
  try { localStorage.setItem("dgtizers-orders", JSON.stringify(orders)); }
  catch { /* ignore */ }
  state.cart = [];
  state.errors = [];
  saveCart();
  location.hash = "#/order/" + order.id;
}

function onClick(event) {
  const more = event.target.closest("[data-more]");
  if (more) {
    shopShown += 24;
    const y = window.scrollY;
    renderShop(document.getElementById("app"), parseRoute().params);
    window.scrollTo(0, y);
    return;
  }
  const step = event.target.closest("[data-step]");
  if (step) {
    const label = document.getElementById("qty");
    const next = Math.min(10, Math.max(1, Number(label.textContent) + Number(step.dataset.step)));
    label.textContent = String(next);
    return;
  }
  const add = event.target.closest("[data-add]");
  if (add) {
    const qty = Number(document.getElementById("qty")?.textContent || 1);
    addToCart(add.dataset.add, qty);
    return;
  }
  const delta = event.target.closest("[data-delta]");
  if (delta) {
    changeQty(delta.dataset.slug, Number(delta.dataset.delta));
    return;
  }
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.cart = state.cart.filter((item) => item.slug !== remove.dataset.remove);
    saveCart();
    render();
    return;
  }
  const photo = event.target.closest("[data-photo]");
  if (photo) {
    const img = document.querySelector(".gallery-main img");
    if (img) img.src = photo.dataset.photo;
    return;
  }
  const copy = event.target.closest("[data-copy-order]");
  if (copy) {
    const order = loadOrders().find((item) => item.id === copy.dataset.copyOrder);
    if (!order) return;
    const text = orderSummary(order);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => toast(t("copied"))).catch(() => toast(text));
    } else toast(t("copied"));
  }
}
function onChange(event) {
  if (!event.target.matches("[data-filter]")) return;
  const filters = {
    q: document.getElementById("search-input").value.trim(),
    cat: document.querySelector('[data-filter="cat"]').value,
    brand: document.querySelector('[data-filter="brand"]').value,
    stock: document.querySelector('[data-filter="stock"]').value,
    sort: document.querySelector('[data-filter="sort"]').value,
  };
  go(shopHash(filters));
}
function onSubmit(event) {
  if (event.target.id === "search-form") {
    event.preventDefault();
    const onShop = (parseRoute().parts[0] || "") === "shop";
    const filters = {
      q: new FormData(event.target).get("q").trim(),
      cat: onShop ? document.querySelector('[data-filter="cat"]')?.value || "" : "",
      brand: onShop ? document.querySelector('[data-filter="brand"]')?.value || "" : "",
      stock: onShop ? document.querySelector('[data-filter="stock"]')?.value || "" : "",
      sort: onShop ? document.querySelector('[data-filter="sort"]')?.value || "featured" : "featured",
    };
    go(shopHash(filters));
    document.getElementById("nav").classList.remove("open");
  }
  if (event.target.id === "checkout-form") {
    event.preventDefault();
    submitOrder(new FormData(event.target));
  }
}

function normalize(product) {
  const slug = String(product.folder || "").replace(/\/$/, "").split("/").pop();
  return {
    ...product,
    slug,
    brand: product.brand || "Other",
    categories: product.categories && product.categories.length ? product.categories : ["Uncategorized"],
  };
}
async function boot() {
  const saved = localStorage.getItem("dgtizers-lang");
  state.lang = saved === "ar" || saved === "en" ? saved : ((navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en");
  state.cart = loadCart();
  applyChrome();
  try {
    const [catalogRes, photoRes] = await Promise.all([
      fetch("data/catalog.json"),
      fetch("data/with-photos.json"),
    ]);
    if (!catalogRes.ok) throw new Error("catalog");
    const catalog = await catalogRes.json();
    const photoList = photoRes.ok ? await photoRes.json() : [];
    state.products = catalog.products.map(normalize);
    state.photos = new Set(photoList);
    state.bySlug = new Map(state.products.map((product) => [product.slug, product]));
    state.byNorm = new Map(state.products.map((product) => [norm(product.slug), product]));
    state.fetchedAt = catalog.fetched_at || "";
    state.ready = true;
    if (!location.hash) history.replaceState(null, "", "#/");
    render();
  } catch {
    document.getElementById("app").innerHTML = `<p class="empty">Open this folder with start.bat, then visit http://localhost:5173 so the catalog can load.</p>`;
  }
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  state.lang = state.lang === "ar" ? "en" : "ar";
  try { localStorage.setItem("dgtizers-lang", state.lang); } catch { /* ignore */ }
  render();
});
document.getElementById("menu-btn").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu-btn").setAttribute("aria-expanded", open ? "true" : "false");
});
document.getElementById("nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.getElementById("nav").classList.remove("open");
    document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("click", onClick);
document.addEventListener("change", onChange);
document.addEventListener("submit", onSubmit);
window.addEventListener("hashchange", render);
boot();
