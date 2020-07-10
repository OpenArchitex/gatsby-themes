import React from "react"
import { Container } from "theme-ui"

const Layout = ({children}) => (
    <Container
        pl={[20, 20, 20, 20, 300]}
        pr={[20, 20, 20, 20, 300]}
    >
        {children}
    </Container>
)

export default Layout;