const Button = ({ children }) => {
  return (
    <button className='px-6 py-3.5 bg-primary rounded-full text-white text-[16px] font-bold cursor-pointer'>
      {children}
    </button>
  )
}

export default Button
