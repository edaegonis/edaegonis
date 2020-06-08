import React from "react"
import Link from "next/link"
import styled from "styled-components"
import matter from "gray-matter"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"
import Header from "../../components/molecules/Header/Header"

const StyledMainWrapper = styled.div`
  display: grid;
  grid-gap: 3.2rem;
`

const StyledContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.6rem;
`

const StyledContentTitle = styled(Text)`
  margin-bottom: 0;
`

function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const formatted = new Date(date)

  return formatted.toLocaleDateString("pt-BR", options)
}

export default function Garden({ writings }) {
  return (
    <section>
      <Container>
        <Header />
        <TextDocument>
          <StyledMainWrapper>
            <div>
              <Text variation="h1" size="xlarge">
                garden
              </Text>
              <Text>
                this is where resides things that i’m currently working on. from
                little pieces of notes to ongoing projects. it’s my
                responsibility to come here periodically and make sure that all
                of them are growing properly
              </Text>
              <Text>
                these topics below are all hand picked so i hope you enjoy
              </Text>
            </div>

            <StyledContentWrapper>
              <Text variation="h2" size="large">
                writings
              </Text>

              {writings.map((writing) => {
                const {
                  slug,
                  document: {
                    data: { title, date },
                  },
                } = writing

                return (
                  <div>
                    <Link href={`/garden/writings/${slug}`}>
                      <span>
                        <StyledContentTitle variation="h3" size="medium">
                          {title}
                          &nbsp; &nbsp;
                          <Text variation="span">{getFormattedDate(date)}</Text>
                        </StyledContentTitle>
                      </span>
                    </Link>
                  </div>
                )
              })}
            </StyledContentWrapper>
          </StyledMainWrapper>
        </TextDocument>
      </Container>
    </section>
  )
}

Garden.getInitialProps = async () => {
  const writings = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".")
      const value = values[index]
      const document = matter(value.default)

      return { document, slug }
    })

    return data
  })(require.context("../../writings", true, /\.md$/))

  return {
    writings,
  }
}
