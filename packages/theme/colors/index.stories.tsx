// import { storiesOf } from '@storybook/react';
// import styled from 'styled-components';
// import React from 'react';
// import { colors } from './';
// import { font } from '../fantaTypography';

// import magic from '../../../../../development_assets/magic.gif';

// const ColorSwatchContainer = styled.div<{ bgColor: string; textColor: string }>`
//   width: 8rem;
//   height: 8rem;
//   background-color: ${({ bgColor }) => bgColor};
//   color: ${({ textColor }) => textColor};
//   margin: 0.5rem 0.5rem;
//   border: 1px dashed gray;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   text-align: center;
// `;

// const ColorSwatch = ({
//   colorName,
//   colorValue
// }: {
//   colorName: string;
//   colorValue: string;
// }) => {
//   const hexValue = hexToRgb(colorValue);
//   const textColor = getFontColor(hexValue);
//   return (
//     <ColorSwatchContainer bgColor={colorValue} textColor={textColor}>
//       <span>{colorName}</span>
//       <span>{colorValue}</span>
//     </ColorSwatchContainer>
//   );
// };

// const ColorGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ColorRow = styled.div`
//   display: flex;
// `;

// const BackgroundProvider = styled.div`
//   background-image: url('${magic}');
//   background-size: cover;
// `;

// const hexToRgb = (hex: string) => {
//   // turn hex val to RGB
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return {
//     r: parseInt(result![1], 16),
//     g: parseInt(result![2], 16),
//     b: parseInt(result![3], 16)
//   };
// };

// // calc to work out if it will match on black or white better
// const getFontColor = (rgb: { r: number; g: number; b: number }) =>
//   (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white';

// const primaryColors = ['cheggOrange'];
// const secondaryColors = ['teal', 'mustard', 'coral', 'royal', 'sky'];
// const functionalColors = ['errorRed', 'orangeDark', 'link'];
// const tertiaryColors = [
//   ['tealMedium', 'mustardMedium', 'coralMedium', 'royalMedium', 'skyMedium'],
//   ['tealLight', 'mustardLight', 'coralLight', 'royalLight', 'skyLight'],
//   ['tealXlight', 'mustardXlight', 'coralXlight', 'royalXlight', 'skyXlight']
// ];
// const neutralColors = [
//   'dark',
//   'grey',
//   'greyMedium',
//   'greyLight',
//   'greyXlight',
//   'white'
// ];

// storiesOf('Theme', module).add('Colors', () => (
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       flexWrap: 'wrap',
//       fontFamily: font.family.default
//     }}
//   >
//     <ColorGroup>
//       <h2>Primary</h2>
//       <ColorRow>
//         {primaryColors.map(colorName => {
//           const colorValue = colors[colorName as keyof typeof colors];
//           return <ColorSwatch colorName={colorName} colorValue={colorValue} />;
//         })}
//       </ColorRow>
//     </ColorGroup>
//     <ColorGroup>
//       <h2>Secondary</h2>
//       <ColorRow>
//         {secondaryColors.map(colorName => {
//           const colorValue = colors[colorName as keyof typeof colors];
//           return <ColorSwatch colorName={colorName} colorValue={colorValue} />;
//         })}
//       </ColorRow>
//     </ColorGroup>
//     <ColorGroup>
//       <h2>Functional</h2>
//       <ColorRow>
//         {functionalColors.map(colorName => {
//           const colorValue = colors[colorName as keyof typeof colors];
//           return <ColorSwatch colorName={colorName} colorValue={colorValue} />;
//         })}
//       </ColorRow>
//     </ColorGroup>
//     <ColorGroup>
//       <h2>Tertiary</h2>
//       {tertiaryColors.map(tertiaryColorSet => {
//         return (
//           <ColorRow>
//             {tertiaryColorSet.map(colorName => {
//               const colorValue = colors[colorName as keyof typeof colors];
//               return (
//                 <ColorSwatch colorName={colorName} colorValue={colorValue} />
//               );
//             })}
//           </ColorRow>
//         );
//       })}
//     </ColorGroup>
//     <ColorGroup>
//       <h2>Neutral</h2>
//       <ColorRow>
//         {neutralColors.map(colorName => {
//           const colorValue = colors[colorName as keyof typeof colors];
//           return <ColorSwatch colorName={colorName} colorValue={colorValue} />;
//         })}
//         <BackgroundProvider>
//           <ColorSwatchContainer bgColor={'transparent'} textColor={'white'}>
//             <span>{'transparent'}</span>
//           </ColorSwatchContainer>
//         </BackgroundProvider>
//       </ColorRow>
//     </ColorGroup>
//   </div>
// ));
