import styled from 'styled-components';

export const StyledEdit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 430px;
    height: 80px;
    align-items: space-between;

    div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

    }
    input {
        width: 190px;
        height: 35px;
        border-width: 3px;
        border-radius: 3px;
        border-color: #b8c4ce;
        border-style: solid;
        outline: none;
        padding-left: 10px;
        &::placeholder{
            font-size: 16px;
            color: #c4d0da
        }
    }
    button {
        width: 100px;
        height: 30px;
        border-width: 3px;
        border-radius: 3px;
        border-color: #6FC3A5;
        border-style: solid;
        outline: none;
        color: #00bc77;
        font-weight: bold;
    }
`;