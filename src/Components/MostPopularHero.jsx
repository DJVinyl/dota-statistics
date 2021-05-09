import {useState} from 'react';
import heroStats from '../Data/heroStats.json'
import BarChart from './BarChart'

export default function MostPopularHero() {

  const turboPicks = heroStats.map((hero, index) => {
      return {
        name: hero.localized_name, 
        picks: hero.turbo_picks,
        index: index
      };
  })

  const testArr  = [];
  for(let i = 0; i < 10; i++){
    testArr.push(turboPicks[i]);
  }
  console.log(testArr);

  return (
    <div>
      <span className="label">Bar SVG</span>
      <BarChart
        data={testArr}
        width={1200}
        height={600}
        top={10}
        bottom={30}
        left={50}
        right={0}
      />
    </div>
  );
}
