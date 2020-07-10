import React from "react"
import {Card, Text, Link, Image, Box, Heading} from "theme-ui"

const ProjectCard = ({title, link, bg, textColor, thumbnail, children}) => (
    <Box
        sx={{
            "&:hover": {
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
        }}
    >
        <Link href={link}
           target="_blank"
           rel="noreferrer noopener"
           sx={{
               textDecoration: "none !important",
               color: textColor,
           }}
        >
            <Card
                p={2}
                sx={{
                    background: bg,
                }}
            >

                {thumbnail &&
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Image
                            sx={{
                                maxWidth: "500px"
                            }}
                            src={thumbnail}/>
                    </Box>
                }
                <Heading pb={3}>{title}</Heading>
                <Text>{children}</Text>
            </Card>
        </Link>
    </Box>
)

export default ProjectCard;