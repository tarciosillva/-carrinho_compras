import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 1.5rem;
`

export const ContentImgProduct = styled.div`
    border: 1px solid var(--primary-color);
    padding: 0 0.6rem 0 0.6rem;
    img{
        width: 7rem;
    }
`

export const ContentInformationProduct = styled.div`
    margin: 1.5rem;
`

export const TitleProduct = styled.p`
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.3rem;
`

export const Price = styled.p`
    font-family: var(--font-primary);
    font-weight: 500;
    color: var(--primary-color);
    font-size: 0.9rem;
`

export const ListPrice = styled.p`
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.1rem;
`