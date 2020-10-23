import React from 'react';
import { FlexColumn, FlexContainer } from '../../components/Layout/Flex';
import SubjectList from './components/SubjectList';

function Precharge() {
    return (
        <div>
            <FlexContainer>
                <FlexColumn>
                    <SubjectList/>
                </FlexColumn>
                <FlexColumn>
                    Precharge
                </FlexColumn>
            </FlexContainer>
        </div>
    );
}

export default Precharge;