// debounce function optimizes callback to be called on input change
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      console.log(timer)
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), timeout);
    };
  }