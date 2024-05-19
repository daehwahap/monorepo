import {bridge, createWebView} from '@webview-bridge/react-native';

// Register functions in the bridge object in your React Native code
export const appBridge = bridge({
  async getMessage() {
    return "Hello, I'm native";
  },
  async bridgeTest(data: string) {
    return 'aaaaaa';
  },
});

export const {WebView} = createWebView({
  bridge: appBridge,
  debug: true, // Enable console.log visibility in the native WebView
  fallback: method => {
    console.warn(`Method '${method}' not found in native`);
  },
});

export type AppBridge = typeof appBridge;
