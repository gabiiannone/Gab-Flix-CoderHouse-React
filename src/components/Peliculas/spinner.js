import { ImSpinner6 } from 'react-icons/im';
import styles from "./spinner.module.css";


export function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner6 className={styles.spinning} size={60}  />
        </div>
    )
}
