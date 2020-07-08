import React from "react"
import { Link, Text } from 'theme-ui'

const Footer = () => (
    <Text
        p={20}
        sx={{
            fontSize: 'small',
            textAlign: 'center',
        }}
    >
        Powered by <Link href="https://github.com/OpenArchitex" target="_blank" rel="noopener noreferrer">OpenArchitex</Link>
        &copy;{new Date().getFullYear()}. Code licensed under an {` `}
        <Link href="https://opensource.org/licenses/AGPL-3.0" target="_blank" rel="noopener noreferrer">AGPL-3.0 License</Link>.
    </Text>
)

export default Footer;