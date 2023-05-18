import './footer.css'
function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">Posted by Freshia © {year}</div>
  )
}

export default Footer