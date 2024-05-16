import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always' // This is the default
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};