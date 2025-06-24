import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Store
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/hats" className="hover:text-gray-300">
              Hat Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


