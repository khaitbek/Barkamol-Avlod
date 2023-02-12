import styled from "styled-components";

export const StyledNav = styled.nav``;

export const StyledNavList = styled.ul.attrs({
    className: "flex items-center gap-[30px]"
})``;

export const StyledNavItem = styled.li``;
export const StyledNavLink = styled.a.attrs({
    className: "font-medium text-sm leading-[48px] font-montserrat"
})``;

export const StyledNavSelect = styled.select.attrs({
    className: "bg-none border-none text-[17px] leading-6 font-poppins"
})`
    background:none;
`

export const StyledNavOption = styled.option``