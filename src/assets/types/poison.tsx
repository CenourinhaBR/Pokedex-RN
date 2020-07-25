import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleSheet, View } from 'react-native'

function SvgComponent() {
    return (
        <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" style={styles.poison}>
            <Path
                fill="#FFFFFF"
                d="M20.89 19.211c2.524-2.018 4.11-4.935 4.11-8.178C25 4.94 19.404 0 12.5 0S0 4.94 0 11.033c0 3.126 1.473 5.949 3.84 7.956a5.751 5.751 0 00-.222 1.598c0 2.437 1.473 4.413 3.29 4.413 1.18 0 2.216-.834 2.796-2.087C10.284 24.166 11.319 25 12.5 25c1.076 0 2.031-.693 2.632-1.765.6 1.072 1.555 1.765 2.631 1.765 1.817 0 3.29-1.976 3.29-4.413 0-.48-.058-.943-.163-1.376zm-1.153-7.96c0 3.094-3.314 5.602-7.401 5.602-4.088 0-7.402-2.508-7.402-5.602 0-3.093 3.314-5.6 7.401-5.6 4.088 0 7.402 2.507 7.402 5.6z"
            />
        </Svg>
    )
}


const styles = StyleSheet.create({





    poison: {
        paddingLeft: 35

    }
})


export default SvgComponent
