import styled from "styled-components";

export interface NavType {
  id: number;
  component: string | React.ReactNode;
}

export interface NavPropsType {
  nav: NavType[];
}

export const Nav: React.FC<NavPropsType> = ({ nav }) => {
  return (
    <StyledNav>
      {nav.map((v) => (
        <li key={v.id} className="navItem">
          {v.component}
        </li>
      ))}
    </StyledNav>
  );
};

export const StyledNav = styled.ul`
  display: flex;
  gap: 56px;
  color: #b0b8c1;

  //   & .navItem:hover {
  //     text-shadow: #464646 1px 1px 1px;
  //   }
`;
