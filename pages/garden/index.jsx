import React, { Fragment } from "react"
import Link from "next/link"
import styled from "styled-components"
import { Octokit } from "@octokit/rest"

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
              {writings && (
                <Fragment>
                  <Text variation="h2" size="large">
                    writings
                  </Text>
                  {writings.map((writing) => {
                    const { id, title, created_at } = writing

                    return (
                      <div>
                        <Link href={`/garden/writings/${id}`}>
                          <span>
                            <StyledContentTitle variation="h3" size="medium">
                              {title}
                              &nbsp; &nbsp;
                              <Text variation="span">
                                {getFormattedDate(created_at)}
                              </Text>
                            </StyledContentTitle>
                          </span>
                        </Link>
                      </div>
                    )
                  })}
                </Fragment>
              )}
            </StyledContentWrapper>
          </StyledMainWrapper>
        </TextDocument>
      </Container>
    </section>
  )
}

Garden.getInitialProps = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_TOKEN,
  })

  try {
    const { data } = await octokit.issues.listForRepo({
      owner: "edaegonis",
      repo: "edaegonis",
    })
    return {
      writings: data,
    }
  } catch (e) {
    console.log(e)

    return { writings: false }
  }
}
