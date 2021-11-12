// import React from "react";
// import styled from "styled-components";
// // import useOnScreen from "hooks/useOnScreen";

// interface reverseType {
//   isreversed: boolean;
// }

// interface cardType {
//   width?: string;
//   height?: string;
//   hasBorder?: boolean;
// }

// const Container = styled("div")`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   margin: 10vh 0;
// `;

// const ExampleCard = styled("div")`
//   width: ${(props: cardType) => props.width || "25%"};
//   height: 100%;
//   ${(props: cardType) => props.hasBorder && "border-left: 2px solid black; border-right: 2px solid black;"};

//   @keyframes fadeinBottom {
//     from {
//       transform: translate(0px, 100px);
//       opacity: 0;
//     }
//     to {
//       transform: translate(0, 0);
//       opacity: 1;
//     }
//   }
// `;

// const ExampleTitle = styled("div")`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   // justify-content: ${(props: reverseType) => (props.isreversed ? "start" : "end")};
//   align-items: ${(props: reverseType) => (props.isreversed ? "start" : "end")};
// `;

// const ExampleTitleInner = styled("div")`
//   transform: translate(${(props: reverseType) => (props.isreversed ? "0, 60%" : "0, -60%")})
//     rotate(${(props: reverseType) => (props.isreversed ? "90deg" : "-90deg")});
//   color: gray;
//   font-size: 110px;
//   font-weight: bold;
//   line-height: 1.1;
// `;

// // const ExamplePictureBox = styled("div")`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// const CardNumber = styled("p")`
//   font-size: 70px;
// `;

// const CardText = styled("span")`
//   color: gray;
//   display: inline-block;
//   line-height: 1.3;
//   font-size: 20px;
// `;

// const CardImage = styled("img")`
//   width: ${(props: cardType) => props.width};
//   height: ${(props: cardType) => props.height};
//   margin: 3% 0;
// `;

// const MatchExampleBackup: React.FC = () => {
//   return (
//     <div
//       id="example-component"
//       style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
//     >
//       <Container>
//         <ExampleCard width="20%">
//           <ExampleTitle isreversed={false}>
//             <ExampleTitleInner isreversed={false}>
//               <p>GOOD</p>
//               <p>EXAMPLE</p>
//             </ExampleTitleInner>
//           </ExampleTitle>
//         </ExampleCard>
//         <ExampleCard style={{ paddingLeft: "2%" }}>
//           <CardNumber>01</CardNumber>
//           <CardImage width="80%" src="/images/Match/ex_good_01.jpg" alt="ex-good-01" />
//           <div>
//             <CardText style={{ margin: "10px 0" }}>
//               정면을 보고 바르게 선 자세로
//               <br />
//               찍은 사진일 수록 분석의 정확도가
//               <br /> 높아집니다.
//             </CardText>
//           </div>
//         </ExampleCard>
//         <ExampleCard hasBorder={true} style={{ paddingLeft: "3%" }}>
//           <div style={{ display: "flex", height: "25%", alignItems: "end" }}>
//             <CardNumber style={{ marginRight: "5%" }}>02</CardNumber>
//             <CardText>
//               배경색은 흰색에
//               <br /> 가까울수록 좋습니다.
//             </CardText>
//           </div>
//           <CardImage height="70%" src="/images/Match/ex_good_02.jpg" alt="ex-good-01" />
//         </ExampleCard>
//         <ExampleCard style={{ paddingLeft: "3%" }}>
//           <CardNumber>03</CardNumber>
//           <CardImage height="75%" src="/images/Match/ex_good_03.jpg" alt="ex-good-01" />
//           <CardText style={{ margin: "10px 0" }}>
//             거울 셀카보다는 다른 사람이
//             <br />
//             찍어준 사진을 활용해 보세요.
//           </CardText>
//         </ExampleCard>
//       </Container>
//       <Container>
//         <ExampleCard
//           width="30%"
//           style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0" }}
//         >
//           <div>
//             <CardNumber>
//               01
//               <CardText>
//                 여러 명이 함께 찍은 사진은
//                 <br /> 분석할 수 없습니다.
//               </CardText>
//             </CardNumber>
//           </div>
//           <CardImage width="70%" src="/images/Match/ex_bad_01.jpg" alt="ex-bad-01" />
//           <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
//             <CardImage width="35%" src="/images/Match/ex_bad_02.jpg" alt="ex-bad-02" />
//             <div style={{ width: "30%", marginLeft: "5%" }}>
//               <CardNumber style={{ marginBottom: "30%" }}>02</CardNumber>
//               <CardText style={{ paddingRight: "10%" }}>옷의 일부만 보이는 사진은 제대로 분석할 수 없습니다.</CardText>
//             </div>
//           </div>
//         </ExampleCard>
//         <ExampleCard
//           width="20%"
//           hasBorder={true}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "5% 0",
//           }}
//         >
//           <div style={{ width: "100%", marginBottom: "5%", paddingLeft: "12.5%" }}>
//             <CardNumber style={{ marginBottom: "4%" }}>03</CardNumber>
//             <CardText>
//               배경색이 다양할수록
//               <br />
//               분석의 정확도가
//               <br />
//               떨어집니다.
//             </CardText>
//           </div>
//           <CardImage width="75%" src="/images/Match/ex_bad_03.jpg" alt="ex-bad-03" />
//         </ExampleCard>
//         <ExampleCard width="25%" style={{ paddingLeft: "2.5%" }}>
//           <CardNumber>04</CardNumber>
//           <CardImage style={{ margin: "5% 0" }} height="75%" src="/images/Match/ex_bad_04.jpg" alt="ex-bad-03" />
//           <CardText>
//             흑백 사진은 분석 시
//             <br />
//             정확한 결과를 얻기가 힘듭니다.
//           </CardText>
//         </ExampleCard>
//         <ExampleCard width="20%" style={{ paddingRight: "10%" }}>
//           <ExampleTitle isreversed={true}>
//             <ExampleTitleInner isreversed={true}>
//               <p>
//                 BAD
//                 <br />
//                 EXAMPLE
//               </p>
//             </ExampleTitleInner>
//           </ExampleTitle>
//         </ExampleCard>
//       </Container>
//     </div>
//   );
// };

export {};
