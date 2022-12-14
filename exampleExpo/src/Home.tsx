/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import AdvancedParallaxComponent from "./advanced-parallax";
import AnimTabBarComponent from "./anim-tab-bar";
import BlurParallax from "./blur-parallax";
import Circular from "./circular";
import ComplexComponent from "./complex";
import Cube3D from "./cube-3d";
import Curve from "./curve";
import Flow from "./flow";
import Fold from "./fold";
import HeaderCarouselComponent from "./header-carousel";
import LeftAlignComponent from "./left-align";
import MarqueeComponent from "./marquee";
import MultipleComponent from "./multiple";
import NormalComponent from "./normal";
import ParallaxComponent from "./parallax";
import ParallaxLayers from "./parallax-layers";
import PauseAdvancedParallaxComponent from "./pause-advanced-parallax";
import PressSwipe from "./press-swipe";
import RotateInOutComponent from "./rotate-in-out";
import RotateScaleFadeInOutComponent from "./rotate-scale-fade-in-out";
import ScaleFadeInOutComponent from "./scale-fade-in-out";
import StackComponent from "./stack";
import StackCards from "./stack-cards";
import Tear from "./tear";
import { isAndroid, isIos } from "./utils";

// Not support to WEB (react-native-snap-carousel)
const SnapCarouselComplexComponent = React.lazy(
  () => import("./snap-carousel-complex"),
);
const SnapCarouselLoopComponent = React.lazy(
  () => import("./snap-carousel-loop"),
);

export const LayoutsPage = [
  {
    name: "Normal",
    page: NormalComponent,
  },
  {
    name: "Parallax",
    page: ParallaxComponent,
  },
  {
    name: "Stack",
    page: StackComponent,
  },
  {
    name: "LeftAlign",
    page: LeftAlignComponent,
  },
  {
    name: "HeaderCarousel",
    page: HeaderCarouselComponent,
  },
];

export const CustomAnimations = [
  {
    name: "Curve",
    page: Curve,
  },
  {
    name: "BlurParallax",
    page: BlurParallax,
  },
  {
    name: "Cube3D",
    page: Cube3D,
  },
  {
    name: "PressSwipe",
    page: PressSwipe,
  },
  {
    name: "Tear",
    page: Tear,
  },
  {
    name: "StackCards",
    page: StackCards,
  },
  {
    name: "Fold",
    page: Fold,
  },
  {
    name: "Circular",
    page: Circular,
  },
  {
    name: "Flow",
    page: Flow,
  },
  {
    name: "ParallaxLayers",
    page: ParallaxLayers,
  },
  {
    name: "AdvancedParallax",
    page: AdvancedParallaxComponent,
  },
  {
    name: "PauseAdvancedParallax",
    page: PauseAdvancedParallaxComponent,
  },
  {
    name: "ScaleFadeInOut",
    page: ScaleFadeInOutComponent,
  },
  {
    name: "RotateInOut",
    page: RotateInOutComponent,
  },
  {
    name: "RotateScaleFadeInOut",
    page: RotateScaleFadeInOutComponent,
  },
  {
    name: "AnimTabBar",
    page: AnimTabBarComponent,
  },
  {
    name: "Marquee",
    page: MarqueeComponent,
  },
  {
    name: "Multiple",
    page: MultipleComponent,
  },
];

export const OtherPage = [
  {
    name: "Complex",
    page: ComplexComponent,
  },
];

if (isIos || isAndroid) {
  OtherPage.push(
    {
      name: "SnapCarouselComplex",
      // @ts-expect-error
      page: SnapCarouselComplexComponent,
    },
    {
      name: "SnapCarouselLoop",
      page: SnapCarouselLoopComponent,
    },
  );
}

const Index = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ScrollView
      style={{ flex: 1 }}
      stickyHeaderIndices={[
        0,
        LayoutsPage.length + 1,
        LayoutsPage.length + CustomAnimations.length + 2,
      ]}
    >
      <View style={styles.section}>
        <Text style={styles.sectionText}>{"Layouts"}</Text>
      </View>
      {LayoutsPage.map(({ name }, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => navigation.navigate(name)}
          >
            <View style={styles.listItem}>
              <Text style={styles.text}>{name}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
      <View style={styles.section}>
        <Text style={styles.sectionText}>{"CustomAnimations"}</Text>
      </View>
      {CustomAnimations.map(({ name }, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => navigation.navigate(name)}
          >
            <View style={styles.listItem}>
              <Text style={styles.text}>{name}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
      <View style={styles.section}>
        <Text style={styles.sectionText}>{"Others"}</Text>
      </View>
      {OtherPage.map(({ name }, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => navigation.navigate(name)}
          >
            <View style={styles.listItem}>
              <Text style={styles.text}>{name}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  listItem: {
    alignItems: "flex-start",
    borderColor: "#e8ecf0",
    borderBottomWidth: 0.5,
    padding: 16,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#e8ecf0",
  },
  sectionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
