import Link from "next/link";
import styles from './navbar.module.css';


const NavBar = () => {

  return <nav className={styles.nav}>
    <Link href="/home">
      <a>Home</a>
    </Link>
    <Link href="/accounts">
      <a>Cuentas</a>
    </Link>
    <Link href="/account-categories">
      <a>Categorias</a>
    </Link>
  </nav>
}

export default NavBar;