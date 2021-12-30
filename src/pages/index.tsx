import * as React from "react"
import {Layout} from "../components/layout";
import {Navigation} from "../components/navigation";
import { Helmet } from "react-helmet"

export default function Index() {
    return (
        <Layout>
            <Helmet>
                <title>Gatsby Blog</title>
            </Helmet>
            <Navigation/>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Layout>
    );
}
