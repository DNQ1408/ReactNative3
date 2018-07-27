import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class ItemDish extends Component {
    state = { }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dish}>
                    <Image source={{ uri: this.props.dish.image }} style={styles.image} />
                    <Text style={styles.title}>{this.props.dish.title}</Text>
                    <View style={styles.rate}>
                        {Array.from(new Array(this.props.dish.rate)).map(item =>
                            <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALoSURBVGhD7Vg9axRRFB1RlIg2IlZbyWZnsoIKQVEb/0ewEcEf4B8QhCCCYicR7MQPViyiIUgaG012JmsnFhYiWIogFjaS9zz3eSaOu3fdjfPeOgtz4JCZefeec97b+cpENWrUCAeTJmeF3J0+IPyqkLvTBZO1TtkssULZ5uHpgcnild8TiFd4eDpgu8k8Th2zPQHZxjEOVx8IvJyHL0ximcPVhk3bJ4urX5iAkTGWVRcmjZ/2h88pYyyrJsxG67i2+jllTGpYXj0gZKc/tMIOy6sFk84dwwpvKYH/oNRILduqA5zfD7XAGqWWbdWA7bWScVY/p6tFD9snC/P66BE8Wc+BFxFkEYE6WNGP/SFHkT3oTRadlmhCmzblYNbbh0w3OYN3mAsQvgazRyZLNm2afO0P4p3wEK9fnvCWDJIFmRhvOLgaX1ThClCySUbGHYTtze/H7F9ozVWgy4aMjKvDvG/uw0yfawL/k5JJsjHm32HftvfiHBz6SjBpuizIxHjjwb48v0cuJE1wknQZkIWxdgbbiXbjormvCU+CzhsZGOff4CaRxfc0g5B0nmXD57A22oU7wB3NKASdFzxp7wduEml8WzP0SefhO3wR+GlvaMY+KNq0CQus0mMtQBmKJuXDA3eHJ1qIMhRNyocHLrJ3WogyFE3KhwVfNX5oIcpQNMd+VSgD0509oQXwQdGmTTjgYlvQzH1QtGkTDvipr2vmPijatAkH3C2eaeY+KNq0CQfcLT5o5v1E3Sf8vSzktlpXpGjTJgzwTn4AqzT0y5sQ45/BK2a9McM2/I/dmHHHMKb15HTa8GCbf5jN2dOasRCr9w28al7FB1k+ABlzNajVNITiwXL/MN25SwOGWfIdvGl7rcMsGwmplR7pHdCDB8v8A3eJW9tG8uBJ47um22xweMeQXqdReDCKB4f9A2ZrOE+3sHIPzJt2k4dLQ7ScpvtuGq/xsH/AYCnk53F+nl/ibo0aNUYiin4CU7bYk7e+dvAAAAAASUVORK5CYII=' }}
                                style={styles.star} />
                        )}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dish: {
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 10,
        height: 170,
        width: 170,
        borderRadius: 15
    },
    rate: {
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.8,
        flexDirection: 'row'
    },
    star:{
        height:20,
        width:20
    },
    title: {
        marginTop: 5,
        fontSize: 16
    }
})

export default ItemDish;