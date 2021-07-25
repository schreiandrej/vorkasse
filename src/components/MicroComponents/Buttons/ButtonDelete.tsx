type ButtonDeleteProps = {
  className?: string
  deleteResults?: () => void
  id: string
}

export const ButtonDelete = ({
  className,
  deleteResults,
  id,
}: ButtonDeleteProps) => {
  return (
    <button
      className={`button-outlined group w-full ${className}`}
      type='button'
      onClick={deleteResults}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        id={id}
        width='20'
        height='20'
        className='text-center text-red-900 text-opacity-50 group-hover:text-opacity-100 w-full'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
        />
      </svg>
    </button>
  )
}