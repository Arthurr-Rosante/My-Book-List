import { Link } from '@tanstack/react-router'
import {LibraryBig} from 'lucide-react'

export default function Header() {
  return (
    <header>
      <nav className='flex items-center justify-start'>
            <Link to='/' className='bg-primary border-2 border-accent rounded text-secondary py-4 px-8 flex items-center justify-center'>
              <LibraryBig/>
              My Book List
            </Link>
      </nav>
    </header>
  )
}
