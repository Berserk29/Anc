import styled from "styled-components";
import { motion } from "framer-motion";

export const GridImage = styled(motion.img)`
    display: inline-block;
    aspect-ratio: ${props => props.ratio};
    grid-column: ${props => props.column};
    width: 100%;
    object-fit: cover;
`