import { useRef, useEffect} from "react";
import { 
    HomePageContainer,
    HomeContainer,
    HomeContainerTest
 } from "./homePage.styled";

const sectionArray = [
    {
        id: 2,
        heading: 'About',
    },
    {
        id: 3,
        heading: 'Shop',
    },
    {
        id: 4,
        heading: 'Corduroy',
    },
    {
        id: 5,
        heading: 'Instagram',
    },
] 

 const HomePage = () => {
    const containerRef = useRef(null)
    const refs = useRef([]);


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
        <HomePageContainer tabIndex={0}  ref={containerRef}>
            <HomeContainer ref={(element) => {refs.current[1] = element}}>
                <h1>Header</h1>
            </HomeContainer>
            {sectionArray.map((el) => <HomeContainerTest key={el.id} ref={(element) => {refs.current[el.id] = element}}>{el.heading}</HomeContainerTest>)}
            <HomeContainer ref={(element) => {refs.current[6] = element}}>
                <h1>Footer</h1>
            </HomeContainer>
        </HomePageContainer>
    )
}

export default HomePage;