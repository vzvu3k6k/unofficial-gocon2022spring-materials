import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { getSessions, hasContent } from "../lib/sessions";

import css from "../components/Home.module.css";

export default function Home() {
  const sessions = getSessions();

  return (
    <Layout>
      <Head>
        <title>Go Conference 2022 Spring Session Materials (unofficial)</title>
      </Head>

      <main>
        <h1>Go Conference 2022 Spring Session Materials (unofficial)</h1>

        <ul className={css.list}>
          {sessions.map((session) => {
            return (
              <li key={session.id}>
                {hasContent(session) ? (
                  <Link
                    href={{
                      pathname: "/sessions/[id]",
                      query: { id: session.id },
                    }}
                  >
                    {`${session.id} ${session.title}`}
                  </Link>
                ) : (
                  <a>{`${session.id} ${session.title}`}</a>
                )}
              </li>
            );
          })}
        </ul>
      </main>

      <Footer />
    </Layout>
  );
}
