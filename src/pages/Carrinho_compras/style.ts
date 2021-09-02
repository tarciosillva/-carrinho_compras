import styled from "styled-components";

export const Box = styled.div`
    width: 44vw;
    margin: 5rem auto;
    padding-bottom: 1rem;
    background-color: var(--secondary-color);
    border-radius: 1rem;
    box-shadow: 0px 8px 20px 0px #797979c4;
`
export const Title = styled.h1`
    text-align: center;
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1.75em;
    padding: 1rem;
`

export const ContentProducts = styled.div`
    border-top: 0.1rem solid var(--primary-color);
`

export const ContainerTotal = styled.div`
    .total{
        display: flex;
        justify-content: space-between;
        font-family: var(--font-primary);
        font-weight: 800;
        font-size: 1.5rem;
    }

    border-top: 0.1rem solid var(--primary-color);
    border-bottom: 0.1rem solid var(--primary-color);
    padding: 2rem;
`

export const ContentButton = styled.div`
    background-color: var(--button-confirm-color);
    color: var(--secondary-color);
    font-family: var(--font-primary);
    border-radius: 0.75rem;
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
    padding: 1.5rem;
    margin: 1.5rem 1.5rem 0.5rem 1.5rem;
    cursor: pointer;

    :hover{
        background-color: var(--color-hover-button-confirm);
    }
`