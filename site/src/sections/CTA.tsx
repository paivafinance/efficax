import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { contact, cta } from '../content/site'
import { cx } from '../lib/cx'
import s from './CTA.module.css'

/** O único bloco verde cheio da página. */
export function CTA() {
  return (
    <section id={cta.id} className={s.section}>
      <Reveal className={cx('wrap', s.grid)}>
        <div>
          <h2 className={s.title}>{cta.title}</h2>
          <p className={s.text}>{cta.text}</p>
        </div>
        <div className={s.actions}>
          <Button href={contact.whatsappHref} variant="onBrand" size="lg" iconLeft={<MessageCircle size={17} />}>
            {cta.whatsapp}
          </Button>
          <Button href={`mailto:${contact.email}`} variant="secondaryOnBrand" size="lg" iconLeft={<Mail size={17} />}>
            {cta.email}
          </Button>
          <div className={s.meta}>
            <span className="num">{contact.whatsappDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{contact.email}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
