'use client';

import styles from './LogoutWarningModal.module.css';

interface LogoutWarningModalProps {
  isOpen: boolean;
  countdown: number;
  onStayLoggedIn: () => void;
  onLogout: () => void;
}

export default function LogoutWarningModal({
  isOpen,
  countdown,
  onStayLoggedIn,
  onLogout,
}: LogoutWarningModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.icon}>⏰</div>
          <h2 className={styles.title}>Session Timeout Warning</h2>
          <p className={styles.description}>
            You've been inactive for a while. You will be logged out in:
          </p>
        </div>

        <div className={styles.countdownSection}>
          <div className={styles.countdownCircle}>
            <span className={styles.countdown}>{countdown}</span>
          </div>
          <p className={styles.countdownLabel}>seconds remaining</p>
        </div>

        <div className={styles.actions}>
          <button onClick={onStayLoggedIn} className={styles.stayButton}>
            Stay Logged In
          </button>
          <button onClick={onLogout} className={styles.logoutButton}>
            Logout Now
          </button>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Any activity will reset the timer and dismiss this warning
          </p>
        </div>
      </div>
    </div>
  );
}
