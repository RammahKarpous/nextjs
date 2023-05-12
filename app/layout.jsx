import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <nav>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/snow">Snow</Link></li>
                    <li><Link href="/fetch-from-api">Fetch from API</Link></li>
                </nav>

                {children}
            </body>
        </html>
    )
}
