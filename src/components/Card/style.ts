import styled from 'styled-components';

import { CardDirectionType } from './index';

type Container = {
    direction: CardDirectionType;
};

type Thumbnail = {
    image: string;
};

export const Container = styled.div<Container>`
    min-width: ${({ direction }) => `${direction === 'vertical' ? '250px' : '350px'}`};
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
`;

export const Info = styled.div`
    padding: 8px 10px;
    height: 96px;
`;

export const Rating = styled.div<{ visible: boolean }>`
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;
    border-top: 1px solid #d9d9d9;
    height: 56px;
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
