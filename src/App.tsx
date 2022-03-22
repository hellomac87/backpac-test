import Card from './components/Card';

function App() {
    return (
        <>
            <Card
                image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                label='유얼어데이 디퓨저'
                title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
            />
            <Card
                image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                label='유얼어데이 디퓨저'
                title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                direction={'horizental'}
            />
        </>
    );
}

export default App;
