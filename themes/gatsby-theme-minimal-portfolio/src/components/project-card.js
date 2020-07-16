import React from "react"
import {Card, Text, Link, Image, Box, Heading} from "theme-ui"

const ProjectCard = ({title, link, bg, textColor, thumbnailPath, children}) => (
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

                {thumbnailPath &&

                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Image
                            src={thumbnailPath}/>
                    </Box>
                }
                <Heading pb={3}>{title}</Heading>
                <Text>{children}</Text>
            </Card>
        </Link>
    </Box>
)

export default ProjectCard;