import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8rem 4rem 0;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};

    .Text {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        @media screen and (max-width: 1300px) {
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
        }
    }

    .Header {
        display: flex;
        flex-direction: row;
        text-align: end;
        font-size: 4rem;
        line-height: 5rem;
        font-family: ${theme.fonts.body};

        svg {
            position: relative;
            top: -0.2rem;
            left: 5rem;
            height: 84px;
            width: 84px;
            fill: ${(props) => props.theme.colors.text};
        }

        @media screen and (max-width: 1300px) {
            position: relative;
            left: -35px;
            @media screen and (max-width: 600px) {
                font-size: 2rem;
                line-height: 3rem;
                svg {
                    top: -1rem;
                    left: 3.5rem;
                    height: 64px;
                    width: 64px;
                }
            }
        }
    }

    .Body {
        align-self: flex-end;

        p {
            text-align: start;
            width: 50%;
            font-size: 1.5rem;
            align-self: flex-end;
            font-family: ${theme.fonts.body};
        }

        @media screen and (max-width: 1300px) {
            align-self: center;
            p {
                text-align: center;
                align-self: center;
                width: auto;
                max-width: 80%;
                margin: 0 auto;
            }

            margin: 0;
        }
    }

    hr {
        width: 100%;
        height: 4px;
        border: 1px solid #a58bf499;
        margin-top: 2rem;
        box-shadow: 0 0 16px 1px #a58bf499;
    }

    /* Style for the card when user click on it */

    .openCard {
        --border: 6px;
        --cardWidth: 50vw;
        --cardHeight: 80vh;
        @media screen and (max-width: 648px) {
            --cardHeight: 95vh;
            img {
                width: 150% !important;
                height: auto !important;
            }

            h5 {
                font-size: 2rem !important;
            }
        }
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: calc(var(--cardHeight) / -2);
        margin-left: calc(var(--cardWidth) / -2);
        display: flex;
        align-self: center;
        justify-self: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 40px 20%;

        z-index: 3;
        background-color: pink;

        width: var(--cardWidth);
        height: var(--cardHeight);

        border: var(--border) solid transparent;
        border-radius: 25px;

        font-family: ${theme.fonts.body};

        h5 {
            font-size: 4rem;
            width: max-content;
        }

        img {
            height: 300px;
            width: 508px;
        }

        &:before {
            content: "";
            position: absolute;
            top: -1px;
            bottom: 0;
            right: -1.3px;
            border-radius: 21px;
            width: calc(100% + var(--border) / 2);
            height: calc(100% + var(--border) / 2);
            background-color: ${(props) => props.theme.colors.background};
            z-index: -1;
        }

        @media (max-width: 1024px) {
            --cardWidth: 90vw;
        }
    }

    .Blur {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        background-color: #000000b0;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .bullet-point {
        --topMarginDistance: 90px;
        position: relative;
        top: var(--topMarginDistance);

        width: 100%;
        height: auto;

        padding: 10px 1rem;
        margin: 0.5rem;

        font-size: 1rem;
        font-family: ${theme.fonts.body};
        font-weight: 600;
        text-align: center;
        line-height: 20px;

        color: #000;
        box-shadow: 0 4px 8px 0 #00000088;
        border-radius: 15px;
        background: rgba(255, 255, 255, 1);
        cursor: pointer;

        @media screen and (max-width: 1100px) {
            margin: 0.5rem;
            width: fit-content;
            --topMarginDistance: -00px;
        }
        @media screen and (max-width: 512px) {
            display: none;
        }
    }

    .swiper-pagination-bullet-active {
        color: #000;
        background: #d2c5f9;
        box-shadow: 0 8px 12px 0 #00000060;

        top: var(--topMarginDistance);
        transform: scale(1.2);
        transition: all 300ms ease;
        @media screen and (max-width: 512px) {
            transform: scale(1.2);
            transition: all 300ms ease;
            top: var(--topMarginDistance);
            z-index: 6;
        }
    }

    overflow-x: hidden !important;

    /** Carousel styles */

    .swiper {
        width: 100%;
        height: 100%;
        margin: 150px auto;
        overflow-x: visible !important;
        overflow-y: visible !important;
        @media screen and (max-width: 1100px) {
            margin: 50px auto;
        }
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        border-radius: 25px;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d2c5f9;

        width: fit-content;
        height: 400px;
        @media screen and (max-width: 1100px) {
            height: 300px;
            width: auto;
            background-color: transparent;
            @media screen and (max-width: 600px) {
                height: 200px;
            }
        }
    }
`;
export const MainCard = styled.img<imgProps>`
  width: auto;
  height: 101%;
  border-radius: 25px;
  box-shadow: 0 8px 60px 4px ${(props) => props.color + "50"};
  /* border: 2px solid ${(props) => props.color}; */
`;

type imgProps = {
    color: string;
};

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  svg {
    stroke: ${(props) => props.theme.colors.text};
    stroke-width: 4px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  @media screen and (max-width: 648px) {
    flex-direction: column;
    gap: 2rem;
  }
  a {
    text-decoration: none;
    --borderColor: rgba(165, 139, 244, 0.25);
    &:nth-child(even) {
      --borderColor: rgba(255, 121, 198, 0.25);
    }
  }

  .DescriptionBox {
    align-self: flex-start;
    margin: 0 1rem;
    width: 300px;
    padding: 1rem;
    height: 100%;
    border-radius: 10px;
    box-shadow: 2px 0 8px rgba(84, 199, 244, 0.25),
      0px -2px 8px rgba(241, 245, 126, 0.25),
      0px 4px 8px rgba(151, 71, 255, 0.25),
      -2px 0px 8px rgba(255, 121, 198, 0.25);

    h6 {
      filter: opacity(0.7);
      font-style: italic;
    }
    @media screen and (max-width: 648px) {
      margin: 0 auto;
      width: 100%;
    }
  }
  .Buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    button {
      color: ${(props) => props.theme.colors.text};

      width: 200px;
      height: 75px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-self: stretch;
      justify-content: space-between;

      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 4px var(--borderColor), 0 -1px 0 0 var(--borderColor);

      font-size: 1rem;
      text-align: start;

      cursor: pointer;

      strong {
        font-size: 2rem;
      }

      svg {
        width: 42px;
        height: 42px;
        order: 2;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;
