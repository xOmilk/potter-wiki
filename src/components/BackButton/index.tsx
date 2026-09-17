import { ArrowLeftIcon } from "lucide-react";
import styles from "./styles.module.css";

type BackButtonProps = {
	onClick: () => void;
};

export function BackButton({ onClick }: BackButtonProps) {
	return (
		<button className={styles.backButton} onClick={onClick}>
			<ArrowLeftIcon size={16} />
			Voltar
		</button>
	);
}
