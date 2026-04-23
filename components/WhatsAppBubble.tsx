import styles from './WhatsAppBubble.module.css';

export function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/34711267223"
      className={styles.bubble}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2C7.373 2 2 7.373 2 14c0 2.11.553 4.09 1.52 5.8L2 26l6.38-1.5A11.93 11.93 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
          fill="white"
        />
        <path
          d="M20.5 17.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.17 8.17 0 01-2.4-1.48 9.02 9.02 0 01-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
          fill="#25D366"
        />
      </svg>
      <span className={styles.tooltip}>¿Tienes dudas? Escríbenos</span>
    </a>
  );
}
