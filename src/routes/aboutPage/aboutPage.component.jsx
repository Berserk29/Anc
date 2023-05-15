import { useRef, useEffect } from "react";
import { Container, Section } from "./aboutPage.styled";


const AboutPage = () => {
    const containerRef = useRef(null)

    const smoothScroll = event => {
        event.preventDefault();
        
        const container = containerRef.current;
        const containerScrollTop = container.scrollTop;

        const scrollDistance = event.deltaY * 1.5

        container.scrollTo({
            top: containerScrollTop + scrollDistance,
            behavior: 'smooth'
          });
    };

    useEffect(() => {
        const container = containerRef.current;

        container.focus()
        container.addEventListener('wheel', smoothScroll, { passive: false });
    
        return () => {
          container.removeEventListener('wheel', smoothScroll);
        };
    }, [])

        return (
            <Container tabIndex={0} ref={containerRef}>
                <Section color="black">
                    <h4>Section 1</h4>
                </Section>
                <Section color="blue">
                    <h4>Section 2</h4>
                </Section>
                <Section color="green">
                    <h4>Section 3</h4>
                </Section>
            </Container>
        );
}            

export default AboutPage;