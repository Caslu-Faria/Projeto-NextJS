import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

function SignInbutton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (

        <button type="button" className={styles.signInButton}>
            <FaGithub color="#84d361"/>
            Lucas G Faria
            <FiX className={styles.closeIcon} color="#737380"/>
        </button>

    ) : (
        
        <button type="button" className={styles.signInButton} >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    );
}

export default SignInbutton