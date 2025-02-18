// アプリケーションのすべてのルートに適用されるスタイル
// Headコンポーネントはcomponentsディレクトリに移動
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image"
import Head from "@/components/head"
import Date from "@/components/date"

// Next.js Tailwind Css Importing Stylesから追記
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const inter = Inter({ subsets: ["latin"] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <Head />
      <body className={inter.className}>
        <div className="container text-center align-items-center vh-100">
          <div className="col">
            <div className="sticky inset-x-0 top-0">
              <Image
                src="/main_logo.jpg"
                width={1078}
                height={273}
                className="img-fluid"
                alt="main_logo"
              />
              <Date />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
