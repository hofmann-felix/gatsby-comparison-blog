import * as React from 'react'
import { graphql } from 'gatsby'
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";


const BlogPost = ({ data }) => {
    return (
        <Layout>
            <Navigation/>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                path
            }
            html
        }
    }
`

export default BlogPost