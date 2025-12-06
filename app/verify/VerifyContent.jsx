'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './verify.module.css';
import { config } from '../../src/config';

export default function VerifyContent() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const [status, setStatus] = useState('verifying'); // verifying, success, error
    const [message, setMessage] = useState('Verifying your account...');
    const hasCalledApi = useRef(false);

    useEffect(() => {
        if (!code) {
            setStatus('error');
            setMessage('Invalid verification link. Please check your email and try again.');
            return;
        }

        if (hasCalledApi.current) return;
        hasCalledApi.current = true;

        const verifyAccount = async () => {
            try {
                const response = await fetch(`${config.API_BASE_URL}/api/auth/verify-account`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code }),
                });

                if (response.ok) {
                    setStatus('success');
                    setMessage('Account verified successfully!');
                } else {
                    // Try to get error message from response
                    const data = await response.json().catch(() => ({}));
                    setStatus('error');
                    setMessage(data.message || 'Verification failed. Please try again.');
                }
            } catch (error) {
                console.error('Verification error:', error);
                setStatus('error');
                setMessage('Something went wrong. Please check your connection and try again.');
            }
        };

        verifyAccount();
    }, [code]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {status === 'verifying' && (
                    <>
                        <div className={styles.loader}></div>
                        <h1 className={styles.title}>Verifying...</h1>
                        <p className={styles.message}>{message}</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className={styles.icon}>✅</div>
                        <h1 className={styles.title}>Account Verified</h1>
                        <p className={styles.message}>
                            Your account has been successfully verified. You can now continue to the app.
                        </p>
                        <a href="www.anantor.com/you" className={styles.button}>
                            Continue on App
                        </a>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className={styles.icon}>❌</div>
                        <h1 className={styles.title}>Verification Failed</h1>
                        <p className={styles.message}>{message}</p>
                        <a href="/verify" className={`${styles.button} ${styles.buttonSecondary}`} onClick={(e) => {
                            e.preventDefault();
                            window.location.reload();
                        }}>
                            Try Again
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}
