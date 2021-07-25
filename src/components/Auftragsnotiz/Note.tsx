import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Container } from '@/components/MicroComponents/Container'
import {
  Anrufnummer,
  EMail,
  PreisPro100Liter,
  Fuellstand,
  PreisGenannt,
  Sondervereinbarung,
  Bestellzeit,
} from './Inputs'

type CopyTextType = {
  Telefon: string
  'E-mail': string
  Bestellzeit: string
  Preis: string
  Füllstand: string
  'Preis genannt': string
  Sondervereinbarung: string
}

type FormData = {
  anrufnummer: string
  email: string
  bestellzeit: string
  preis: string
  fuellstand: string
  preisgenannt: string
  sondervereinbarung: string
}

export const Note = () => {
  const { register, handleSubmit, reset } = useForm()
  const [copyText, setCopyText] = useState<CopyTextType | null>(null)

  const onSubmit = (data: FormData) => {
    setCopyText({
      Telefon: ` ${data.anrufnummer ? data.anrufnummer : '---'}`,
      'E-mail': ` ${data.email ? data.email : '---'}`,
      Bestellzeit: ` ${data.bestellzeit.slice(0, 2)}:${data.bestellzeit.slice(
        2,
        4
      )} Uhr`,
      Preis: ` ${data.preis} €`,
      Füllstand: ` ${data.fuellstand} %`,
      'Preis genannt': ` ${data.preisgenannt ? 'JA' : 'NEIN'}`,
      Sondervereinbarung: ` ${
        data.sondervereinbarung ? data.sondervereinbarung : '---'
      }`,
    })
    reset()
  }

  useEffect(() => {
    if (copyText) {
      const normalizedString = JSON.stringify(copyText)
        .replace(/["{}]/g, '')
        .replaceAll(',', ', ')

      console.log(normalizedString)

      navigator.clipboard.writeText(normalizedString)
    }
  }, [copyText])

  return (
    <Container>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <EMail ref={register} />
        <Anrufnummer ref={register} />
        <Bestellzeit ref={register} />
        <PreisPro100Liter ref={register} />
        <Fuellstand ref={register} />
        <PreisGenannt ref={register} />
        <Sondervereinbarung ref={register} />
        <button type='submit' className='button-outlined'>
          copy
        </button>
      </form>
    </Container>
  )
}
