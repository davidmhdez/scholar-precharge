import React, { ReactNode } from 'react';
import cardStyles from './card.module.scss';

type Props = {
    children: ReactNode,
    lg?: boolean,
    width?: string
}

function Card({children, lg = false, width = 'auto'}: Props) {

    return (
        <div 
            className={`${cardStyles.card}  ${lg ? cardStyles.lg: ''}`}
            style={{
                width
            }}
        >
            {children}
        </div>
    );
}

type ColorSectionProps = {
    theme?: 'main',
    children: ReactNode
}

export function ColorSection({children, theme}: ColorSectionProps){
    
    return(
        <div className={`
            ${cardStyles.section} 
            ${theme ? cardStyles[`section-${theme}`] : ''}
        `}>
            {children}
        </div>
    )
}

export default Card;