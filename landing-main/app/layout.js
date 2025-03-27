import './globals.css'

export const metadata = {
  title: 'Landing Rediseñada',
  description: 'Sitios web en la nube - moderna y confiable',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
