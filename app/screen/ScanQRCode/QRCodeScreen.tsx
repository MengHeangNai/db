import { View, Text } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

type Props = {}

const QRCodeScreen = (props: Props) => {
    const [data, setData] = useState('scan something') 
  return (
    <View>
        <QRCodeScanner
        onRead={(data)=> setData(data.data)}
        reactivate={true}
        reactivateTimeout={10}
        showMarker={true}
        topContent={
            <Text style={{fontSize:20, color:'white'}}> {data} </Text>
        }
        bottomContent={
            <Text style={{fontSize:20, color:'white'}}> QR Code Scanner</Text>
        }
        />
    </View>
  )
}

export default QRCodeScreen