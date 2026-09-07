import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedProps
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SIZE = 70;
const STROKE_WIDTH = 5;

const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Props = {
  duration?: number;
  progressIndex: number
};

export default function CircularProgress({
  duration = 5000, progressIndex
}: Props) {
//   const progress = useSharedValue(0);

//   useEffect(() => {
//     progress.value = 0;

//     progress.value = withTiming(1, {
//       duration,
//     });

//     return () => {
//       cancelAnimation(progress);
//     };
//   }, [duration]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset:
        CIRCUMFERENCE -
        CIRCUMFERENCE * progressIndex,
    };
  });

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        {/* Background ring */}
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={STROKE_WIDTH}
          fill="none"
        />

        {/* Animated progress */}
        <AnimatedCircle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#fff"
          strokeWidth={STROKE_WIDTH}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          animatedProps={animatedProps}
          strokeLinecap="round"
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
});