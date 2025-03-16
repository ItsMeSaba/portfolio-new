import styles from "./styles.module.scss";

interface Props {
  label: string;
  onClick?: () => void;
}

// Aceternity Button with animated border
export function ButtonWithAnimatedBorder({ label, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.border} />

      <span className={styles.label}>{label}</span>
    </button>
  );
}
