
import styles from './404.module.css';

export default function Custom404() {
	return (
			<div className={`${styles.errorMessage} flex flex-col`}>
				<span>404: Could not find the requested page</span>
			</div>
	);
}
