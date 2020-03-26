import React, { useState } from "react"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/atoms/TextDocument/TextDocument"
import Container from "../../components/atoms/Container"

import { randomQuantityOptions } from "../../lib/random"

import AboutPageHeader from "../../components/molecules/AboutPageHeader/AboutPageHeader"

export default () => {
  const [randomQuantity, setRandomQuantity] = useState("quadrillions")

  const handleRandomQuantity = () => {
    const picked = Math.floor(Math.random() * randomQuantityOptions.length)

    setRandomQuantity(randomQuantityOptions[picked])
  }

  return (
    <section>
      <Container>
        <TextDocument>
          <AboutPageHeader />

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <a onClick={handleRandomQuantity}>{randomQuantity}</a> of users on
            e-commerce websites.
          </Text>
        </TextDocument>
      </Container>
    </section>
  )
}
