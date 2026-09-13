import { Mail, Phone } from 'lucide-react'
import { Logo } from '../components/Logo'
import { contact, footer, nav } from '../content/site'
import { cx } from '../lib/cx'
import s from './Footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.grid}>
          <div>
            <Logo variant="onDark" height={28} />
            <p className={s.tagline}>{footer.tagline}</p>
          </div>
          <div>
            <div className={s.eyebrow}>Navegação</div>
            <ul className={s.links}>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={s.eyebrow}>Contato</div>
            <ul className={s.links}>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Phone size={15} />
                  <span className="num">{contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx(s.bottom)}>
          <span>{footer.copyright}</span>
          <span>{contact.domain}</span>
        </div>
      </div>
    </footer>
  )
}
