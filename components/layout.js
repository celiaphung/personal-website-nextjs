import Head from "next/head";
import Link from "next/link";
import {
  BackToHome,
  Heading,
  HomeHeading,
  LinkText,
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledMain,
} from "./styled";

const name = "Celia Phung";
export const siteTitle = "Celia Phung";

export default function Layout({ children, home }) {
  return (
    // Use the class as the className
    <StyledContainer>
      <Head>
        {/* Used to describe a page's content */}
        <meta
          name="description"
          content="Building personal website using Next.js"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <StyledHeader>
        {home ? (
          <>
            <StyledImage
              priority
              src="/images/profile.jpg"
              alt={name}
              width={192}
              height={192}
            />
            <HomeHeading>Hi, I'm {name}</HomeHeading>
          </>
        ) : (
          <>
            <StyledImage
              priority
              src="/images/profile.jpg"
              alt={name}
              width={192}
              height={192}
            />
            <Link href="/">
              <LinkText>
                <Heading>{name}</Heading>
              </LinkText>
            </Link>
          </>
        )}
      </StyledHeader>

      <StyledMain>{children}</StyledMain>

      {!home && (
        <Link href="/">
          <BackToHome>Back to Home</BackToHome>
        </Link>
      )}
    </StyledContainer>
  );
}
