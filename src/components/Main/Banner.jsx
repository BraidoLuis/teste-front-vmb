import Bannersite from '../../assets/Banner.svg';

export default function Banner() {
    return (
        <div className='flex-1 flex justify-center'>
            <img src={Bannersite} alt="Vambora Logo" className="w-full h-[750px] object-cover"/> 
        </div>
    );
}