export const debounce = (callbackFn, delay = 250) => {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callbackFn(...args)
        }, delay)
    }

}

// INFO This Debounce will first activate the callbackFun (1st time) but will activate again if the interval between is bigger than the delay
export const homeDebounce = (callbackFn, delay = 250) => {
    let readyToCall = true;
    let timeout;

    return (...args) => {
        if(readyToCall) callbackFn(...args)

        readyToCall = false;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            readyToCall = true
        }, delay)
    }

}


export const throttle = (callbackFn, delay = 250) => {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        callbackFn(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      callbackFn(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
}

