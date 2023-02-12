import { GridSection } from "../GridSection";
import { CardGrid, CardGridImage, CardGridItem } from "../CardGrid/CardGrid";
import partners from "../../data/partners";
import { StyledPartner, StyledPartnerTitle } from "./partners.styles";
export function Partners() {
    return (
        <GridSection title="-Hamkorlar-" subtitle="Bizning hamkorlar">
            <CardGrid rows={5} itemWidth="212px" gap="48px">
                {partners.map(partner => (
                    <CardGridItem colSpan={1}>
                        <StyledPartner>
                            <CardGridImage src={partner.logo} width={100} height={51} description={partner.title} />
                            <StyledPartnerTitle>
                                {partner.title}
                            </StyledPartnerTitle>
                        </StyledPartner>
                    </CardGridItem>
                ))}
            </CardGrid>
        </GridSection>
    )
}
