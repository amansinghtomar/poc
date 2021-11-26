import styled from "styled-components";

export const Container = styled.div`
   max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
`;

export const LeftColumn = styled.div`
   width: 55%;

`;

export const RightColumn = styled.div`
   width: 45%;
  margin-top: 60px;
  margin-left:40px
`;

export const CustomImage = styled.img`
  width: 100%;

  left: 0;
  top: 0;
  transition: all 0.3s ease;
`;

export const ProductDescription = styled.div`
   
    margin-bottom: 20px;
`;

export const ProductDescriptionTile = styled.span`
   font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const ProductDescriptionHeading = styled.h1`
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
`;

export const ProductDescriptionContent = styled.p`
   font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
`;