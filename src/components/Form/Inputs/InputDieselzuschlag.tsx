import { initialFormState } from '../../../utils/variables'

interface Props {
  register: any
  errors: any
}

export const InputDieselzuschlag = ({ register, errors }: Props) => {
  return (
    <div className='relative w-full flex flex-col'>
      <label htmlFor='dieselzuschlag' className=''>
        Dieselzuschlag
      </label>
      <input
        type='text'
        id='dieselzuschlag'
        defaultValue={initialFormState.dieselzuschlag
          .toFixed(2)
          .replace('.', ',')}
        autoComplete='off'
        {...register('dieselzuschlag')}
      />
      {errors?.literpreis && (
        <p className='absolute right-0 text-xs text-red-600 -top-5'>
          {errors.preis?.message}
        </p>
      )}
    </div>
  )
}
