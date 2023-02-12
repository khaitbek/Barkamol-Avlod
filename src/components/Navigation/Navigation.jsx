import React from 'react';
import { StyledNav, StyledNavItem, StyledNavLink, StyledNavList, StyledNavOption, StyledNavSelect } from "./navigation.styles";
import navLinks from "../../data/nav-links";
export default function Navigation() {
    return (
        <StyledNav>
            <StyledNavList id="primaryNavigation" title="Asosiy menu">
                {navLinks.map(navLink => (
                    <StyledNavItem key={crypto.randomUUID()}>
                        <StyledNavSelect>
                            {navLink.dropdown.map(item => (
                                <StyledNavOption key={crypto.randomUUID()} value={item}>
                                    {item}
                                </StyledNavOption>
                            ))}
                        </StyledNavSelect>
                    </StyledNavItem>
                ))}
            </StyledNavList>
        </StyledNav>
    )
}
