import styled from 'styled-components';

export const StatisticsCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 600px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.h2`
    padding: 16px;
    text-align: center;
    text-transform: uppercase;
    color: dimgray;
    font-size: 20px;
    font-weight: bold;
`;

export const StatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    grid-auto-rows: minmax(100px, auto);
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.span`
    color:white;
    font-size: 16px;
    font-weight: bold;
`;

export const Percentage = styled.span`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;
