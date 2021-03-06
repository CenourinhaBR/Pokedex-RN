import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}


function TypeWater(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.61 16.92c0 4.463-3.63 8.08-8.11 8.08-4.48 0-8.11-3.617-8.11-8.08 0-4.34 7.671-16.258 8.092-16.909.01-.015.026-.015.036 0 .42.65 8.092 12.57 8.092 16.91zm-9.462 5.49c-4.115-.9-3.411-5.46-3.411-5.46s1.124 2.752 3.85 3.644c2.728.891 6.023-.416 6.023-.416s-2.346 3.132-6.462 2.232z"
        fill={props.color ?? '#4A90DA'}
      />
    </Svg>
  );
}

export default TypeWater;