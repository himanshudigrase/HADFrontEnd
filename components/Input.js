import { Text, TextInput, View } from "react-native";

function Input({onChange, label,otherProps}){
    const handleChange = (text) => {
        if (onChange) {
          onChange(text);
        }
      };
    return(
    <View className='px-4 mb-2 w-screen'>
        <Text className='text-sm font-interRegular'>{label}</Text>
        <TextInput onChange={handleChange} className='w-full pl-1 p-2  rounded-md font-interRegular bg-white' {...otherProps}/>
    </View>)
}

export default Input;