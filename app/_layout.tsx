import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import tw from 'twrnc'


// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

   const colorScheme = useColorScheme();

  return (
     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{
          title:"Home",
          headerTitleAlign:'center',
          headerShown:false
        }}/>
         <Stack.Screen name="nhapThongTin" options={{
          title:"Nhập thông tin",
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#0099ff'
          },
          headerTitleStyle:{
            color:"white"
          }
         
        }}/>

        <Stack.Screen name="phepTinh" options={{
          title:"Phép tính",
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#0099ff'
          },
          headerTitleStyle:{
            color:"white"
          }
         
        }}/>
         
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
       
      </Stack>
     </ThemeProvider>
  );
}
