import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const data = new Array(50);

class App extends Component {
    keyExtractor = (item, index) => {
        return index;
    };

    componentDidMount() {
        const apiUrl =
            'https://script.google.com/macros/s/AKfycbyAt0P51_kpSkiQSn369oSLcmZUMtAWgEPvWVFcghh2UemYnr4/exec';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {

            })
            .catch((e) => {
                console.log({e});
            });
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <View style={styles.textContainer}>
                    <Text style={styles.message} numberOfLines={2}>
                        message
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <FlatList
                    inverted
                    showsVerticalScrollIndicator={false} // does not work
                    contentContainerStyle={styles.container}
                    data={data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    message: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
    },
});

export default App;
