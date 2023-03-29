import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App'
import {name as appName} from './app.json'
import { makeServer } from "./server";

if (
  process.env.NODE_ENV === "development" &&
  typeof makeServer === "function"
) {
  makeServer({ environment: "development" });
}



AppRegistry.registerComponent(appName,()=> App);