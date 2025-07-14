import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stokk Tech Web Agency in Zanzibar for Digital Solutions',
  description: 'We help businesses grow online through professional web development, web design, SEO and Digital presence.',
  keywords:['web agency','website zanzibar','zanzibar','developer','marketing','digital marketing','webdesign','social media','google','media','application','app'],
  metadataBase: new URL('https://www.stokktech.netlify.app/'),
  alternates: {
    canonical: 'https://www.stokktech.netlify.app/',
  },
   openGraph: {
    title: 'Stokk Tech Web Agency in Zanzibar for Digital Solutions',
    images: 'https://i.ibb.co/LhpG7vrk/stokk-mediatech-zanizbar.png',
    description:'We help businesses grow online through professional web development, web design, SEO and Digital presence.',
    url: 'https://www.stokktech.netlify.app/',
    site_name: 'Stokk MediaTech',
    images: [
      {
        url: 'https://i.ibb.co/LhpG7vrk/stokk-mediatech-zanizbar.png',
        width: 1260,
        height: 750,
        alt: 'Stokk Tech Web Agency in Zanzibar',
      }
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
