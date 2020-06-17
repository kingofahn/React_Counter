import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CounterContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number;
}

const Counter = ({ title, initValue } : Props) => {
    const [count, setCount] = useState<number>(0); // 함수형 컴포넌트에서 State사용하기 위해 리액트훅의 useState 사용

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <CounterContainer>
                <CountLabel>{initValue + count}</CountLabel>
            </CounterContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={() => setCount(count + 1)} />
                <Button iconName="minus" onPress={() => setCount(count - 1)} />
            </ButtonContainer>
        </Container>
    );
}
export default Counter;