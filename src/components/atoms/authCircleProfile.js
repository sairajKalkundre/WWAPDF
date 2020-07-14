import React from 'react';
import {Avatar}from 'react-native-paper';

const ProfileImage = (props) => {
    return (
        <Avatar.Image size = {90} source = {props.source} style = {props.style} />
    )
}

export default ProfileImage;