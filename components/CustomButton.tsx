import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type customButton = {
    title?: string;
    handlePress?: () => string;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
};



const CustomButton = ({
    title = '',
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}: customButton) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={
                `bg-orange-400
                 rounded-xl
                 min-h-[62px]
                 justify-center
                 items-center
                 ${containerStyles}
                 ${isLoading
                    ?
                    'opacity-50'
                    :
                    ''
                }`
            }
            disabled={isLoading}
        >
            <Text className={`text-lg font-Norse ${textStyles}`}>{title}</Text>
        </TouchableOpacity >
    )
}

export default CustomButton