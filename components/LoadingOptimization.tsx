'use client'

import { useEffect } from 'react'

export function LoadingOptimization() {
  useEffect(() => {
    // Preconnect to required origins
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnectUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = url
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    return () => {
      // Cleanup preconnect links on unmount
      document.querySelectorAll('link[rel="preconnect"]').forEach(el => el.remove())
    }
  }, [])

  return null
} 