export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
            
            
            resolve(realFetch(url, opts));
            return;
          }
  
          if (url.endsWith('/users') && opts.method === 'GET') {
           
  
            
            resolve(realFetch(url, opts));
            return;
          }
  
         
          resolve(realFetch(url, opts));
        }, 500);
      });
    };
  }
  