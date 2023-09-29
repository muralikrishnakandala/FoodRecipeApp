import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image} from "react-native"
import { categoryData } from '../constants/DummyData'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import Animated,{FadeInDown} from "react-native-reanimated"
import { CachedImage } from '../helpers/Images'

interface Icategories {
    activeCategory: string;
    handleChangeCategory: React.Dispatch<React.SetStateAction<string>>;
    categories:any
}

function Categories({activeCategory, handleChangeCategory, categories}:Icategories) {
    
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
        contentContainerStyle={{paddingHorizontal:15}}
        >

        {categories.map((cat:any, index:number)=>{

            let isActive = cat.strCategory === activeCategory
            let activeButtonClass = isActive ? ' bg-amber-400': ' bg-black/10'

            return(
                <TouchableOpacity key={index} className='flex items-center space-y-1'
                onPress={()=>handleChangeCategory(cat.strCategory)}
                >
                    <View className={'rounded-full p-[6px]' + activeButtonClass} >                    
                    {/* <Image source={{uri: cat.strCategoryThumb}} style={{width: hp(6), height: hp(6)}}
                    className='rounded-full'
                    />                     */}

                    <CachedImage
                    uri= {cat.strCategoryThumb} style={{width: hp(6), height: hp(6)}}
                    className='rounded-full'
                    />

                    </View>
                    <Text className='text-neutral-600' style={{fontSize: hp(1.6)}}>{cat.strCategory}</Text>                
                </TouchableOpacity>
            )
        })}

        </ScrollView>
    </Animated.View>
  )
}

export default Categories