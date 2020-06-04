import React from "react"
import Link from "next/link"
import styled from "styled-components"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"

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

export default () => (
  <section>
    <Container>
      <TextDocument>
        <StyledMainWrapper>
          <div>
            <Text variation="h1" size="xlarge">
              garden
            </Text>
            <Text>
              this is where resides things that i’m currently working on. from
              little pieces of notes to ongoing projects. it’s my responsibility
              to come here periodically and make sure that all of them are
              growing properly
            </Text>
            <Text>
              these topics below are all hand picked so i hope you enjoy
            </Text>
          </div>

          <StyledContentWrapper>
            <Text variation="h2" size="large">
              writings
            </Text>

            <div>
              <Link href="/garden/writings/computational-design">
                <span>
                  <StyledContentTitle variation="h3" size="medium">
                    computational design <Text variation="span">4 min</Text>
                  </StyledContentTitle>
                  <Text variation="p">read it here</Text>
                </span>
              </Link>
            </div>
          </StyledContentWrapper>
        </StyledMainWrapper>
      </TextDocument>
    </Container>
  </section>
)
