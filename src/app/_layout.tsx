import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const [isLogin,setIsLogin]=useState(false);
  useEffect(()=>{
    SplashScreen.hideAsync();
  },[])
  return (
   <>
   <Stack/>
   {isLogin ?(<Redirect href={"/(main)"}/>)
   :
   (<Redirect href={"/(auth)"}/>)
  }
   </>
  )
}
export default RootNavigation
