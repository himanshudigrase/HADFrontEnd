import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper'

//const image = require('../assets/images/mfs.png').toString();
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
       // console.log('showning modal of ' + image);
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

        <View className='flex flex-row w-full flex-wrap m-2 pr-4 justify-evenly'>
            {

                mfs.map((mf, index) => {

                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => handleImagePress(mf.id)}>
                                <Image className='w-16 h-16 mt-2 mb-2 '
                                   style={{borderWidth:1,borderColor:'black'}} source={require('../assets/images/mfs.png')}
                                />
                            </TouchableOpacity>
                            {selectedImage === mf.id && (
                                <Portal className=''>
                                    <Modal visible={modalVisible} onDismiss={handleModalClose} className=''>
                                        <View style={styles.modalContent} className='items-center '>
                                            <Text className=' pb-6 text-textColor font-interLight'>Myth or Fact ?</Text>
                                            <Text className='text-textColor font-interRegular pb-4'>{mf.question}</Text>
                                            <View className='flex-row items-center '>
                                                <Button className='backgroundColor-grey mr-3' id='myth' onPress={() => { setIsMythClicked(true); setIsFactClicked(false); setisCorrect('Correct'); }}
                                                  mode='contained-tonal'  disabled={isFactClicked}>Myth</Button>
                                                <Text>-or-</Text>
                                                <Button id='fact' className='ml-3' onPress={() => { setIsFactClicked(true); setIsMythClicked(false); setisCorrect('Incorrect'); }}
                                                  mode='contained-tonal'  disabled={isMythClicked}>Fact</Button>

                                            </View>
                                            
                                            {(isCorrect !== null && (isMythClicked || isFactClicked)) ? (
                                                <View>
                                                    <Text className=' m-auto pb-4 pt-4 font-interSBold items-center'>{isCorrect}</Text>
                                                    {/* <ScrollView showsVerticalScrollIndicator> */}
                                                        <Text className='mb-4'>{mf.explanation}</Text>
                                                    {/* </ScrollView> */}
                                                </View>
                                            ) : <Text></Text>}
                                            <Button mode='outlined' onPress={hideModal}>Close</Button>
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