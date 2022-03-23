import styled from 'styled-components';

type Star = {
    active: boolean;
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
    padding: 6px 0 4px;
`;

export const Star = styled.div<Star>`
    font-size: 24px;
    color: ${({ active }) => (active ? '#ffc801' : '#d9d9d9')};

    &:before {
        display: inline-block;
        content: '⭑';
    }
`;
