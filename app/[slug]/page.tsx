import Image from 'next/image'
import img from '@/../public/scenery-1.jpg'
import dpImg from '@/../public/boy.png'
import Menu from '../components/Menu'
import Comments from '../components/Comments'

const SinglePage = () => {
  return (
    <div>
      <div className='flex flex-col-reverse sm:flex-row'>
        <div className='flex flex-col justify-between pr-3'>
        <div className='font-bold texl-xl sm:text-2xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        <div className='lg:flex hidden'>
            <div className='w-[30px] h-[30px] mr-3 mt-2'>
            <Image src={dpImg} alt='image' className='rounded-full w-full h-full'/>
            </div>
            <div className='flex flex-col justify-center'>
            <div className="font-semibold text-xs">Paul Carter</div>
                <div className='text-[10px] text-gray-800'>16.04.2019</div>
            </div>
        </div>
        </div>
        <div className='sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]'><Image src={img} alt='image' className='rounded-md'/></div>
      </div>
      <div className='flex justify-between py-3'>
        <div className='sm:w-[70%]'>
          <div className='text-gray-900 text-sm'>
            <h5>Psum dolor sit, amet consectetur adipisicing elit.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi voluptatum ullam! Eius nisi mollitia laborum ullam, facere a? Alias accusamus ab dolorem officia illum atque consequuntur impedit beatae quidem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi voluptatum ullam! Eius nisi mollitia laborum ullam, Lorem ipsum dolor, sit amet consectetur adipisicing. floremacere a? Alias accusamus ab dolorem officia illum atque consequuntur impedit beatae quidem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi voluptatum ullam! Eius nisi mollitia laborum ullam, Lorem ipsum dolor, sit amet consectetur adipisicing. floremacere a? Alias accusamus ab dolorem officia illum atque consequuntur impedit beatae quidem.</p>
        <div className='flex lg:hidden my-5'>
            <div className='w-[30px] h-[30px] mr-3 mt-2'>
            <Image src={dpImg} alt='image' className='rounded-full w-full h-full'/>
            </div>
            <div className='flex flex-col justify-center'>
            <div className="font-semibold text-xs">Paul Carter</div>
                <div className='text-[10px] text-gray-800'>16.04.2019</div>
            </div>
        </div>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
