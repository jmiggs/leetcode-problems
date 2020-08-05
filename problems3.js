var numberToWords = function(num) {
    if (num === 0) return 'Zero'
  
  this.dictionary = {
      single: {
          '1': 'One',
          '2': 'Two',
          '3': 'Three',
          '4': 'Four',
          '5': 'Five',
          '6': 'Six',
          '7': 'Seven',
          '8': 'Eight',
          '9': 'Nine',
      },
      tens: {
          '2': 'Twenty',
          '3': 'Thirty',
          '4': 'Forty',
          '5': 'Fifty',
          '6': 'Sixty',
          '7': 'Seventy',
          '8': 'Eighty',
          '9': 'Ninety'
      },
      teens: {
          '0': 'Ten',
          '1': 'Eleven',
          '2': 'Twelve',
          '3': 'Thirteen',
          '4': 'Fourteen',
          '5': 'Fifteen',
          '6': 'Sixteen',
          '7': 'Seventeen',
          '8': 'Eighteen',
          '9': 'Nineteen',
          }
      }
  
      const tensHelper = function(s) {
          let res = [];
  
          let ten = s[0];
          let one = s[1];
          let teensFlag = false;
  
          if (ten !== '0') {
              if (ten === '1') {
                  res.push(this.dictionary['teens'][one])
                  // res += " "
                  teensFlag = true;
              } else {
                  res.push(this.dictionary['tens'][ten])
  
              }
          }
  
          if (one !== '0' && !teensFlag) {
              res.push(this.dictionary['single'][one])
          }

          console.log(res)
  
          return res
      }
  
      const hundredsHelper = function(s) {
  
          if (s.length === 2) {
              return tensHelper(s)
          }
          if (s.length === 1) {
              return [this.dictionary['single'][s[0]]]
          }
  
          let hunds = s[0]
          let res = [];
  
          if (hunds !== '0') {
              res.push(this.dictionary['single'][hunds])
              res.push('Hundred')
          }
  
          res.push(...tensHelper(s.substring(1, s.length)))
          console.log(res)
          return res
  
      }
  
      let billion = Math.floor(num / 1000000000);
      let million = Math.floor((num - (billion * 1000000000)) / 1000000);
      let thous = Math.floor( (num - (billion * 1000000000) - (million * 1000000)) / 1000 );
      let hunds = Math.floor((num - (billion * 1000000000) - (million * 1000000) - (thous * 1000)))
      let resString = [];
  
      if (billion > 0) {
          resString.push(this.dictionary['single'][String(billion)])
          resString.push('Billion')
      }
  
      if (million > 0) {
          resString.push(...hundredsHelper(String(million)))
          resString.push('Million')
      }
  
      if (thous > 0 ) {
          resString.push(...hundredsHelper(String(thous)))
          resString.push('Thousand')
      }
      
      if (hunds > 0 ) resString.push(...hundredsHelper(String(hunds)))
  
      return resString.join(' ')
  
  };

/*
    46, 100, 200
*/
console.log(numberToWords(1234567))