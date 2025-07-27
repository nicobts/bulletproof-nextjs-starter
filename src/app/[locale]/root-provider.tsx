import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </>
  )
}
