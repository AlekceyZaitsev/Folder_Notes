import styled from "styled-components";
import {colors_green, colors_gray} from "@/utilites/styles/color/color";

export const ButtonAgree = styled.button`
  padding: 10px 40px;
  font-family: "Arial", serif;
  background: none;
  border: 2px solid ${colors_green.GREEN};
  color: ${colors_gray.GRAY};
  cursor: pointer;
  max-width: 200px;
  
`