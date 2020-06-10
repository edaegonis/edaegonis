import React, { useMemo } from "react"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import useSwr from "swr"
import { useRouter } from "next/router"
import ErrorPage from "next/error"

import Container from "../../../components/layout/Container"
import TextDocument from "../../../components/layout/TextDocument/TextDocument"
import { SyledMarkdownWrapper } from "../../../styles/garden/Writing"
import { getHost, fetcher } from "../../../utils/api-helper"
import Text from "../../../components/atoms/Text/Text"

export default function Writing(props) {
  const {
    query: { slug },
  } = useRouter()

  const initialData = props.data
  const { data, error } = useSwr("/api/writings", fetcher, { initialData })

  const renderedContent = useMemo(() => {
    if (error) return <Text>Couldn't fetch</Text>
    if (!data) return <Text>Loading...</Text>

    const { writings } = data

    const writing = writings.find(({ body }) => {
      const { data } = matter(body)

      return data.slug === slug
    })

    if (!writing) return false

    const { body } = writing
    const { content } = matter(body)

    return (
      writing && (
        <SyledMarkdownWrapper>
          <ReactMarkdown source={content} />
        </SyledMarkdownWrapper>
      )
    )
  }, [error, data])

  return renderedContent ? (
    <section>
      <Container>
        <TextDocument className="markdown-body">{renderedContent}</TextDocument>
      </Container>
    </section>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

Writing.getInitialProps = async (ctx) => {
  try {
    const url = getHost(ctx) + "/api/writings"
    const data = await fetcher(url)

    return { data }
  } catch (e) {
    return {}
  }
}
