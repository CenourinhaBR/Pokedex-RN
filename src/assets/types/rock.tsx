import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function TypeRock(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.303 11.973a.009.009 0 01-.002-.006l1.592-9.281c0-.004.004-.008.008-.008h.504c.004 0 .008.003.009.007L25 14.038a.009.009 0 01-.003.01l-2.644 2.064a.009.009 0 01-.013-.002l-3.037-4.136zM0 18.127c0 .004.002.007.006.009l5.45 1.782a.01.01 0 00.008-.002l12.182-8.41a.009.009 0 00.004-.006l1.306-8.766a.009.009 0 00-.008-.01H8.158a.009.009 0 00-.008.003l-8.148 9.83a.009.009 0 00-.002.006v5.564zm7.727 2.245l5.954 1.95.008-.001 7.09-5.085a.009.009 0 00.001-.012l-2.657-3.955a.009.009 0 00-.012-.002L7.727 20.37z"
        fill={props.color ?? '#BAAB82'}
      />
    </Svg>
  );
}

export default TypeRock;