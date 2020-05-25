import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';

//@ts-ignore
const LoadingController = ({ visible }) => (
	<Modal visible={visible} transparent>
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<View
				style={{
					padding: 25,
					backgroundColor: 'white',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<ActivityIndicator size="large" />
					<Text>Loading</Text>
				</View>
			</View>
		</View>
	</Modal>
);

export default LoadingController;
