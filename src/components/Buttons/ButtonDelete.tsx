type ButtonDeleteProps = {
  deleteResults?: () => void
}

export const ButtonDelete = ({ deleteResults }: ButtonDeleteProps) => {
  return (
    <button
      id='deleteButton'
      title='Delete Button'
      className={`bg-transparent font-semibold p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 active:border-gray-600 hover:border-gray-600 group w-1/2`}
      type='button'
      onClick={deleteResults}
      role='button'
      tabIndex={7}
    >
      <div className='flex flex-row justify-center'>
        <span>clear</span>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          id='deleteButton'
          width='20'
          height='20'
          className='w-full text-center text-red-900 text-opacity-20 group-hover:text-opacity-100'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg> */}
      </div>
    </button>
  )
}
