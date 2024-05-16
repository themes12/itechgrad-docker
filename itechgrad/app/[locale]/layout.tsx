import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { Providers } from "./providers";
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from "next/navigation";
import '@/utils/dayjs';

const locales = ["en", "th"];
const inter = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-noto-sans" });
// const inter = Kanit({ subsets: ["thai"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    title: "iTechGrad",
    description: "iTechGrad",
};

export default function RootLayout({
    children,
    params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    // const messages = useMessages();

    if (!locales.includes(locale as any)) notFound();
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Providers>
                    <div>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
