 let len = 4;
      async function getRandomChinese(length) {
        if (len===0) return ('Please length')
        let arrayChinese = [];
        const sym = () => new Promise((resolve, reject) => {
          setTimeout(() => {
            const date = Date.now().toString().slice(-5);
            const symb = String.fromCharCode(date);
            resolve(symb)
            }, 50);
        })
        while (arrayChinese.length<length) {
          await sym().then((el) => arrayChinese.push(el))
        }
        return new Promise((resolve) => {
          resolve(arrayChinese.join(' '));
        }, length*50)
    
      }
      getRandomChinese(len).then((el) => console.log(el))
  