import { Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

export const notoSansJP = Noto_Sans_JP({
  subsets:['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap'
});

export const finalFantasy = localFont({
  src: '../fonts/finalf.ttf',
  variable: '--font-finalf',
  display: 'swap',
})

export const optima = localFont({
  src: [
    {
      path: '../fonts/OPTIMA.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/OPTIMA_B.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Optima_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Optima Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-optima',
  display: 'swap',
});