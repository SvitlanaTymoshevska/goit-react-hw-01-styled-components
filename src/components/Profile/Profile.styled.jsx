import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Description = styled.div`
    display: inline-block;
    text-align: center;
    padding: 40px;
    color:dimgray;
    font-size: 20px;
    font-weight: bold;
`;

export const Avatar = styled.img`
    width: 200px;
    border: 2px solid darkgray;
    border-radius: 50%;
`;

export const Name = styled.p`
    color: black;
    font-size: 28px;
`;

export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, auto));
    grid-auto-rows: minmax(100px, auto);    
    gap: 2px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border: 2px solid darkgray;
`;

export const Label = styled.span`
    color: dimgray;
    font-size: 16px;
    font-weight: bold;
`;

export const Quantity = styled.span`
    color: black;
    font-size: 20px;
    font-weight: bold; 
`;