import styled, {css} from "styled-components";
import {MyAnimations} from "../styles/animations/Animations";

type StylesBtnPropsType = {
    color?: string,
    fontSize?: string,
    btnType?: 'primary' | 'outlined',
    active?:boolean
}

export const StyleBtn = styled.button<StylesBtnPropsType>`
    border: none;
    width: 86px;
    height: 30px;
    //background-color: deeppink;
        // background-color: ${props => props.color || 'deeppink'};
    margin-right: 10px;
    margin-top: 10px;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || '10px'};
    border-radius: 10px;
    //color: snow;
    font-weight: bold;


    ${props => props.btnType === 'outlined' && css<StylesBtnPropsType>`
        border: 2px solid ${props => props.color || 'deeppink'};
        color: ${props => props.color || 'deeppink'};
        background-color: transparent;

        &:hover {
            border-color: rgba(78, 113, 254, 1);
            color: rgba(78, 113, 254, 1);
            background-color: transparent;
        }

    `}

    ${props => props.btnType === 'primary' && css<StylesBtnPropsType>`
        
        background-color: ${props => props.color || 'deeppink'};
        color: snow;

        &:hover {
                //animation: ${MyAnimations} 2s ease-in-out;
            background-color: blue;
        }
    `}


    ${props => props.active && css<StylesBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(149,136,140,0.6);

    `}





`

