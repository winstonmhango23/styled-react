import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

// functional component
export default function Footer(){
    return(
        <StyledFooter>
            <Container>
                

                <Flex>
                    <ul>
                        <li>
                            We work with React on most of our projects.
                        </li>
                        
                    </ul>
                    <ul>
                        <li>About Us</li>
                    </ul>
                    <ul>
                        <li>Blog</li>
                    </ul>
                </Flex>
                
            </Container>
        </StyledFooter>
    )
}