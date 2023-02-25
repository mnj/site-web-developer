import './globals.css'

import FlowbiteContext from "./context/FlowbiteContext"
import { FC, PropsWithChildren } from 'react'
export const metadata = {
  title: 'web.developer',
  description: 'web.developer - freelance development, freelance cloud consulting',
}

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
