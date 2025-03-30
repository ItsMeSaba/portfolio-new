import styles from "./styles.module.scss";

interface Props {
  label: string;
  onClick?: () => void;
  pauseAnimation?: boolean;
}

// Aceternity Button with animated border
export function ButtonWithAnimatedBorder({
  label,
  onClick,
  pauseAnimation,
}: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.border} data-pause-animation={pauseAnimation} />

      <span className={styles.label}>{label}</span>
    </button>
  );
}
