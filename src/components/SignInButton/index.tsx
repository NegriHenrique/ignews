import styles from './styles.module.scss';

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from 'react';

export function SignInButton() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    return isUserLoggedIn ? (
        <button type="button"  className={styles.signInButton} >
            <FaGithub color="#04d361"/>
            Henrique Negri
            
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button"  className={styles.signInButton} >
            <FaGithub color="#eba417"/>
            Sign In with Github
        </button>
    )
}