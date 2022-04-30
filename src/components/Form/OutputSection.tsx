import {
  calcGesamtPreis,
  calcPreisGesamtmenge,
  calcPreisProLiter,
  calcZuschlag,
} from '@/utils/calculations'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { IForm } from 'src/types'

interface Props {
  formState: IForm
}

export const OutputSection = ({ formState }: Props) => {
  const {
    literpreis,
    liefermenge,
    füllstand,
    tankvolumen,
    mengenzuschlag,
    dieselzuschlag,
    adrzuschlag,
  } = formState

  return (
    <section className='flex flex-col w-full items-center p-5'>
      <table className='w-4/5'>
        <thead className='border-b border-b-slate-200'>
          <tr className=''>
            <th className='text-left'>Liefermenge:</th>
            <th className='text-right'></th>
            <th className='text-right'> {liefermenge} Liter</th>
          </tr>
          {füllstand !== null ||
            (füllstand !== undefined && (
              <>
                <tr className='text-sm'>
                  <td className='text-left'>Behältervolumen:</td>
                  <td className='text-right'></td>
                  <td className='text-right'> {tankvolumen} Liter</td>
                </tr>
                <tr className='text-sm'>
                  <td className='text-left'>Füllstand:</td>
                  <td className='text-right'></td>
                  <td className='text-right'> {füllstand} %</td>
                </tr>
              </>
            ))}
        </thead>
        <tbody className='font-base'>
          <tr className='text-xs'>
            <td className=''></td>

            <td className='text-right cursor-pointer hover:text-hover  pt-2'>
              zzgl. MwSt.
            </td>

            <td className='text-right cursor-pointer hover:text-hover pt-2'>
              inkl. MwSt.
            </td>
          </tr>
          <tr className=''>
            <td className=''>Preis/l:</td>
            <td className='text-right cursor-pointer hover:text-hover'>
              {calcPreisProLiter(literpreis).netto}
            </td>
            <td className='text-right cursor-pointer hover:text-hover'>
              {calcPreisProLiter(literpreis).brutto}
            </td>
          </tr>
          <tr className=''>
            <td className=''>Flüssiggas:</td>
            <td className='text-right cursor-pointer hover:text-hover'>
              {calcPreisGesamtmenge(literpreis, liefermenge).netto}
            </td>
            <td className='text-right cursor-pointer hover:text-hover'>
              {calcPreisGesamtmenge(literpreis, liefermenge).brutto}
            </td>
          </tr>

          {mengenzuschlag !== 0 && (
            <tr className=''>
              <td className=''>Teilmengenzuschlag:</td>
              <td className='text-right cursor-pointer hover:text-hover'>
                {calcZuschlag(mengenzuschlag).netto}
              </td>
              <td className='text-right cursor-pointer hover:text-hover'>
                {calcZuschlag(mengenzuschlag).brutto}
              </td>
            </tr>
          )}
          {adrzuschlag !== 0 && (
            <>
              <tr className=''>
                <td className=''>Gefahrgutzuschlag:</td>
                <td className='text-right cursor-pointer hover:text-hover'>
                  {calcZuschlag(adrzuschlag).netto}
                </td>
                <td className='text-right cursor-pointer hover:text-hover'>
                  {calcZuschlag(adrzuschlag).brutto}
                </td>
              </tr>
              <tr className=''>
                <td className='pb-3'>Dieselzuschlag:</td>
                <td className='pb-3 text-right cursor-pointer hover:text-hover'>
                  {calcZuschlag(dieselzuschlag).netto}
                </td>
                <td className='pb-3 text-right cursor-pointer hover:text-hover'>
                  {calcZuschlag(dieselzuschlag).brutto}
                </td>
              </tr>
            </>
          )}
          <tr className='border-t border-b-slate-200 font-bold'>
            <td className=''>Gesamtpreis:</td>

            <td
              role='nettoGesamtpreis'
              className='text-right cursor-pointer hover:text-hover'
            >
              {
                calcGesamtPreis(
                  literpreis,
                  liefermenge,
                  mengenzuschlag,
                  adrzuschlag,
                  dieselzuschlag
                ).netto
              }
            </td>

            <td className='text-right cursor-pointer hover:text-hover'>
              {
                calcGesamtPreis(
                  literpreis,
                  liefermenge,
                  mengenzuschlag,
                  adrzuschlag,
                  dieselzuschlag
                ).brutto
              }
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
