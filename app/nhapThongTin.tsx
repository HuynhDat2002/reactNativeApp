import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useFormik } from 'formik'
import * as yup from "yup";
import { Button } from '@rneui/themed';

const nhapThongTin = () => {
    const [hoTen, setHoten] = useState('');
    const [mssv, setMssv] = useState('');
    const [nhom, setNhom] = useState('');

    const formik = useFormik({
        initialValues: {
            hoTen: "",
            mssv: "",
            nhom: ""
        },
        validationSchema: yup.object().shape({
            hoTen: yup.string().required("Không được bỏ trống"),
            mssv: yup.string().required("Không được bỏ trống"),
            nhom: yup.number().required("Không được bỏ trống").typeError("Nhóm có kiểu dữ liệu là số"),
        }),
        onSubmit: (values) => {
                setHoten(values.hoTen),
                setMssv(values.mssv),
                setNhom(values.nhom)
        }

    })
    console.log('hoten: ', hoTen);
    console.log('mssv: ', mssv);
    console.log('nhom: ', nhom);

    return (
        <View style={tw`bg-white h-[100%]`}>
            <View style={tw`mt-10`}>

                <Text style={tw`flex justify-center mb-5 text-xl`}>Nhập thông tin sinh viên</Text>
                <View style={tw`gap-3`}>

                    <TextInput
                        style={tw`border p-2 border-[#0099ff] rounded-md mx-5`}
                        placeholder='Họ và tên'
                        onChangeText={formik.handleChange('hoTen')}
                        onBlur={formik.handleBlur('hoTen')}
                        value={formik.values.hoTen}
                    />
                    <Text style={tw`text-red-500 mx-5`}>{formik.touched.hoTen && formik.errors.hoTen}</Text>

                    <TextInput
                        style={tw`border p-2 border-[#0099ff] rounded-md mx-5`}
                        placeholder='Mã số sinh viên'
                        onChangeText={formik.handleChange('mssv')}
                        onBlur={formik.handleBlur('mssv')}
                        value={formik.values.mssv}
                    /> 
                    <Text style={tw`text-red-500 mx-5`}>{formik.touched.mssv && formik.errors.mssv}</Text>

                    <TextInput
                        style={tw`border p-2 border-[#0099ff] rounded-md mx-5`}
                        placeholder='Nhóm'
                        onChangeText={formik.handleChange('nhom')}
                        onBlur={formik.handleBlur('nhom')}
                        value={formik.values.nhom}
                    />
                    <Text style={tw`text-red-500 mx-5`}>{formik.touched.nhom && formik.errors.nhom}</Text>
                    <Button
                        buttonStyle={tw`bg-[#993366] text-white font-bold mt-5 rounded-full w-[30%] mx-auto`}
                        titleStyle={tw`font-semibold text-xl`}
                        title='Submit'
                        onPress={()=>formik.handleSubmit()}
                    />
                        
                </View>
            </View>
        </View>
    )
}

export default nhapThongTin