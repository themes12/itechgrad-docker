import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { useLocale, NextIntlClientProvider, useMessages, } from "next-intl";
import Strapi from "strapi-sdk-js";

type Props = {};

export const strapi = new Strapi({url: process.env.NEXT_PUBLIC_BASE_URL})

const Layout = ({ children }: { children: React.ReactNode }) => {
    const messages = useMessages();
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale}
            messages={
                messages
            }>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </NextIntlClientProvider>
    );
};

export default Layout;
