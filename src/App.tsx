import styled from 'styled-components';
import Card from './components/Card';
import InputForm from './components/InputForm';

function App() {
    return (
        <Container>
            <div style={{ marginBottom: 10 }}>
                <InputForm value={'asdf'} />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={'defaultValue'} maxLength={50} />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={''} placeholder={'placeholder'} />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={''} placeholder={'placeholder maxLength'} maxLength={50} />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={'disabled'} placeholder={'placeholder'} maxLength={50} disabled />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={'readonly'} placeholder={'placeholder'} maxLength={50} readOnly />
            </div>

            <div style={{ marginBottom: 10 }}>
                <InputForm value={''} placeholder={'placeholder readonly'} maxLength={50} readOnly />
            </div>

            <CardItem width={300}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                />
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    rate={1}
                    comment={
                        '전복이 오동통통해서 맛있네요 회랑 같이 구워서 먹으려고 샀어요 덕분에 맛있는 식사했습니다^^ 감사합니다 손질이 다 잘돼있어서 편하게 요리할 수 있네요자주 시켜 먹을께요'
                    }
                />
            </CardItem>
            <CardItem>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    rate={3}
                />
            </CardItem>
            <CardItem>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    direction={'horizental'}
                    rate={4}
                />
            </CardItem>
        </Container>
    );
}

export default App;

const Container = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
`;

const CardItem = styled.div<{ width?: number }>`
    width: ${({ width }) => `${width}px`};
`;
