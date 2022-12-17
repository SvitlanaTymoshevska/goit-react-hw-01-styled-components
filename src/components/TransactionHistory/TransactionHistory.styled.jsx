import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 20px;
    border-collapse: collapse;
    border: 1px solid darkgray;
    color: dimgray;
    font-size: 16px;
`;

export const TableTh = styled.th`
    padding: 16px;
    background:aqua;
    border: 1px solid darkgray;
    font-weight: bold;
`;

export const TableTd = styled.td`
    padding: 12px;
    border: 1px solid darkgray;
    text-align: center;
`;

export const TableTr = styled.tr`
    &:nth-child(odd){
        background: #fff;
    }
    &:nth-child(even){
        background: #efefef;
    }
`;
