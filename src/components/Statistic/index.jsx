import { InternalPercentBar, Title, Wrapper, WrapperPercentBar, WrapperPercentText } from "./styles"

export const Statistic = ({ title, data, color }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {data.map((item, index) => (
                <div key={index}>
                    <WrapperPercentText>
                        <p>{item.name}</p>
                        <p>{item.percent}%</p>
                    </WrapperPercentText>
                    <WrapperPercentBar>
                        <InternalPercentBar percent={item.percent} color={color}></InternalPercentBar>
                    </WrapperPercentBar>
                </div>
            ))}
        </Wrapper>
    )
}