import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const StyledHeader = styled.header`
  ${tw`
    mb-6
  `}
  background-color: rebeccapurple;
`
const HeaderWrapper = styled.div`
  ${tw`
    my-0
    mx-auto
    py-6
    px-4
  `}
  max-width:960px;
`

const StyledH1 = styled.h1`
  ${tw`
    m-0 
    text-4xl
  `}
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderWrapper>
      <StyledH1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>
    </HeaderWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
