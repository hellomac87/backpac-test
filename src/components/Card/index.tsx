import { Body, Container, Label, Thumbnail, Title } from './style';

export type CardType = {
    image: string;
    label: string;
    title: string;
    direction?: CardDirectionType;
};

export type CardDirectionType = 'vertical' | 'horizental';

function Card({ image, label, title, direction = 'vertical' }: CardType) {
    return (
        <Container direction={direction}>
            <Thumbnail image={image} />
            <Body>
                <Label>{label}</Label>
                <Title>{title}</Title>
            </Body>
        </Container>
    );
}

export default Card;
