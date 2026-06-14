import { Card } from '@heroui/react';
import React from 'react';

const Tips = () => {
    return (
        <div className='bg-pink-200 rounded-2xl mt-[90px]'>
            <p className='text-[35px] font-bold pt-[30px] flex justify-center'>Summer Care Tips</p>
        <div className='grid grid-cols-3 gap-[40px] p-[30px]'>
                        <Card>
            <ul>
  <li className='text-[25px] text-pink-400 font-semibold'>💧Stay Hydrated</li>
  <li>• Drink plenty of water throughout the day to avoid dehydration.</li>
  <li>• Carry a water bottle when going outside.</li>
  <li>• Add fresh fruits or natural drinks for extra hydration.</li>
  <li>• Drink more fluids after outdoor activities.</li>
</ul></Card>
    <Card>
<ul>
  <li className='text-[25px] text-pink-400 font-semibold'>☀️Protect Your Skin </li>
  <li>• Apply sunscreen before going outdoors.</li>
  <li>• Choose sunscreen with proper SPF protection.</li>
  <li>• Wear sunglasses and use umbrellas during strong sunlight.</li>
  <li>• Keep your skin moisturized to prevent dryness.</li>
</ul>
    </Card>
    <Card>
        <ul>
  <li className='text-[25px] text-pink-400 font-semibold'>🍉Eat Fresh & Light </li>
  <li>• Include seasonal fruits and vegetables in your meals.</li>
  <li>• Choose lighter foods that are easier to digest in hot weather.</li>
  <li>• Avoid too much oily and heavy food during summer.</li>
  <li>• Add refreshing drinks and healthy snacks to your routine.</li>
</ul>
    </Card>
    <Card>
<ul>
  <li className='text-[25px] text-pink-400 font-semibold'>❄️Keep Yourself Cool </li>
  <li>• Wear lightweight and breathable clothes.</li>
  <li>• Use fans, cooling products, or cold towels when needed.</li>
  <li>• Avoid staying under direct sunlight for long periods.</li>
  <li>• Take regular shower to cool down your body.</li>
</ul>
    </Card>
    <Card>
<ul>
  <li className='text-[25px] text-pink-400 font-semibold'>🌙Maintain Proper Sleep</li>
  <li>• Try to sleep at least 7–8 hours daily.</li>
  <li>• Avoid staying up late in hot weather.</li>
  <li>• Use light bedding and keep the room cool.</li>
  <li>• A good sleep helps your body stay hydrated and energetic.</li>
</ul>
    </Card>
    <Card>
<ul>
  <li className='text-[25px] text-pink-400 font-semibold'>🧊Prevent Heat Exhaustion </li>
  <li>• Avoid going out during peak sunlight hours (12 PM – 4 PM).</li>
  <li>• Take breaks if you are working or traveling outside.</li>
  <li>• Drink water or ORS regularly in extreme heat.</li>
  <li>• Rest in a cool or shaded place if you feel dizzy or weak.</li>
</ul>
    </Card>
        </div>
        </div>
    );
};

export default Tips;