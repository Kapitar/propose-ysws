const Navbar = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-center gap-x-5 py-5">
        <a href="/">Home</a>
        <a href="/propose">Propose an Idea</a>
        <a href="/vote">Vote</a>
      </div>
    </div>
  )
}

export default Navbar;