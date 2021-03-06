import React, { Component } from 'react';
import {
  Text,
  View,
  SectionList,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native';
import ItemDish from '../components/ItemDish';
import ItemCategory from '../components/ItemCategory';

import { menu } from '../db.json';

class CategoryScreen extends Component {
  state = {}
  _renderItem = ({ item }) => <ItemDish dish={item} />
  _renderSectionHeader = ({ section: { category } }) => <ItemCategory category={category} />
  render() {
    return (
      <ImageBackground source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.container}>
        <SectionList
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={menu}
          keyExtractor={(item) => item.title}
        />
      </ImageBackground>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    width: width,
    height: height
  }
})

export default CategoryScreen;