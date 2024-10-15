import styled, { keyframes } from "styled-components";
import IconClose from "/icon-close.svg";

export const ListWrap = styled.div`
  flex: 1;
  background: ${(props) => props.theme.color.bgSurface};
  position: relative;
  margin-top: 90px;
  padding: 0 100px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 100px;
`;

export const ResultsContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
`;

export const RecipeCard = styled.div`
  background: ${(props) => props.theme.color.bgSurface};
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

export const RecipeName = styled.h3`
  margin: 10px 0;
  color: ${({ theme }) => theme.color.grey100};
`;

export const NutritionInfo = styled.p`
  margin: 5px 0;
  color: ${({ theme }) => theme.color.grey60};
  font-size: 0.8rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.grey20};
  color: ${({ theme }) => theme.color.grey100};

  &:hover {
    background-color: #49555f;
    color: #fff;
  }

  margin-top: 20px;
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
    border-color: transparent;
  }
  50% {
    border-color: #FFD700; 
  }
  100% {
    transform: rotate(360deg);
    border-color: transparent;
  }
}`;

export const NoticeBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 90%;
  padding: 50px;
  color: ${({ theme }) => theme.color.grey100};
  background-color: ${({ theme }) => theme.color.grey20};
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 10px 0 rgba(146, 148, 153, 0.45);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border-radius: 12px;
    border: 2px solid transparent;
    animation: ${Spin} 4s linear infinite;
  }
`;

// 팝업
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.bgSurface};
  padding: 30px;
  z-index: 1000;
  width: 80%;
  max-width: 600px;
  max-height: 600px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.color.grey40};
  mask: url(${IconClose});
  -webkit-mask: url(${IconClose});
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
  width: 20px;
  height: 20px;
`;

export const RecipeText = styled.p`
  color: ${({ theme }) => theme.color.grey100};
`;

export const Ingredients = styled.ul`
  color: ${({ theme }) => theme.color.grey100};

  li + li {
    margin-top: 10px;
  }
`;
