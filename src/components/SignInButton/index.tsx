import {FaGithub} from 'react-icons/fa'
import styles from './styles.module.scss'

function SignInbutton() {
    return (
        <button className={styles.signInButton} type="button">
            <FaGithub />
            Sign in with Github
        </button>
    );
}

export default SignInbutton