# react-native-loading-controller

A customizable loading controller for react-native

## Installation

```sh
npm install react-native-loading-controller
```

## Usage

```tsx
import { LoadingController } from 'react-native-loading-controller';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>This is a demo of the LoadingController</Text>
			<LoadingController show={true} />
		</View>
	);
}
```

## Props
```ts
 interface Props {
  show: boolean;
  loadingText?: string;
  backgroundOverlayColor?: string;
  backgroundColor?: string;
  indicatorSize?: "large" | "small";
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  loadingPaddingView?: number;
  borderRadius?: number;
  loadingTextMargin?: string;
  indicatorColor?: string;
  loaderContentDirection?: "row" | "column" | "row-reverse" | "column-reverse";
}
 ```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
