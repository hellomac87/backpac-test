import styled from 'styled-components';

export const Container = styled.span`
    color: #666;
    display: block;
    display: -webkit-box;
    height: 18px;
    font-size: 12px;
    line-height: 1.5;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
