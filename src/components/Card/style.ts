import styled from 'styled-components';

import { CardDirectionType } from './index';

type Container = {
    direction: CardDirectionType;
};

type Thumbnail = {
    image: string;
};

export const Container = styled.div<Container>`
    max-width: ${({ direction }) => `${direction === 'vertical' ? '250px' : '350px'}`};
    display: flex;
    flex-direction: ${({ direction }) => `${direction === 'vertical' ? 'column' : 'row'}`};
    border: 1px solid #d9d9d9;

    &:hover {
        box-shadow: 0 0px 8px 0 #00000026;
    }
`;

export const Thumbnail = styled.div<Thumbnail>`
    background-image: ${({ image }) => `url(${image})`};

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: auto;
    display: block;
    position: relative;

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const Body = styled.div`
    padding: 12px 4px;
    height: auto;
`;

export const Label = styled.label`
    font-size: 12px;
    color: #999999;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
`;

export const Title = styled.div`
    max-height: 35.88px;
    font-size: 13px;
    line-height: 1.38;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    margin: 4px 0 8px 0;
    color: #333333;
`;
