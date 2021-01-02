import styled from 'styled-components';

export const Container = styled.section`
  border-bottom: 8px solid #222222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 825px;
  margin: 0 auto;
  padding: 4.5em 2em;
`;

export const Title = styled.h1`
  font-size: 3.25rem;
  color: #ffffff;
  margin: 0 0 0.25em;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export const Frame = styled.div``;

export const Item = styled.div`
  margin-bottom: 1em;
  color: #ffffff;
  background-color: #303030;
  user-select: none;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #000000;
  padding: 0.8em 1.2em;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 1.5;
  overflow: hidden;
  padding: 0 1.2em;
  max-height: 0;
  transition: all 300ms ease-in-out;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  &.active {
    max-height: calc(${({ bodyHeight }) => bodyHeight}px + 1.5em);
    padding: 0.8em 1.2em;
  }
`;
