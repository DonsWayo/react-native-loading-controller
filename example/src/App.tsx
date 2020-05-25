import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LoadingController } from 'react-native-loading-controller';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>This is a demo of the LoadingController</Text>
			<LoadingController show={true} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
