import { Parallax } from 'react-parallax';
import Nasa from '../images/nasa.jpg'
const ImageTwo = () => (
    <Parallax className='image' bgImage={Nasa}  strength={600}>
        <div className="content">
            <span className='img-txt'>
                a trip to nasa
            </span>
        </div>
    </Parallax>
);
export default ImageTwo;