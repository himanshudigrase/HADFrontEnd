import { View, Text, StyleSheet, TouchableOpacity, Image,TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import {Button, Modal, Portal } from 'react-native-paper'

const MFData = require('../dummyData/MFData')

const FeaturedMF = () => {
    const [isMythClicked, setIsMythClicked] = useState(false);
    const [isFactClicked, setIsFactClicked] = useState(false);

    const [isCorrect, setisCorrect] = useState(null);
    const [mfs, setMfs] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const showModal = () => {
        setModalVisible(true);
    }
    const hideModal = () => {
        setIsFactClicked(false);
        setIsMythClicked(false)
        setModalVisible(false);
    }
    const handleImagePress = (image) => {
        setSelectedImage(image);
        showModal();
    };

    const handleModalClose = () => {
        setIsFactClicked(false);
        setIsMythClicked(false)
        setModalVisible(false);
    };

    useEffect(() => {

        let mfs = MFData.mfData;
        setMfs(mfs);

    }, []);

    return (

        <View className='flex flex-row w-full flex-wrap m-2  justify-evenly'>
            {

                mfs.map((mf, index) => {

                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => handleImagePress(mf.id)}>
                                <Image className='w-36 h-32 mt-2 mb-2 mr-5 z-1'
                                    style={{ borderWidth: 1,borderRadius:8 }} source={mf.image}
                                />
                                <Text className='absolute text-white mt-12 ml-6 font-bold text-4xl z-2'>{mf.id}</Text>
                            </TouchableOpacity>
                            {selectedImage === mf.id && (
                                <Portal className=''>
                                    <Modal visible={modalVisible} onDismiss={handleModalClose} className='m-6'>
                                        <View style={styles.modalContent} className='items-center '>
                                            <View className='flex-row '>
                                            <Text className='text-xl pb-6 text-textColor font-interMedium mr-60'>{mf.id}.</Text>
                                            {/* <Button mode='outlined' onPress={hideModal}>X</Button> */}
                                            <TouchableWithoutFeedback onPress={hideModal}>
                                                <Text className="text-xl text-textColor font-regular -mt-1">x</Text>
                                                </TouchableWithoutFeedback>
                                            </View>
                                            
                                            <Text className='text-textColor font-interRegular pb-4'>{mf.question}</Text>
                                            <View className='flex-row mr-20 mt-5 -mb-4 '>
                                                <Button buttonColor='#9FB9F9' textColor='white' className='mr-2' id='myth' onPress={() => { setIsMythClicked(true); setIsFactClicked(false); setisCorrect('Correct'); }}
                                                    mode='contained-tonal' disabled={isFactClicked}>Myth</Button>
                                                
                                                <Button buttonColor='#F2CF8C' id='fact' className='ml-3' onPress={() => { setIsFactClicked(true); setIsMythClicked(false); setisCorrect('Incorrect'); }}
                                                    mode='contained' disabled={isMythClicked}>Fact</Button>

                                            </View>

                                            {(isCorrect !== null && (isMythClicked || isFactClicked)) ? (
                                                <View>
                                                    <Text className=' m-auto pb-4 pt-6 font-interSBold items-center'>{isCorrect}</Text>
                                                    {/* <ScrollView showsVerticalScrollIndicator> */}
                                                    <Text className='mb-4'>{mf.explanation}</Text>
                                                    {/* </ScrollView> */}
                                                </View>
                                            ) : <Text></Text>}
                                            
                                        </View>
                                    </Modal>
                                </Portal>
                            )}
                        </View>
                    )
                })
            }
        </View>

    )
}

export default FeaturedMF;


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
});