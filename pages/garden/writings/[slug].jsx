import React from "react"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

import Container from "../../../components/layout/Container"
import TextDocument from "../../../components/layout/TextDocument/TextDocument"
import { SyledMarkdownWrapper } from "../../../styles/garden/Writing"

export default function Writing({ content, data }) {
  const frontmatter = data
  return (
    <section>
      <Container>
        <TextDocument className="markdown-body">
          <SyledMarkdownWrapper>
            <h1>{frontmatter.title}</h1>

            <ReactMarkdown source={content} />
          </SyledMarkdownWrapper>
        </TextDocument>
      </Container>
    </section>
  )
}

Writing.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../../content/${slug}.md`)

  const data = matter(content.default)

  return { ...data }
}
