import React from "react"
import Link from "next/link"
import styled from "styled-components"
import useSwr from "swr"
import matter from "gray-matter"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"
import Header from "../../components/molecules/Header/Header"
import { getHost, fetcher } from "../../utils/api-helper"

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

export default function Garden(props) {
  const initialData = props.data
  const { data, error } = useSwr("/api/writings", fetcher, { initialData })

  return (
    <section>
      <Container>
        <Header />
        <TextDocument>
          <StyledMainWrapper>
            <div>
              <Text variation="h1" size="xlarge">
                digital garden
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
              {error && <Text>Failed to load writings</Text>}
              {!data ? (
                <Text>Loading...</Text>
              ) : (
                data.writings.length &&
                data.writings.map((writing) => {
                  const { id, title, body, created_at } = writing
                  const document = matter(body)

                  const {
                    data: { slug },
                  } = document

                  return (
                    <Link
                      key={id}
                      href="/garden/writings/[slug]"
                      as={`/garden/writings/${slug}`}
                    >
                      <a>
                        <StyledContentTitle variation="h3" size="medium">
                          {title}
                          &nbsp; &nbsp;
                          <Text variation="span">
                            {getFormattedDate(created_at)}
                          </Text>
                        </StyledContentTitle>
                      </a>
                    </Link>
                  )
                })
              )}
            </StyledContentWrapper>
          </StyledMainWrapper>
        </TextDocument>
      </Container>
    </section>
  )
}

Garden.getInitialProps = async (ctx) => {
  const url = getHost(ctx) + "/api/writings"
  const data = await fetcher(url)

  return { data }
}
