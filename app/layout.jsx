import Link from 'next/link'
import React from 'react'
import './global.css'

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
};

export default function RootLayout({ children }) {
    const links = [
        { href: '/', label: 'Home', },
        { href: '/snow', label: 'Snow', },
        { href: '/fetch-from-api', label: 'Fetch from API', },
        { href: '/summerschool', label: 'Summerschool', },
    ]

    return (
        <html>
            <body>
                <nav className='mb-10'>
                    <ul className='flex list-none border-b border-gray-300'>
                        <li><Link className='inline-block px-4 py-3' href="/">Home</Link></li>
                        <li><Link className='inline-block px-4 py-3' href="/snow">Snow</Link></li>
                        <li><Link className='inline-block px-4 py-3' href="/fetch-from-api">Fetch from API</Link></li>
                        <li><Link className='inline-block px-4 py-3' href="/summerschool">Summerschool</Link></li>
                    </ul>
                </nav>

                {children}
            </body>
        </html>
    )
}
