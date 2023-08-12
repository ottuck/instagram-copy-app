// import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { Entypo } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// // 스토리보드 가데이터
// const storyInfo = [
//     {
//         id: 1,
//         name: 'john',
//         image: require('../../assets/images/userProfile.jpeg')
//     },
//     {
//         id: 2,
//         name: 'tony',
//         image: require('../../assets/images/profile1.jpeg')
//     },
//     {
//         id: 3,
//         name: 'kan',
//         image: require('../../assets/images/profile2.jpeg')
//     },
//     {
//         id: 4,
//         name: 'July',
//         image: require('../../assets/images/profile3.jpeg')
//     },
//     {
//         id: 5,
//         name: 'daniel',
//         image: require('../../assets/images/profile4.jpeg')
//     },
//     {
//         id: 6,
//         name: 'Happy',
//         image: require('../../assets/images/profile5.jpeg')
//     }
// ]

// const Stories2 = () => {
//     const navigation = useNavigation();

//     return (
//         <ScrollView
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             style={{ paddingVertical: 20 }}
//         >
//             {storyInfo.map((data, index) => {
//                 return (
//                     <TouchableOpacity
//                         key={index}
//                         // 누르면 'Status' 값과 name, imaage를 가지고 이동하게 
//                         onPress={() => navigation.push('Status', {
//                             name: data.name,
//                             image: data.image,
//                         })}
//                     >
//                         <View style={styles.storyIconContainer}>
//                             {data.id === 1 ? (
//                                 <View style={styles.storyIconPlusButton}>
//                                     <Entypo name="circle-with-plus"
//                                         style={styles.storyPlusButton} />
//                                 </View>
//                             ) : null}
//                             <View style={styles.storyIconCircle}>
//                                 <Image source={data.image}
//                                     style={styles.storyImage} />
//                             </View>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//                 )
//             })}
//         </ScrollView>
//     )
// }
// export default Stories2;

// const styles = StyleSheet.create({
//     storyIconContainer: {
//         flexDirection: 'column',
//         paddingHorizontal: 8,
//         position: 'relative'
//     },
//     storyIconPlusButton: {
//         position: 'absolute',
//         bottom: 15,
//         right: 10,
//         zIndex: 1,
//         borderRadius: 10,
//         overflow: 'hidden'
//     },
//     storyPlusButton: {
//         fontSize: 20,
//         color: 'blue',
//         backgroundColor: 'white',
//         borderRadius: 100,
//     },
//     storyIconCircle: {
//         width: 68,
//         height: 68,
//         backgroundColor: 'white',
//         borderRadius: 100,
//         borderWidth: 1.8,
//         borderColor: '#c13584',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     storyImage: {
//         resizeMode: 'cover',
//         width: '92%',
//         height: '92%',
//         borderRadius: 100,
//         borderColor: 'orange'
//     }
// })