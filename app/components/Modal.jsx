"use client"

import { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ open, title, subtext, children, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.backdrop} onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>
        {subtext ? <p className={styles.subtext}>{subtext}</p> : null}
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  )
}
