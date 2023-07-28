declare module 'react-native-image-slider-box' {
    interface SliderBoxProps {
      images: string[];
      dotColor?: string;
      inactiveDotColor?: string;
      ImageComponentStyle?: object;
      autoplay?: boolean;
      circleLoop?: boolean;
      // Add more props if needed...
    }
  
    export class SliderBox extends React.Component<SliderBoxProps> {}
  }