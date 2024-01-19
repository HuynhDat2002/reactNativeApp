import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Button } from '@rneui/themed'
import { useFormik } from 'formik'
import * as yup from 'yup'
const PhepTinh = () => {
  const [result, setResult] = useState(0)
  const formik = useFormik({
    initialValues: {
      first: 0,
      second: 0,
    },
    validationSchema: yup.object().shape({
      first: yup.number().required("Không được bỏ trống").typeError(' Kiểu dữ liệu phải là số'),
      second: yup.number().required("Không được bỏ trống").typeError("Kiểu dữ liệu phải là số"),
    }),
    onSubmit: (values) => {
      console.log('first ', values.first)
    }
  })


  return (
    <View style={tw`bg-white h-[100%]`}>
      <View style={tw`mt-10 gap-2 mx-5`}>
        <TextInput
          style={tw`border p-2 border-[#0099ff] rounded-md`}
          placeholder='Số thứ nhất'
          onChangeText={formik.handleChange('first')}
          onBlur={formik.handleBlur('first')}
        />
        <Text style={tw`text-red-500 mx-5`}>{formik.touched.first && formik.errors.first}</Text>
        <TextInput
          style={tw`border p-2 border-[#0099ff] rounded-md`}
          placeholder='Số thứ hai'
          onChangeText={formik.handleChange('second')}
          onBlur={formik.handleBlur('second')}
        />
        <Text style={tw`text-red-500 mx-5`}>{formik.touched.second && formik.errors.second}</Text>
        <Text>Kết quả: {result}</Text>
        <View style={tw`flex flex-row gap-2 justify-center mt-3 mx-5`}>
          <View style={tw`basis-1/4`}>
            <Button
              buttonStyle={tw`bg-[#993366] text-white font-bold mt-5 rounded-full`}
              titleStyle={tw`font-semibold text-xl`}
              onPress={() => setResult(((formik.values.first/10+formik.values.second/10)*10))}
              icon={{
                name: "plus",
                type: "font-awesome",
                color: "white"
              }}
            />
          </View>
          <View style={tw`basis-1/4`}>
            <Button
              buttonStyle={tw`bg-[#993366] text-white font-bold mt-5 rounded-full `}
              titleStyle={tw`font-semibold text-xl`}
              onPress={() =>setResult(formik.values.first-formik.values.second)}
              icon={{
                name: "minus",
                type: "font-awesome",
                color: "white"
              }}
            />
          </View>
          <View style={tw`basis-1/4`}>

            <Button
              buttonStyle={tw`bg-[#993366] text-white font-bold mt-5 rounded-full`}
              titleStyle={tw`font-semibold text-xl`}
              onPress={() => setResult(formik.values.first*formik.values.second)}
              icon={{
                name: "times",
                type: "font-awesome",
                color: "white"
              }}
            />
          </View>
          <View style={tw`basis-1/4`}>

            <Button
              buttonStyle={tw`bg-[#993366] text-white font-bold mt-5 rounded-full`}
              titleStyle={tw`font-semibold text-xl`}
              onPress={() =>setResult(formik.values.first/formik.values.second)}
              icon={{
                name: "divide",
                type: "font-awesome-5",
                color: "white"
              }}
            />
          </View>
        </View>

      </View>
    </View>
  )
}

export default PhepTinh