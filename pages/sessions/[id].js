import Head from "next/head";

import { Layout } from "../../components/Layout";
import { Footer } from "../../components/Footer";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { SpeakerDeck } from "../../components/SpeakerDeck";
import { getSession, getSessions, hasContent } from "../../lib/sessions";

export default function Session({ session }) {
  return (
    <Layout>
      <Head>
        <title>{session.title}</title>
      </Head>

      <main>
        <h1>
          [{session.id}] {session.title}
        </h1>

        {session.tweets &&
          session.tweets.map((tw) => (
            <TwitterTweetEmbed key={tw} tweetId={tw} />
          ))}
        {session.speakerdeck && <SpeakerDeck src={session.speakerdeck} />}
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return { props: { session: getSession(params.id) } };
}

export async function getStaticPaths() {
  return {
    paths: getSessions()
      .filter((session) => hasContent(session))
      .map((session) => ({ params: { id: session.id } })),
    fallback: false,
  };
}