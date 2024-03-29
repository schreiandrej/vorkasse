interface Props {
  register: any
}

export const InputFüllstand = ({ register }: Props) => {
  return (
    <div className='relative w-full flex flex-col'>
      <label htmlFor='füllstand' className=''>
        Füllstand
      </label>
      <input
        type='text'
        id='füllstand'
        tabIndex={2}
        autoComplete='off'
        {...register('füllstand', { min: 0, max: 85 })}
      />
    </div>
  )
}
