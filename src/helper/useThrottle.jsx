import { useRef } from "react";

const useThrottle = (cb, limit) => {

    const lastRun = useRef(Date.now())

    return function(){
        if(Date.now() - lastRun.current >= limit){
            cb()
            lastRun.current = Date.now();
        }
        return;
    };
}

export default useThrottle;