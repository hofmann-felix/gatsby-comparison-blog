import * as React from 'react'
import {Layout} from "../../components/layout";
import {graphql, Link} from 'gatsby'
import {Navigation} from "../../components/navigation";
import styled from "styled-components";
import TestImage from "../../../posts/images/how-to-optimize-gatsby-url-hero.jpeg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  justify-items: stretch;
  align-items: start;
`
const GridItem = styled(Link)`
  text-decoration: none;
  grid-column-start: span 12;
  color: black;
  overflow: hidden;

  @media (min-width: 600px) {
    grid-column-start: span 6;
  }

  &:hover {
    color: #668CFF;
  }
`

const StyledImg = styled.img`
  width: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`

const BlogPage = ({data}) => {
    return (
        <Layout>
            <Navigation/>
            <h3>Blog Overview</h3>
            <Grid>
                {
                    data.allMarkdownRemark.nodes.map((node) => (
                        <GridItem to={`/blog/${node.frontmatter.path}`} key={node.id}>
                            <StyledImg src={TestImage}/>
                            <p>{node.frontmatter.title}</p>
                        </GridItem>
                    ))
                }
            </Grid>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    path
                }
                id
            }
        }
    }
`

export default BlogPage