import { Text, TextInput, View } from "react-native";

function SInput({onChange, label,otherProps}){
    const handleChange = (text) => {
        if (onChange) {
          onChange(text);
        }
      };
    return(
    <View className='px-4 mb-1 w-screen/2'>
        
        <Text className='text-sm font-interRegular'>{label}</Text>
        <TextInput onChange={handleChange} className='w-36 pl-1 p-2 h-10 rounded-md font-interRegular bg-white' {...otherProps}/>
    </View>)
}

export default SInput;