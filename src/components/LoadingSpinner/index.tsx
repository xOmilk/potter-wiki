import styles from "./styles.module.css";

type LoadingSpinnerProps = {
	text?: string;
};

export function LoadingSpinner({ text = "Carregando..." }: LoadingSpinnerProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.spinner} />
			<p className={styles.text}>{text}</p>
		</div>
	);
}
