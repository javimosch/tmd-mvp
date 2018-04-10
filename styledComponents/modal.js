import styled from 'vue-styled-components';

export const SimpleModalBackdrop = styled.div`
    min-height: 100%;
    min-width: 100%;
    background: white;
    z-index: 5;
    position:fixed;
    top:0px;
    left:0px;
    opacity: 0.8;
`;
export const SimpleModal = styled.div`
    top:10%;
    padding: 2em;
    min-height: 200px;
    min-width: 80%;
    background: white;
    z-index: 10;
    width: 75%;
    position: fixed;
    left: 50%;
    margin-left: -39.5%;
    outline:2px solid #ebedf6;
    overflow: scroll;
`;

export const AbsoluteModal = styled.div`
    top:10%;
    padding: 2em;
    min-height: 200px;
    min-width: 80%;
    background: white;
    z-index: 10;
    width: 75%;
    position: absolute;
    left: 50%;
    margin-left: -39.5%;
    outline:2px solid #ebedf6;
    overflow: scroll;
`;

