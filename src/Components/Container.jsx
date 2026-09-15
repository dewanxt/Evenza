// Keeps page content aligned to the shared responsive container width.
const Container = ({ children, className }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container
