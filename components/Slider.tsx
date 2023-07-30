import { Carousel, CarouselProps } from '@mantine/carousel';
import { BackgroundImage } from '@mantine/core';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import { useMemo, useRef } from 'react';

type BackgroundImageSliderProps = {
    isControls?: CarouselProps['withControls'];
    isAutoPlay?: boolean;
    delay?: AutoplayOptionsType['delay'];
    images: string[];
};

export const BackgroundImageSlider = ({
    isControls = false,
    isAutoPlay = true,
    delay = 5000,
    images,
}: BackgroundImageSliderProps) => {
    const autoplay = useRef(Autoplay({ delay }));

    const plugins: any = useMemo(() => {
        return [isAutoPlay && autoplay.current];
    }, []);

    return (
        <Carousel withControls={isControls} plugins={plugins}>
            {images.map((src, index) => (
                <Carousel.Slide key={`BackgroundImageSlider-${index}`}>
                    <BackgroundImage
                        src={src}
                        sx={{
                            backgroundSize: 'cover',
                            paddingTop: 'min(100vh, 75%)',
                        }}
                    />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};
