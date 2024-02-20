import React, { useEffect, useRef, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export const Timer = () => {
    const[time,setTime]=useState(null)
    const[clockRunning,setClockRunning]=useState(true)
    const[reset,setReset]=useState(false)
    const[value,setValue]=useState(0)
    const currentValue=useRef()
    const[toggle,setToggle]=useState(false)


    useEffect(() => {
      if(time===0){
        setReset(false)
        clearInterval(currentValue.current)
        alert('Completed')
        setToggle(false)
      }
      if(time<0){
        setReset(false)
        clearInterval(currentValue.current)
        alert('Negative Timer not allowed')
        setToggle(false)
      }
    }, [time])
    

    const handleTimer=()=>{
        setClockRunning(true)
        setReset(true)
        //console.log(clockRunning)
        if(clockRunning){
            setTime(value)
        }
        currentValue.current=setInterval(()=>setTime(prevTime=>prevTime-1),1000)
        setToggle(true)
    }
    const handlePause=()=>{
        //setClockRunning(false)
        setClockRunning(false)
        clearInterval(currentValue.current)
        setToggle(false)
    }
    const handleReset=()=>{
        setReset(false)
        clearInterval(currentValue.current)
        setTime(value)
        setToggle(false)
    }

  return (
    <div>Timer
        <Card className='w-25 p-3 me-auto ms-auto'>
        <div>
        <input type='number' value={value} onChange={e=>e.target.value<0?alert("Invalid Number"):setValue(parseInt(e.target.value)) }>
        </input>
        <div>
        
        {reset?time:""}
       
        </div>
        </div>
        <div className='mt-2'>
            {!toggle?
        <Button className='m-1' variant='primary' onClick={handleTimer}>
            Start
        </Button>:
        <Button className='m-1' variant='primary' onClick={handlePause}>
            Pause
        </Button>}
        <Button variant='primary' onClick={handleReset}>
            Reset
        </Button>
        </div>
        </Card>
    </div>
  )
}
