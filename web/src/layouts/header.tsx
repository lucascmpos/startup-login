import { LogOutIcon, Play } from 'lucide-react'

import { Link } from '@redwoodjs/router'

import Button from 'src/components/Button/button'
import { capitalizeFirstLetter } from 'src/utils/format'

const Header = ({ loggedInUser, setLoggedInUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedInUser(null)
  }

  return (
    <header className="flex flex-row items-center justify-around border-b py-3">
      <Link to="/" className="flex flex-row items-center gap-2">
        <Play size={16} className="fill-[#DDE1ED] text-[#DDE1ED]" />
        <h1 className="text-2xl font-bold">MercadoStartup</h1>
      </Link>

      <div>
        <ul className="flex cursor-pointer flex-row gap-2 font-medium">
          <li>Item menu</li>
          <li>Item menu</li>
          <li>Preços</li>
        </ul>
      </div>

      <div className="flex flex-row items-center gap-4">
        {loggedInUser ? (
          <>
            <p className="font-semibold">
              {capitalizeFirstLetter(loggedInUser.first_name)}
            </p>
            <button onClick={handleLogout}>
              <LogOutIcon size={15} />
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button className="font-medium" text="Login" />
            </Link>
            <Link to="/signup">
              <Button
                className="rounded-2xl bg-[#1C202C] px-4 py-2 font-medium text-white"
                text="Cadastrar-se"
              />
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
