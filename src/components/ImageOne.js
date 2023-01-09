import { Parallax } from 'react-parallax';
import Moon from '../images/moon.jpg'
const ImageOne = () => (
    <Parallax className='image' bgImage={Moon}  strength={400}>
        <div className="content">
            <span className='img-txt'>
                a trip to nasa
            </span>
        </div>
    </Parallax>
);
export default ImageOne;