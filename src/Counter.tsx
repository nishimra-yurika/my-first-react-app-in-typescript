import React, {useEffect,useRef,useState} from 'react';


const Counter: React.FC<{}>= () => {
  const initialValue: any = 0;
  const [value,setValue] = useState<number>(initialValue);

  const increment = ()=>{
    setValue((prevState) => prevState+1);
  };

  const decrement = ()=>{
    setValue((prevState)=>(prevState-1));
  };

  const renderTimes = useRef <number>(0);
  useEffect(()=>{
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null);
  const focsInput = () =>{
    ref.current?.focus();
  };

  return (
    <div>
      <div> value: {value} </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div> This component was re-rendering {renderTimes.current} times!</div>
      <input ref={ref} type="text"/>
      <button onClick={focsInput}>Click Me!</button>
    </div>
  );
};
  
export default Counter;