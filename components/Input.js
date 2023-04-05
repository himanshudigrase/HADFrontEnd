import { Text, TextInput, View } from "react-native";

function Input({onChange, label,otherProps}){
    const handleChange = (text) => {
        if (onChange) {
          onChange(text);
        }
      };
    return<View className='px-4 mb-4'>
        <Text className='mb-1 text-sm font-interRegular'>{label}</Text>
        <TextInput onChange={handleChange} className='w-60 p-2 rounded-md font-interRegular bg-white' {...otherProps}/>
    </View>
}

export default Input;