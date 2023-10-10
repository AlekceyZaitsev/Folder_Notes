import styled from "styled-components";
import {colors_green, colors_gray} from "@/utilites/styles/color/color";

export const Input = styled.input`
  min-width: 250px;
  max-width: 500px;
  height: 40px;
  font-family: "Arial",serif;
  padding-left: 15px;
  border: 2px solid ${colors_green.GREEN};
  margin-bottom: 15px;
  
  border-radius: 3px;
  
  &:hover {
    border-color: ${colors_green.LIGHT_GREEN};
    transition: 0.3s;
  }
  
  &:not(:hover) {
    transition: 0.3s;
  }
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${colors_gray.GRAY};
  }
`