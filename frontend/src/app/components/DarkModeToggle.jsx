'use client';

import { useLayoutEffect, useState } from 'react';

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem('hs_theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setDark(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const isDark = !dark;
        setDark(isDark);
        localStorage.setItem('hs_theme', isDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`rounded-full px-3 py-2 ${
                dark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
            }`}
        >
            {dark ? '🌙' : '☀️'}
        </button>
    );
}
