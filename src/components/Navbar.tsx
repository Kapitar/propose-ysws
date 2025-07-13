const Navbar = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-center gap-x-5 py-5 text-xl">
        <a className="hover:underline hover:decoration-wavy" href="/">Home</a>
        <a className="hover:underline hover:decoration-wavy" href="/propose">Propose an Idea</a>
        <a className="hover:underline hover:decoration-wavy" href="/vote">Vote</a>
      </div>
    </div>
  )
}

export default Navbar;