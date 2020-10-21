import React, { ReactNode } from 'react';
import flexStyles from './flex.module.scss';

type Props = {
    direction?: "row" | "column",
    alignX?: "left" | "right" | "center" | "space-between",
    alignY?: "start" | "end" | "center",
    children: ReactNode
}

export function FlexContainer(
    {
        direction = 'row',
        alignX = "left",
        alignY = "start",
        children}: Props) {

    return (
        <div className={`
            ${flexStyles['flex-container']} 
            ${flexStyles[`alignX-${alignX}`]} 
            ${flexStyles[`alignY-${alignY}`]} 
            ${direction == 'column' ? flexStyles.column : flexStyles.row}
        `}>
            {children}
        </div>
    );
}

type ColumnProps = {
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    children: ReactNode
}

export function FlexColumn({ width = 'auto', maxWidth, minWidth, children }: ColumnProps){
    return(
        <div style={{
                width,
                maxWidth,
                minWidth
            }}
        >
            {children}
        </div>
    )
}