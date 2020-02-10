import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledH1 = styled.h1`
  ${tw`
    m-0 
    text-4xl
  `}
`

const StyledLink = styled(Link)`
  ${tw`
    underline
    text-blue-800
  `}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledH1>Hi people</StyledH1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <StyledLink to="/page-2/">Go to page 2</StyledLink>
  </Layout>
)

export default IndexPage
