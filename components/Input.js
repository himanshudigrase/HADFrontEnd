import { Text, TextInput, View } from "react-native";

function Input({label,otherProps}){
    return<View className='px-4 mb-4'>
        <Text className='mb-1 text-sm font-interRegular'>{label}</Text>
        <TextInput className='pr-14 rounded-md font-interRegular bg-white' {...otherProps}/>
    </View>
}

export default Input;