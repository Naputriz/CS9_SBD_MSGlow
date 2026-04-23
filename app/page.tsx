import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/LOGO MS GLOW_TEXT.9d86f41.svg"
            alt="MS GLOW Logo"
            width={550}
            height={160}
            style={{ objectFit: "contain" }}
          />
        </div>
      </header>

      {/* About Us */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <div style={{ width: "60px", height: "2px", background: "#333", margin: "0 auto 2rem" }}></div>
        <p className={styles.aboutText}>
          MS GLOW memulai perjalanan pada 2013 sebagai local brand perawatan kulit dan tubuh secara online. MS GLOW sendiri merupakan singkatan dari motto Magic for Skin, di mana kami ingin memberikan perawatan terbaik untuk wanita Indonesia.
        </p>
        <p className={styles.aboutText}>
          Kini, MS GLOW telah berkembang menjadi brand yang tak hanya menyediakan perawatan untuk wajah dan tubuh, tapi juga kosmetik. MS GLOW memiliki Distributor, Agen, Member & Reseller resmi hampir di seluruh penjuru Indonesia. Tak berhenti di situ, MS GLOW bahkan merambah mancanegara.
        </p>
        <p className={styles.aboutText}>
          Bukan hanya diperuntukkan bagi wanita dewasa, MS GLOW juga berkembang menjadi brand yang menjangkau seluruh kalangan mulai dari anak-anak, remaja, hingga pria sekalipun. MS GLOW juga memenuhi kebutuhan kecantiikan dan kesehatan kulit dari luar dan dalam.
        </p>
        <p className={styles.aboutText}>
          MS GLOW memahami bahwa kecantikan dan kesehatan kulit merupakan aset terpenting. Karena itu, MS GLOW terus menjaga kualitas dan mendapatkan sertifikasi BPOM, Halal dan teruji secara klinis untuk memberikan perawatan kulit terbaik.
        </p>
      </section>

      {/* Our Products */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Image src="/images/product1.png" alt="MS Glow Product" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>MS Glow</p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Image src="/images/product2.png" alt="MS Glow Cosmetics" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>MS Glow Cosmetics</p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Image src="/images/product3.png" alt="MS Body Cares" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>MS Body Cares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionSubtitle}>Our pleasant to serve you more</p>

        <div className={styles.contactGridTop}>
          <div className={styles.contactCard}>
            <div className={styles.contactImageWrapper}>
              <Image src="/images/customer_service.png" alt="Customer Service" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.contactImageLabel}>Customer Service</div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactImageWrapper}>
              <Image src="/images/legal.png" alt="Legal" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.contactImageLabel}>Legal</div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactImageWrapper}>
              <Image src="/images/public_relation.png" alt="Public Relation" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.contactImageLabel}>Public Relation</div>
          </div>
        </div>

        <div className={styles.contactGridBottom}>
          <div className={`${styles.contactCard} ${styles.contactCardHalf}`}>
            <div className={styles.contactImageWrapper}>
              <Image src="/images/seller.png" alt="Become Our Seller" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className={styles.productImage} unoptimized />
            </div>
            <div className={styles.contactImageLabel}>Become Our Seller</div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.officeImageWrapper}>
            <Image src="/images/office.png" alt="MS GLOW Office" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>
          <div className={styles.officeInfo}>
            <h3 className={styles.officeTitle}>MS Glow Office</h3>
            <div className={styles.officeDetail}>
              <span className={styles.officeIcon}>📍</span>
              <span>Jl. Komud Abdurrahman Saleh No. 58, Kec. Pakis, Kabupaten Malang, Jawa Timur- Indonesia</span>
            </div>
            <div className={styles.officeDetail}>
              <span className={styles.officeIcon}>📞</span>
              <span>(0341) 3022614</span>
            </div>
            <div className={styles.officeDetail}>
              <span className={styles.officeIcon}>✉️</span>
              <span>customercare@msglowid.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className={styles.mainFooter}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerLogoText}>MS GLOW</h2>
          <div className={styles.socialIcons}>
            <span>IG</span>
            <span>TikTok</span>
            <span>YT</span>
            <span>X</span>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <h4>About Us</h4>
            <p>Brand Story</p>
            <p>Sub Brands</p>
            <p>Aesthetic Clinic</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Our Products</h4>
            <p>MS Glow</p>
            <p>MS Glow Cosmetics</p>
            <p>MS Body Cares</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Our Sellers</h4>
            <p>Find on Map</p>
            <p>Find by ID</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Media</h4>
            <p>YouTube Series</p>
            <p>Glowing Journal</p>
            <p>News</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <p>Customer Care</p>
            <p>Public Relations</p>
            <p>Legal</p>
            <p>Join Seller</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Helpdesk</h4>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Sitemap</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
