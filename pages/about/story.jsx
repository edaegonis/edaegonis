import React from "react"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"
import AboutPageHeader from "../../components/molecules/AboutPageHeader/AboutPageHeader"

import { StyledTitle } from "../../styles/about"

export default () => {
  return (
    <section>
      <Container>
        <TextDocument>
          <AboutPageHeader />

          <StyledTitle size="large">the trigger</StyledTitle>
          <Text>
            As a child, I used to play a lot of video games. Eventually, it
            triggered my curiosity to understand how those games were built. So
            I started to learn programming languages, by experimenting with them
            while building MMORPGs.
            <br />
            <br />
            Since then, my relationship with software is an unstoppable cycle of
            learning, sharing and growing.
          </Text>

          <StyledTitle size="large">the initiate 🚀</StyledTitle>
          <Text>
            Nowadays, given the privilege of being able to access the very huge
            gamma of information brought by the internet, it really becomes an
            amusement park, especially for a curious and open-minded person. For
            me, this is certainly a pillar for a growth foundation.
            <br />
            <br />
            The problem is that sometimes it can lead you to situations that you
            pick up information from very different or useless topics, turning
            things into chaos 😥 (chaos creates order and matter)
          </Text>

          <StyledTitle size="large">the function 📜🗝️🗡️</StyledTitle>
          <Text>
            For the last few years, I’ve been learning by exploring, searching
            documents, reading posts,  watching video courses and tutorials, and
            so forth.
            <br />
            <br />
            Everything that I learn, I try to apply on personal or professional
            projects. For me, experiencing and putting things into practice
            allows me to really grasp into the knowledge.
            <br />
            <br />
            Fortunately, the open-source process turns the technology scenario
            into a symbiotic environment, allowing me and others to share and
            grow exponentially. I flow with this process by increasingly{" "}
            <a>participating</a> in these communities
          </Text>

          <StyledTitle size="large">the afterwards 🧙‍♂️</StyledTitle>
          <Text>
            Since the cycle of learning, sharing and growing is endless,
            nowadays I use these experiences to move myself
            <br />
            <br />
            Creating awesome technology is something that brings me fulfilment.
            The adept arrives by joining action, devotion and knowledge with
            these experiences, and then keeping the balance with all the other
            aspects of life.
            <br />
            <br />
            From corporative work I expect healthy environments, that balances
            collaborator well-being and builds qualitative technology.
            <br />
            <br />
            Now it’s your turn to tell me what happens <a>next</a>
          </Text>
        </TextDocument>
      </Container>
    </section>
  )
}
