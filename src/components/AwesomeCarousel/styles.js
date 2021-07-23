import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  color: white;

  .slides {
    display: grid;
    position: relative;

    .slide {
      grid-area: 1 / -1;
    }

    .prevNexButtons {
      appearance: none;
      background: transparent;
      border: none;
      color: black;
      position: absolute;
      font-size: 80px;
      width: 5rem;
      height: 5rem;
      top: 25%;
      transition: opacity 0.3s;
      opacity: 0.7;
      

      &:hover {
        opacity: 1;
      }

      &:focus {
        outline: none;
      }

      &:first-child {
        display: block;
        left: -30%;
      }
      &:last-child {
        display: block;
        right: -30%;
      }
    }
  }

  .slideContent {
    width: 180px;
    height: 250px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: transform 0.5s ease-in-out;
    opacity: 0.7;
    display: grid;
    align-content: flex-end;
    padding-bottom: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px) translateX(calc(106% * var(--offset)))
      rotateY(calc(-45deg * var(--dir)));
    border: 3px solid black;
  }

  .slideContentInner {
    transform-style: preserve-3d;
    transform: translateZ(3rem);
    transition: opacity 0.3s linear;
    text-shadow: 0 0.1rem 1rem #000;
    text-shadow: 1px 1px 2px black;
    opacity: 0;

    .slideSubtitle,
    .slideTitle {
      text-align: center;
      font-size: 1rem;
      font-weight: normal;
      letter-spacing: 0.2ch;
      text-transform: uppercase;
      margin: 0;
    }

    .slideDescription {
      text-align: center;
      margin: 0;
      font-size: 1rem;
      /* letter-spacing: 0.2ch; */
    }
  }

  .slide[data-active] {
    z-index: 2;
    pointer-events: auto;

    .slideContentInner {
      opacity: 1;
    }

    .slideContent {
      --x: calc(var(--px) - 0.5);
      --y: calc(var(--py) - 0.5);
      opacity: 1;

      transform: perspective(1000px);

      &:hover {
        transition: none;
        transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
          rotateX(calc(var(--y) * -45deg));
      }
    }
  }
`

export {  Container }
