import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Testimonials Grid Section - Frontend Mentor",
	description: "Created with Next.js, Tailwind CSS and TypeScript",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={barlowSemiCondensed.className}>{children}</body>
		</html>
	);
}
