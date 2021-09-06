import { Paper } from '@material-ui/core';
import styled from 'styled-components/macro';

export const NotificationsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px;
`;

export const TextWrapper = styled.div`
    padding: 10px;
    font-size: 16px;
`;

export const StyledPaper = styled(Paper)`
    min-height: 150px;
    margin-top: 10px;
    width: 50%;
`;
