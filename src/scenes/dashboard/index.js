import React from 'react';
import {View,StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DashHeader} from '_molecules/dashboard';
import {DashFooter} from '_molecules/dashboard';
import {DashBody} from '_molecules/dashboard';
import {useNetInfo} from '@react-native-community/netinfo';
import {CheckInternet} from '_atoms';

const DashBoard = () => {
        const netInfo = useNetInfo();
        return (
                <View style={styles.container}>
                    <ScrollView>
                        {!netInfo.isConnected ?  <CheckInternet/> : null}
                       <DashHeader/>
                        <DashBody/>
                        <DashFooter />
                    </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
            flex : 1,
            backgroundColor : 'black',
    }
    });

export default DashBoard;