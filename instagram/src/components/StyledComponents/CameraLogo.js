import styled from 'styled-components';

import CameraSVG from '../../assets/camera-logo.svg';

export const CameraLogo = styled.div`
    background-image: url(${CameraSVG});
    background-repeat: no-repeat;
    background-size: contain;
    border-right: 1px solid rgba(0,0,0,0.6);
    width: 3.5rem;
    height: 100%;
    margin: 0 0 0 1rem;
`