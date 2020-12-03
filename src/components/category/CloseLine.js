import React from 'react'
import {
    TouchableOpacity
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function CloseLine(props) {
    const { onVisibleModal } = props

    return (
        <TouchableOpacity
            onPress={onVisibleModal}
            style={{
                alignItems: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: -40,
            }}>
            <IonIcon name="remove-outline" color="#013551" size={100} />
        </TouchableOpacity>
    )
} 