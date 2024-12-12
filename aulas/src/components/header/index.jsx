import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>estevamjannuzzi4.artstation.com</span>
            <nav>
                <a href="/">Home</a>
                <a href="/sobre">Sobre</a>
                <a href="/projetos">Projetos</a>
                <a href="/contatos">Contatos</a>
            </nav>
        </header>
    )
}

export default Header
