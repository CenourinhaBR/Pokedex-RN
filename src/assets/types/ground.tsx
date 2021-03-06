import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function TypeGround(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.506 21.492a.01.01 0 01-.01-.013L11.88 3.444a.01.01 0 01.01-.006h6.813a.01.01 0 01.01.006L25 21.48a.01.01 0 01-.01.013H5.506zm-5.496.07A.01.01 0 010 21.55L4.755 8.86a.01.01 0 01.009-.006h4.13a.01.01 0 01.009.013l-4.596 12.69a.01.01 0 01-.01.006H.01z"
        fill={props.color ?? '#DD7748'}
      />
    </Svg>
  );
}

export default TypeGround;