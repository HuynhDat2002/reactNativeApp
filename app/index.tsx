import { View, Text, Image } from 'react-native'
import {Button} from '@rneui/themed'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
const HomeScreen = () => {
  const router = useRouter()
  return (
    <View style={tw`bg-white h-[100%]`}>

      <View style={tw`flex gap-3 my-auto`}>
        <Text style={tw`flex justify-center items-center text-red-600 font-bold`}>Học viện Bưu Chính Viễn Thông</Text>
        <Image style={tw`w-[100%]`} source={require('../images/hvcnbcvt.jpg')} />
        <Text style={tw`flex justify-center items-center text-[#0099ff] font-semibold`}>Nhóm 06</Text>
        <View style={tw`flex flex-row flex-wrap gap-2 justify-center mt-3`}>  
          <Button buttonStyle={tw`bg-[#0099ff]`} title='Nhập thông tin' onPress={()=>router.push('/nhapThongTin')}/>
          <Button buttonStyle={tw`bg-[#0099ff]`} title='Phép tính' onPress={()=>router.push('/phepTinh')} />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen