
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 px-10 text-sm border-t-2 border-gray-300/50">
      <p>© {year} - Quantic Learn</p>
    </footer>
  )
}

export default Footer