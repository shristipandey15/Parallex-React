import { Parallax } from 'react-parallax';
import Satellite from '../images/satellite.jpg'
const ImageThree = () => (
    <Parallax className='image' bgImage={Satellite}  strength={600}>
        <div className="content">
            <span className='img-txt'>
                a trip to nasa
            </span>
        </div>
    </Parallax>
);
export default ImageThree;