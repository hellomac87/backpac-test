import Comment from '../Comment';
import StarRate from '../StarRate';

import * as Styled from './style';

export type CardProps = {
    image: string;
    label: string;
    title: string;
    rate?: 1 | 2 | 3 | 4 | 5;
    direction?: CardDirectionType;
    comment?: string;
};

export type CardDirectionType = 'vertical' | 'horizental';

function Card({ image, label, title, rate, direction = 'vertical', comment }: CardProps) {
    return (
        <Styled.Container direction={direction}>
            <Styled.Thumbnail image={image} />
            <Styled.Body>
                <Styled.Info>
                    <Styled.Label>{label}</Styled.Label>
                    <Styled.Title>{title}</Styled.Title>
                </Styled.Info>
                <Styled.Rating visible={Boolean(rate)}>
                    <StarRate rate={rate} />
                    <Comment comment={comment} />
                </Styled.Rating>
            </Styled.Body>
        </Styled.Container>
    );
}

export default Card;
