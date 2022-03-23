import * as Styled from './style';

type StarRateType = {
    rate?: 1 | 2 | 3 | 4 | 5;
};

const starCount = 5;

function StarRate({ rate }: StarRateType) {
    if (!rate) {
        return null;
    }
    return (
        <Styled.Container>
            {Array(starCount)
                .fill(0)
                .map((_, i) => i + 1)
                .map((idx) => (
                    <Styled.Star key={idx} active={idx <= rate} />
                ))}
        </Styled.Container>
    );
}

export default StarRate;
