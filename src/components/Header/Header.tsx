import { Link } from "@tanstack/react-router"

export const Header = () => {

  return (
    <header className="bg-primary py-10 px-20">
        <nav className="flex items-center justify-between gap-x-8">
           <h3 className="text-3xl">Logo</h3>
            <div className="w-full flex items-center justify-center gap-x-6">
                <Link className="cursor-pointer hover:bg-accent p-2" to="/">Home</Link>
                <Link className="cursor-pointer hover:bg-accent p-2" to="/">Collections</Link>
                <Link className="cursor-pointer hover:bg-accent p-2" to="/signin">Sign In</Link>
            </div>
        </nav>
    </header>
  )
}