import Head from "next/head";

import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>
          About | Go Conference 2022 Spring Session Materials (unofficial)
        </title>
      </Head>

      <main>
        <h1>Go Conference 2022 Spring Session Materials (unofficial)</h1>

        <p>
          <ul>
            <li>
              <a href="https://gocon.jp/2022spring/">
                Go Conference 2022 Spring
              </a>
              の発表資料の非公式なまとめです。
            </li>
            <li>
              発表者が資料をツイートで告知している場合には、そのツイートを埋め込んでいます。
            </li>
            <li>
              サイトのリポジトリは
              <a href="https://github.com/vzvu3k6k/unofficial-gocon2022spring-materials">
                https://github.com/vzvu3k6k/unofficial-gocon2022spring-materials
              </a>
              で管理しています。
            </li>
          </ul>
        </p>
      </main>

      <Footer />
    </Layout>
  );
}
