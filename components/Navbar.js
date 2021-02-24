import Link from 'next/link';


// Top navbar
export default function Navbar() {


  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">MAIN</button>
          </Link>
        </li>
        <li>
            <Link href="/info">
                <button className ="btn-logo">INFO</button>
            </Link>
        </li>
      </ul>
    </nav>
  );
}