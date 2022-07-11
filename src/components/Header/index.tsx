import SignInbutton from '../SignInButton'
import styles from './styles.module.scss'

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Projeto NextJS" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInbutton />
            </div>
        </header>
    )
}

export default Header