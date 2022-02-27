import styled from "styled-components";
import { Button } from "../../globalStyle";
import fruit3 from "../../asset/images/fruit3.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mobile, Tablet } from "../../globalStyle";
import { useStateIfMounted } from "use-state-if-mounted";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Title = styled.h4`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
  ${Tablet({ marginBottom: "30px" })}
  position: relative;
  &::after {
    content: "";
    width: 40%;
    height: 2px;
    background-color: #bff073;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 2;
  ${Tablet({ display: "none" })}
`;
const Image = styled.img`
  width: 100%;
  ${Tablet({ display: "none" })}
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`;
const Intro = styled.h5`
  font-size: 25px;
  font-weight: 600;
  color: #f14545;
  margin-bottom: 20px;
  text-align: center;
`;
const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;
const CountDownContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 100px;
  background-color: #bff073;
  width: 100%;
  ${Mobile({ padding: "30px" })}
`;
const CountDownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
`;
const CountDownName = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  ${Tablet({ fontSize: "25px" })}
`;
const CountDownInfo = styled.span`
  font-size: 20px;
  color: #fff;
`;
const BigSaleButton = styled.button``;

const BigSale = () => {
  const [timersDay, setTimersDay] = useStateIfMounted("00");
  const [timersHour, setTimersHour] = useStateIfMounted("00");
  const [timersMinute, setTimersMinute] = useStateIfMounted("00");
  const [timersSec, setTimersSec] = useStateIfMounted("00");

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("February 28 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //Stop
        clearInterval(interval.current);
      } else {
        // Update timer
        setTimersDay(days);
        setTimersHour(hours);
        setTimersMinute(minutes);
        setTimersSec(seconds);
      }
    });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      startTimer();
    }
    return () => (isMounted = false);
  }, []);

  return (
    <Container>
      <Title>Big Sale Today</Title>
      <Wrapper>
        <ImageContainer>
          <Image src={fruit3} alt="fruit3" />
        </ImageContainer>
        <InfoContainer>
          <Intro>GET 30% OFF YOUR ORDER OF $100 OR MORE...</Intro>
          <Desc>
            We believe that having a healthy, balanced approach to the things
            you eat and drink helps you to enjoy life. Nutrition is just one
            aspect of ‘Good Food Good Life’. This conviction is enshrined in
            Henri Nestle's values and it is through this conviction and morale
            that the Company looks forward to the next 150 years of 'Good Food,
            Good Life'.
          </Desc>
          <CountDownContainer>
            <CountDownItem>
              <CountDownName>Day</CountDownName>
              <CountDownInfo>{timersDay}</CountDownInfo>
            </CountDownItem>
            <CountDownItem>
              <CountDownName>Hour</CountDownName>
              <CountDownInfo>{timersHour}</CountDownInfo>
            </CountDownItem>
            <CountDownItem>
              <CountDownName>Munite</CountDownName>
              <CountDownInfo>{timersMinute}</CountDownInfo>
            </CountDownItem>
            <CountDownItem>
              <CountDownName>Sec</CountDownName>
              <CountDownInfo>{timersSec}</CountDownInfo>
            </CountDownItem>
          </CountDownContainer>
          <BigSaleButton className="custom-btn btn-4">
            <span>
              <Link to="/products/vegatable">Shop Now</Link>
            </span>
          </BigSaleButton>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default BigSale;
