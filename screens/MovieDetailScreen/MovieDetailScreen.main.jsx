import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  /* TODO: Configure this screen to have an image and appropriate text describing the movie. 
      See the example on the spec for design inspiration.
      Feel free to use the styles below. */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Image
          style={{ width: 216, height: 320 }}
          source={{ uri: route.params.posterurl }}
        />
        <Text styles={styles.h1}>{route.params.title}</Text>
        <Text styles={styles.h2}>Released {route.params.year}</Text>
        <Text styles={styles.h2}>{route.params.genres}</Text>
        <Text styles={styles.h2}>{route.params.actors}</Text>
        <Text styles={styles.h4}>{route.params.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
