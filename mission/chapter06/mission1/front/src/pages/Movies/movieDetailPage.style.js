import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background-color: #181818;
    min-height: 100vh;
    padding: 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url(${props => props.$backdropPath});
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
    color: #fff;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7); /* 어두운 오버레이 */
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin: 10px 0;
    font-weight: bold;
`;

export const Rating = styled.p`
    font-size: 1.5rem;
    color: #ffcc00;
    margin: 10px 0;
`;

export const Runtime = styled.p`
    font-size: 1rem;
    color: #ccc;
    margin: 5px 0;
`;

export const Tagline = styled.p`
    font-style: italic;
    color: #ffcc00;
    font-size: 1.2rem;
    margin: 15px 0;
`;

export const Overview = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 20px auto;
`;

export const CastSection = styled.div`
    margin-top: 40px;
    padding: 20px;
`;

export const CastTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
`;

export const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
`;

export const CastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    text-align: center;
    
    img {
        width: 100%;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
        border: 2px solid white;
    }

    p {
        margin: 5px 0;
        font-size: 0.9rem;
    }
`;
