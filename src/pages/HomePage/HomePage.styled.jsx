import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 64px;
`;

export const Box = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const InfoBlock = styled.div`
  border-radius: 30px;
  width: 720px;
  height: 530px;
  background: #f8f8f8;
  padding: 98px 108px 98px 64px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: #121417;
  margin-bottom: 32px;
`;

export const Span = styled.span`
  font-style: italic;
  font-weight: 400;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: #121417;
  width: 471px;
  margin-bottom: 64px;
`;

export const Btn = styled.button`
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
  background: #f4c550;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: #121417;
`;

export const StatBlock = styled.div`
  border: 1.5px dashed #f4c550;
  border-radius: 30px;
  max-width: 1312px;
  height: 116px;
  padding: 40px 122px;
  display: flex;
  gap: 100px;

  /* background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Data = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: #121417;
`;

export const Info = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  width: 96px;
  ${Wrap}:nth-child(3) &,
  ${Wrap}:nth-child(4) & {
    width: 74px;
  }
`;
