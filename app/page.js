import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <tittle>Bakarin Boss</tittle>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />

        <script src="https://unpkg.com/feather-icons" defer></script>

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>
      <main>
        <nav class="navbar">
          <a href="#" class="navbar-logo">Bakarin<span>Boss</span>.</a>

          <div class="navbar-nav">
            <a href="#home">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#products">Produk Kami</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Kontak</a>
          </div>

          <div class="navbar-extra">
            <a href="#" id="search-button"><i data-feather="search"></i></a>
            <a href="#" id="shopping-cart-button">
              <i data-feather="shopping-cart"></i>
              <span
                class="quantity-badge"
                x-show="$store.cart.quantity"
                x-text="$store.cart.quantity"
              ></span>
            </a>
            <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
          </div>

          <div class="search-form">
            <input type="search" id="search-box" placeholder="search here..." />
            <label for="search-box"><i data-feather="search"></i></label>
          </div>

          <div class="shopping-cart">
            <template x-for="(item, index) in $store.cart.items" x-keys="index">
              <div class="cart-item">
                <image src="img/product/${item.img}" alt="item.name" />
                <div class="item-detail">
                  <h3 x-text="item.name"></h3>
                  <div class="item-price">
                    <span x-text="rupiah(item.price)"></span> &times;
                    <button id="remove" click="$store.cart.remove(item.id)">
                      &minus;
                    </button>
                    <span x-text="item.quantity"></span>
                    <button id="add" click="$store.cart.add(item)">&plus;</button>
                    &equals;
                    <span x-text="rupiah(item.total)"></span>
                  </div>
                </div>
              </div>
            </template>
            <h4 x-show="!$store.cart.items.length">
              Cart it Empty
            </h4>
            <h4 x-show="$store.cart.items.length">
              Total : <span x-text="rupiah($store.cart.total)"></span>
            </h4>

            <div class="form-container" x-show="$store.cart.items.length">
            <form action="" id="checkoutForm">
              <h5>Customer Detail</h5>

              <label for="name">
                <span>Name</span>
                <input type="text" name="name" id="name" />
              </label>

              <label for="email">
                <span>Email</span>
                <input type="email" name="email" id="email" />
              </label>
              <label for="phone">
                <span>Phone</span>
                <input type="number" name="phone" id="phone" autocomplete="off" />
              </label>
              <button
                class="checkout-button"
                type="submit"
                id="checkout-button"
                value="checkout"
              >
                Checkout
              </button>
            </form>
          </div>

          </div>
        </nav>

        <section class="hero" id="home">
          <div class="mask-container">
            <main class="content">
              <h1>
                Semua orang bisa membakar, tetapi kami memberikan rasa dan sensasi
                <span>Berbeda</span> dari yang biasa orang lain bakar
              </h1>
              <p>Please enjoy with our menu !</p>
            </main>
          </div>
        </section>

        <section id="about" class="about">
          <h2><span>Tentang</span> Kami</h2>

          <div class="row">
            <div class="about-img">
              <img src="img/menu2.jpg" alt="Tentang Kami" />
            </div>
            <div class="content">
              <h3>Kenapa Memilih Menu kami?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                ipsam atque unde maiores rem aspernatur consequatur delectus
                assumenda magnam impedit.
              </p>
            </div>
          </div>
        </section>

        <section id="menu" class="menu">
          <h2><span>Menu</span> Kami</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aspernatur
            accusantium. Quidem ab aliquid corporis.
          </p>

          <div class="row">
            <div class="menu-card">
              <img
                src="img/Menu/menu.jpg"
                alt="Mexican Burger"
                class="menu-card-img"
              />
              <h3 class="menu-card-title">- Mexican Burger -</h3>
              <p class="menu-card-price">IDR 20K</p>
            </div>
            <div class="menu-card">
              <img
                src="img/Menu/menu.jpg"
                alt="Mexican Burger"
                class="menu-card-img"
              />
              <h3 class="menu-card-title">- Mexican Burger -</h3>
              <p class="menu-card-price">IDR 20K</p>
            </div>
            <div class="menu-card">
              <img
                src="img/Menu/menu.jpg"
                alt="Mexican Burger"
                class="menu-card-img"
              />
              <h3 class="menu-card-title">- Mexican Burger -</h3>
              <p class="menu-card-price">IDR 20K</p>
            </div>
            <div class="menu-card">
              <img
                src="img/Menu/menu.jpg"
                alt="Mexican Burger"
                class="menu-card-img"
              />
              <h3 class="menu-card-title">- Mexican Burger -</h3>
              <p class="menu-card-price">IDR 20K</p>
            </div>
            <div class="menu-card">
              <img
                src="img/Menu/menu.jpg"
                alt="Mexican Burger"
                class="menu-card-img"
              />
              <h3 class="menu-card-title">- Mexican Burger -</h3>
              <p class="menu-card-price">IDR 20K</p>
            </div>
          </div>
        </section>

        <section class="products" id="products" x-data="products">
          <h2><span>Produk Unggulan</span> Kami</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione,
            temporibus cum laboriosam sunt eligendi.
          </p>

          <div class="row">
            <template x-for="(item, index) in items" x-key="index">
              <div class="product-card">
                <div class="product-icon">
                  <a href="#">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <img src="../public/img/feather-sprite.svg#shopping-cart" />
                    </svg>
                  </a>
                  <a href="#" class="item-detail-button">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#eye" />
                    </svg>
                  </a>
                </div>
                <div class="product-image">
                  <img src="`img/product/${item.img}`" alt="item.name" />
                </div>
                <div class="product-content">
                  <h3 x-text="item.name"></h3>
                  <div class="product-stars">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#star" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#star" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#star" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#star" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <use href="img/feather-sprite.svg#star" />
                    </svg>
                  </div>
                  <div class="product-price">
                    <span x-text="rupiah(item.price)"></span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </section>

        <section id="blog" class="blog">
          <h2><span>Bl</span>og</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aspernatur
            accusantium. Quidem ab aliquid corporis.
          </p>

          <div class="row">
            <div class="blog-card">
              <img
                src="img/artikel/berita1.jpg"
                alt="Coffee"
                class="blog-card-img"
              />
              <h3 class="blog-card-title">- Barbeque From Spanyola -</h3>
              <p class="blog-card-price">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                illo fugiat magnam atque reiciendis! Sequi.
              </p>
            </div>
            <div class="blog-card">
              <img
                src="img/artikel/berita1.jpg"
                alt="Coffee"
                class="blog-card-img"
              />
              <h3 class="blog-card-title">- Barbeque From Spanyola -</h3>
              <p class="blog-card-price">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eos
                minus molestiae recusandae accusantium magnam?
              </p>
            </div>
            <div class="blog-card">
              <img
                src="img/artikel/berita1.jpg"
                alt="Coffee"
                class="blog-card-img"
              />
              <h3 class="blog-card-title">- Barbeque From Spanyola -</h3>
              <p class="blog-card-price">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates aliquid harum porro repellendus mollitia.
              </p>
            </div>
            <div class="blog-card">
              <img
                src="img/artikel/berita1.jpg"
                alt="Coffee"
                class="blog-card-img"
              />
              <h3 class="blog-card-title">- Barbeque From Spanyola -</h3>
              <p class="blog-card-price">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repellat non culpa beatae enim quas!
              </p>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <h2><span>Kontak</span> Kami</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tempore.
          </p>

          <div class="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7897278742453!2d106.8829223763819!3d-6.158910293828278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ca5fa65ff1%3A0xafe23d29167e2e69!2sBakarin%20Boss!5e0!3m2!1sid!2sid!4v1699441826589!5m2!1sid!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="map"
            ></iframe>

            <form action="">
              <div class="input-grup">
                <i data-feather="user"></i>
                <input type="text" placeholder="name" />
              </div>
              <div class="input-grup">
                <i data-feather="mail"></i>
                <input type="text" placeholder="e-mail" />
              </div>
              <div class="input-grup">
                <i data-feather="phone"></i>
                <input type="text" placeholder="phone" />
              </div>
              <button type="submit" class="btn">kirim pesan</button>
            </form>
          </div>
        </section>

        <footer>
          <div class="socials">
            <a href="#"><i data-feather="instagram"></i></a>
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="facebook"></i></a>
          </div>

          <div class="links">
            <a href="#home">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Kontak</a>
          </div>

          <div class="credit">
            <p>Created by <a href="">fianfirdaus</a> | &copy; 2023.</p>
          </div>
        </footer>

      </main>
    </div>
  )
}
