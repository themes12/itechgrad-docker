import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { useLocale, NextIntlClientProvider, useMessages, } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const messages = useMessages();
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale}
            messages={
                messages
            }>
            <div>{children}</div>
        </NextIntlClientProvider>
    );
};

export default Layout;