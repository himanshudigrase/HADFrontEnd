import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const TermsAndConditions = () => {
    const [checked, setChecked] = React.useState(false);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [])
    return (

        <SafeAreaView className="p-4 pt-14 relative bg-backgr h-full">
            <ScrollView>
                <Text className='text-xl font-interBold'>Terms and Conditions</Text>
                <Text className='font-interMedium pt-3 text-sm tracking-normal' >
                    Welcome to our mental health application ("Better U"). By downloading or using the App, you agree to be bound by the following terms and conditions ("Terms").

                    {"\n"}{"\n"}1. Privacy: We take the privacy of our users seriously. We collect and use user data only in accordance with our privacy policy, which can be found at [insert link to privacy policy]. We may use third-party services for analytics and advertising, and we will provide notice to users of any such services.

                    {"\n"}{"\n"}2. Security: We take reasonable measures to protect user data and prevent unauthorized access or disclosure. However, we cannot guarantee the security of user data and are not responsible for any damages that may arise from unauthorized access or disclosure.

                    {"\n"}{"\n"}3. Medical Disclaimer: The information provided by the App is for educational purposes only and is not intended to replace professional medical advice or treatment. Users should consult with a licensed healthcare professional before making any healthcare decisions.

                    {"\n"}{"\n"}4. User Conduct: Users must comply with all applicable laws and regulations when using the App. Prohibited conduct includes, but is not limited to, hacking, spamming, and infringing on the intellectual property rights of others. We reserve the right to terminate or suspend user accounts for any reason.

                    {"\n"}{"\n"}5. Intellectual Property: We own all intellectual property rights in the App and its contents, including but not limited to text, images, graphics, and code. Users may not reproduce or distribute any part of the App or its contents without our prior written consent.

                    {"\n"}{"\n"}6. Termination: We reserve the right to terminate or suspend user accounts at any time and for any reason, including but not limited to violation of these Terms.

                    {"\n"}{"\n"}7. Modifications: We may modify these Terms at any time by posting a revised version on our website or within the App. Users will be notified of any such changes and are responsible for reviewing the revised Terms.

                    {"\n"}{"\n"}8. Limitation of Liability: In no event shall we be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use of the App or its contents.

                    {"\n"}{"\n"}9. Applicable Law: These Terms shall be governed by and construed in accordance with the laws of "India". Any disputes arising from these Terms shall be resolved in the courts of "India".

                    {"\n"}{"\n"}10. Contact Information: If you have any questions or concerns about these Terms or the App, please contact us at [insert contact information].

                    By downloading or using the App, you acknowledge that you have read, understood, and agreed to these Terms.
                </Text>
                <View className='flex-row pt-2 items-center'>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                            
                        }}
                        color='#012148'
                    />
                    <Text className='font-interMedium  text-sm tracking-normal'>I agree to the terms and conditions.</Text>
                </View>

                <Button mode='contained' buttonColor='#012148' textColor='white' className='mt-4 mb-2 rounded-md' disabled={!checked} onPress={() => navigation.navigate('Signup')}>Proceed</Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TermsAndConditions;