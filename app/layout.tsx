import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { outfit } from '@/lib/fonts/font';

export const metadata: Metadata = {
	title: 'Little Learners',
	description: 'Official website for Little Learners'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
