import React from 'react';
import {View,StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DashHeader} from '_molecules/dashboard';
import {DashFooter} from '_molecules/dashboard';
import {DashBody} from '_molecules/dashboard';

const DashBoard = () => {
        return (
                <View style={styles.container}>
                    <ScrollView>
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