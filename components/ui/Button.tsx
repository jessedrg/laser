import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'onDark';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
};

export function Button({
  variant = 'primary',
  children,
  withArrow = false,
  className,
  ...rest
}: Props) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ');
  return (
    <a className={cls} {...rest}>
      <span>{children}</span>
      {withArrow && (
        <span className={styles.arr} aria-hidden="true">
          <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M1 5h12M9 1l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </span>
      )}
    </a>
  );
}
