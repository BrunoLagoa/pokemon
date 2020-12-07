import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 98;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: linear-gradient(90deg, #43e97d, #38f8d5);
  width: 400px;
  height: 600px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
  position: relative;
  overflow-y: auto;

  @media (max-width: 375px) {
    width: 300px;
    height: 600px;
  }
`;

export const Close = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-right: 1rem;

  & button {
    margin-left: auto;
    background-color: #f7f9fc;
    border-radius: 32px;
    padding: 1rem 1rem;

    &.icon {
      width: 44px;
      height: 44px;
      border: 2px solid #8f9bb3;
    }
    &:hover {
      background-color: #667580;
    }
  }

  @media (max-width: 360px) {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 10rem;
  background: white;
  border-radius: 20px 20px 0 0;
  justify-content: end;
  align-items: center;
  position: absolute;
  flex-direction: column;

  & img {
    width: 250px;
    height: 250px;
    background-size: cover;
    background-color: white;
    border-radius: 200px;
    border: 3px solid #00d68f;
    margin-top: -12rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;

    & h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 4rem;
    }

    & div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 2rem;
    }

    div > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    div > div:nth-child(2) {
      border-left: 1px solid #dee3ee;
      border-right: 1px solid #dee3ee;
    }

    div > div > h2 {
      text-transform: uppercase;
      font-weight: bold;
    }

    div > div > span {
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;

export const CleanPokemon = styled.div`
  position: sticky;
  float: left;
  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  z-index: 22;

  & button {
    box-shadow: 1px 15px 30px rgba(0, 0, 0, 0.4);
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 375px) {
    transform: translateX(-25%);
  }
`;

export const SessionContent = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
`;

//  Alterar para ::before e ::after
export const Title = styled.h2`
  width: 90%;
  text-align: center;
  border-bottom: 1px solid #c4cee0;
  line-height: 0.1em;
  margin: 10px 0 20px;

  & span {
    text-transform: uppercase;
    font-weight: bold;
    background: #fff;
    padding: 0 10px;
  }
`;
