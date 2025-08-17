import './styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'LCATO',
  description: 'LCATO — بيت خبرة استشاري متكامل',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>
          <div className="container navbar">
            <div className="brand">
              <img src="/logo.svg" alt="LCATO" />
              <Link href="/">LCATO</Link>
            </div>
            <nav>
              <ul>
                <li><Link href="/who-is-lcato">Who is LCATO</Link></li>
                <li><Link href="/industries">القطاعات</Link></li>
                <li><Link href="/services">الخدمات</Link></li>
                <li><Link href="/careers">التوظيف</Link></li>
                <li><Link href="/contact">تواصل معنا</Link></li>
              </ul>
            </nav>
            <Link className="cta" href="/contact">ابدأ التحدّث معنا</Link>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            <p><strong>تواصل معنا</strong></p>
            <p>البريد: <a href="mailto:info@lcato.com">info@lcato.com</a> · الجوال: <a href="tel:+966506766637">+966 50 676 6637</a></p>
            <small>جميع خدمات LCATO تُقدّم بشكل سحابي وآمن.</small>
          </div>
        </footer>
      </body>
    </html>
  )
}
