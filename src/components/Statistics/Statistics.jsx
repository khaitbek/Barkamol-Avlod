import { StyledStatItem, StyledStatList, StyledStatText, StyledStatTitle, StyledStats } from "./statistics.styles";
import { StyledContainer } from "../../styles/global";
import { stats } from "../../data/stats";
import { TextContainer } from "../TextContainer/TextContainer";

export function Statistics() {
    return <StyledStats>
        <StyledContainer>
            <StyledStatList>
                {stats.map(stat => (
                    <StyledStatItem key={crypto.randomUUID()} image={stat.image}>
                        <TextContainer maxWidth={"145px"}>
                            <StyledStatTitle>
                                {stat.count}
                            </StyledStatTitle>
                            <StyledStatText>
                                {stat.body}
                            </StyledStatText>
                        </TextContainer>
                    </StyledStatItem>
                ))}
            </StyledStatList>
        </StyledContainer>
    </StyledStats>
}