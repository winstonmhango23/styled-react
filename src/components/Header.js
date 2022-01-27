import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import{ Button} from './styles/Button.styled';

export default function Header() {
    return (
        <StyledHeader>
            <Container>
            {/* navigation */}
            <Nav>
                <Logo src ='./images/coding.png' alt=''/>
                <Button>JOIN MY TEAM</Button> 
            </Nav>
            {/* flex content */}
            <Flex>
                {/* div flex element */}
                <div>
                    <h1>
                       Creating neat React Applications with styled components. 
                    </h1>
                    <p>
                        The beauty of React is expressed in React styled components. Its way easy to build 
                        fast and smart applications using Styled components. Just your HTML 5 and CSS3 knowledge
                        is all you need. Of course,dont come without Javascript and React skills.
                    </p>
                    <Button bg='#ff0099' color='#fff'>
                        Join My Team
                    </Button>
                </div>

                {/* image flex element */}
                <Image src='./images/app_development_SVG.svg' alt='' />

            </Flex>
            </Container>
        </StyledHeader>
    )
}