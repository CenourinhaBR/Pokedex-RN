import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { StyleProp, ViewStyle } from 'react-native'



interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function TypeFairy(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.016 19.824l4.01-1.163 3.464 6.333a.012.012 0 00.02 0l3.464-6.333 4.01 1.163a.012.012 0 00.015-.015l-1.163-3.93 6.158-3.369a.012.012 0 000-.02l-6.21-3.396L20 4.992a.012.012 0 00-.015-.015l-4.104 1.19-3.37-6.16a.012.012 0 00-.02 0l-3.37 6.16-4.104-1.19a.012.012 0 00-.015.015l1.214 4.102L.006 12.49a.012.012 0 000 .02l6.158 3.368-1.163 3.931a.012.012 0 00.015.015zm3.112-7.28l2.84 1.553 1.554 2.84a.012.012 0 00.021 0l1.554-2.84 2.84-1.554a.012.012 0 000-.02l-2.84-1.554-1.554-2.841a.012.012 0 00-.02 0l-1.554 2.84-2.841 1.554a.012.012 0 000 .021z"
        fill={props.color ?? '#ED6EC7'}
      />
    </Svg>
  );
}

export default TypeFairy;