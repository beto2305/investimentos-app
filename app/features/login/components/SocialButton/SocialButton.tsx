import {
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";

/**
 * Local Imports
 */
import styles from "./SocialButton.style";

type SocialButtonProps = {
  imageSource: ImageSourcePropType;
  onPress(): void;
};

export const SocialButton = ({ onPress, imageSource }: SocialButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.iconImageStyle}
        resizeMode="contain"
        source={imageSource}
      />
    </TouchableOpacity>
  );
};
