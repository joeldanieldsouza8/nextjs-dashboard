// This file to keep the fonts that will be used throughout your application.

import { Inter, Lusitana } from 'next/font/google';

// Specify what subset you'd like to load. In this case, 'latin'
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
