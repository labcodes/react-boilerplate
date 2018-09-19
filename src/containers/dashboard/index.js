import React, { StrictMode } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-transform: uppercase;
`;

const DashboardContainer = () => {
    return (
        <StrictMode>
            <Title>Dashboard works!</Title>
        </StrictMode>
    );
};

export default DashboardContainer;
