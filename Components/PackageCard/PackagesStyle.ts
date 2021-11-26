import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 15px 20px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Content = styled.div`
  	background: whitesmoke;
	height: 93vh;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
  justify-content: center;
`;

export const Cards = styled.div`
  	display: flex;
	padding: 1rem;
	margin-bottom: 2rem;
	width: 30%;
 @media(max-width: 480px) {
    width: 100%;
  }
		@media(max-width: 956px) {
    width: 50%;
		overflow: hidden;
  }
 
`;

export const CardItem = styled.div`
  display: flex;
	flex-direction: column;
	background-color: #fff;
	width: 100%;
	border-radius: 6px;
	box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	transition: transform 0.5s;
	-webkit-transition: transform 0.5s;

  &:hover{
    cursor: pointer;
	transform: scale(1.1);
	-webkit-transform: scale(1.1);
  }
`;

export const CardImage = styled.div`
 
`;

export const CardInfo = styled.div`
  display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	padding: 1rem;
	line-height: 1.5em;
`;

export const CardTitle = styled.h2`
  font-size: 25px;
	line-height: 1.1em;
	color: #32325d;
	margin-bottom: 0.2em;
`;

export const CardIntro = styled.p`

`;
export const CardBottom = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const CustomButton = styled.button`
   font-weight: 700;
   color:white;
  background-color: blue;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
   line-height: 1;
   padding: 20px;
   border-radius: 25px;
   cursor: pointer;
`;

export const CustomCardImage = styled.img`
		height: 300px;
		width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px 6px 0px 0px;
    opacity: 0.91;
`;