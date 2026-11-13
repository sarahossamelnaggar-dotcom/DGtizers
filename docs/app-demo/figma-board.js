(() => {
  const board = document.getElementById("board");
  const shell = document.getElementById("phone-shell");

  const frames = [
    {
      name: "01 · Home",
      html: `
        <header class="app-top">
          <img class="logo" src="../assets/logo-en.png" alt="DGtizers">
          <span class="icon-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12zM6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <i>1</i>
          </span>
        </header>
        <div class="scroll">
          <p class="kicker">Your ideas. No limits.</p>
          <h2 class="hero">Turning ideas<br><em>into what's next.</em></h2>
          <p class="copy">Graphic tablets, pen displays, and people who get it — across Egypt.</p>
          <div class="cta-row">
            <span class="btn btn-line">Explore tools</span>
            <span class="btn btn-glass">Find my match</span>
          </div>
          <div class="hero-visual">
            <img class="float back" src="../media/products/Wacom/wacom-intuos-ctl-6100-mediumblack/photos/01.webp" alt="">
            <img class="float front" src="../media/products/Xencelabs/xencelabs-pen-tablet-small-bph0812w-a/photos/01.webp" alt="">
            <span class="sticker">
              <img src="../assets/mascot-blue.jpg" alt="">
              <span>Let's create.</span>
            </span>
          </div>
          <div class="section-head"><h3>Shop by category</h3><span>See all</span></div>
          <div class="cats">
            <span class="cat tone-a">Tablets</span>
            <span class="cat tone-b">Monitors</span>
            <span class="cat tone-c">Accessories</span>
          </div>
          <div class="section-head"><h3>Ready to ship</h3><span>See all</span></div>
          <div class="product-row">
            <span class="card">
              <img src="../media/products/Wacom/wacom-intuos-ctl-6100-mediumblack/photos/01.webp" alt="">
              <strong>Wacom Intuos Medium</strong>
              <span>12,500 EGP</span>
            </span>
            <span class="card">
              <img src="../media/products/Bosto/bosto-t430k-graphics-tablet/photos/01.webp" alt="">
              <strong>Bosto T430K</strong>
              <span>2,900 EGP</span>
            </span>
          </div>
        </div>
        <nav class="tabbar">
          <span class="active"><span>Home</span></span>
          <span><span>Shop</span></span>
          <span><span>Cart</span></span>
          <span><span>Help</span></span>
        </nav>`
    },
    {
      name: "02 · Shop",
      html: `
        <header class="app-top">
          <span class="back">←</span>
          <strong>Shop</strong>
          <span class="icon-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12zM6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <i>1</i>
          </span>
        </header>
        <div class="scroll">
          <div class="chips">
            <span class="chip on">All</span>
            <span class="chip">Tablets</span>
            <span class="chip">Monitors</span>
            <span class="chip">In stock</span>
          </div>
          <p class="meta">Catalog · same products as the website</p>
          <div class="shop-grid">
            <span class="card tall">
              <img src="../media/products/Wacom/wacom-intuos-ctl-6100-mediumblack/photos/01.webp" alt="">
              <strong>Wacom Intuos CTL-6100</strong>
              <span>In stock · 12,500 EGP</span>
            </span>
            <span class="card tall">
              <img src="../media/products/Xencelabs/xencelabs-pen-tablet-small-bph0812w-a/photos/01.webp" alt="">
              <strong>Xencelabs Pen Tablet S</strong>
              <span>In stock · 9,800 EGP</span>
            </span>
            <span class="card tall">
              <img src="../media/products/Bosto/bosto-t430k-graphics-tablet/photos/01.webp" alt="">
              <strong>Bosto T430K</strong>
              <span>In stock · 2,900 EGP</span>
            </span>
            <span class="card tall">
              <img src="../media/products/DIGIDRAW/digidraw-drawing-tablet-turing-smart-m/photos/01.webp" alt="">
              <strong>DIGIDRAW Turing Smart M</strong>
              <span>In stock · 3,450 EGP</span>
            </span>
          </div>
        </div>
        <nav class="tabbar">
          <span><span>Home</span></span>
          <span class="active"><span>Shop</span></span>
          <span><span>Cart</span></span>
          <span><span>Help</span></span>
        </nav>`
    },
    {
      name: "03 · Product",
      html: `
        <header class="app-top">
          <span class="back">←</span>
          <strong>Product</strong>
          <span class="icon-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12zM6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <i>1</i>
          </span>
        </header>
        <div class="scroll">
          <div class="gallery">
            <img src="../media/products/Wacom/wacom-intuos-ctl-6100-mediumblack/photos/01.webp" alt="">
          </div>
          <p class="brand-tag">Wacom · Graphic Tablets</p>
          <h2 class="product-title">Wacom Intuos Medium CTL-6100</h2>
          <p class="price">12,500 EGP <span class="stock">In stock</span></p>
          <p class="copy">Matches website product detail: gallery, price, stock, and specs.</p>
          <ul class="bullets">
            <li>Battery-free pen</li>
            <li>4 ExpressKeys</li>
            <li>Windows & macOS</li>
          </ul>
        </div>
        <div class="buy-bar"><span class="btn btn-yellow">Add to cart</span></div>`
    },
    {
      name: "04 · Cart",
      html: `
        <header class="app-top">
          <span class="back">←</span>
          <strong>Your cart</strong>
          <span class="spacer"></span>
        </header>
        <div class="scroll">
          <article class="cart-line">
            <img src="../media/products/Wacom/wacom-intuos-ctl-6100-mediumblack/photos/01.webp" alt="">
            <div>
              <strong>Wacom Intuos Medium</strong>
              <p>12,500 EGP</p>
              <div class="qty"><span>−</span><b>1</b><span>+</span></div>
            </div>
          </article>
          <div class="summary glass">
            <div><span>Subtotal</span><strong>12,500 EGP</strong></div>
            <div><span>Shipping</span><strong>50 EGP</strong></div>
            <div class="total"><span>Total</span><strong>12,550 EGP</strong></div>
          </div>
          <p class="note">Same cart logic as the website demo checkout.</p>
          <span class="btn btn-yellow wide">Checkout</span>
        </div>
        <nav class="tabbar">
          <span><span>Home</span></span>
          <span><span>Shop</span></span>
          <span class="active"><span>Cart</span></span>
          <span><span>Help</span></span>
        </nav>`
    },
    {
      name: "05 · Checkout",
      html: `
        <header class="app-top">
          <span class="back">←</span>
          <strong>Checkout</strong>
          <span class="spacer"></span>
        </header>
        <div class="scroll">
          <label class="field"><span>Full name</span><input value="Sara Designer" readonly></label>
          <label class="field"><span>Phone</span><input value="01xxxxxxxxx" readonly></label>
          <label class="field"><span>City</span><input value="Cairo" readonly></label>
          <label class="field"><span>Notes</span><textarea readonly>Demo order — mirrors website flow</textarea></label>
          <span class="btn btn-yellow wide">Place order</span>
        </div>`
    },
    {
      name: "06 · Help",
      html: `
        <header class="app-top">
          <span class="back">←</span>
          <strong>Help</strong>
          <span class="spacer"></span>
        </header>
        <div class="scroll">
          <div class="help-card glass">
            <img src="../assets/mascot-blue.jpg" alt="">
            <div>
              <h3>Technology & support</h3>
              <p>72-hour delivery · 50 EGP shipping · 0% installments</p>
            </div>
          </div>
          <div class="help-card glass">
            <h3>Delivery</h3>
            <p>Across Egypt, weekends excluded. Flat delivery fee.</p>
          </div>
          <div class="help-card glass">
            <h3>Warranty</h3>
            <p>Official distributor support for Wacom, XPPen, Huion, and more.</p>
          </div>
        </div>
        <nav class="tabbar">
          <span><span>Home</span></span>
          <span><span>Shop</span></span>
          <span><span>Cart</span></span>
          <span class="active"><span>Help</span></span>
        </nav>`
    }
  ];

  frames.forEach((frame) => {
    const node = shell.content.cloneNode(true);
    node.querySelector(".name").textContent = frame.name;
    node.querySelector(".frame-body").innerHTML = frame.html;
    board.appendChild(node);
  });
})();
