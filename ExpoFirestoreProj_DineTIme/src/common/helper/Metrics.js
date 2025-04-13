import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log("window width --->  ", width)
console.log("window height --->  ", height)

// common screen size
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

console.log("guidelineBaseWidth width --> ", guidelineBaseWidth)
console.log("guidelineBaseHeight height --> ", guidelineBaseHeight)

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };


// horizontalScale() --> width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal 
// verticalScale() --> height, marginTop, marginTop, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical
// moderateScale() --> fonstSize, borderRadius