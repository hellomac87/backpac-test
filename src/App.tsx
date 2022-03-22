import styled from 'styled-components';

function App() {
    return (
        <>
            <StyledHeader>dobby header</StyledHeader>
            <StyledBody>hello dobby!!</StyledBody>
        </>
    );
}

const StyledBody = styled.div`
    color: #fff;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
`;

const StyledHeader = styled.header`
    display: flex;
`;

export default App;
