import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 240px;
    margin-top: 16px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.isOnline? "green": "red"};
`;

export const Avatar = styled.img`
   margin-left: 16px;
`;

export const Name = styled.p`
    margin-left: 16px;
    color: black;
    font-size: 28px;
    font-weight: bold;
`;
