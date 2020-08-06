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
// console.log(numberToWords(1234567))
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reorderList = function(head) {
    // slice list in half
    
    let fast = head;
    let slow = fast;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next
    }

    
    let prev = null;
    
    // reverse second half
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }


    let second = prev;
    let curr = head;


    while (second.next) {
        let temp = curr.next;
        curr.next = second;
        curr = temp;

        temp = second.next;
        second.next = curr;
        second = temp;
    }

    return head
    
};

// let a = new ListNode(1);
// let b = new ListNode(2);
// let c = new ListNode(3);
// let d = new ListNode(4);
// let e = new ListNode(5);
// let f = new ListNode(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// console.log(reorderList(a))

var findItinerary = function(tickets) {
    tickets.sort((a,b) => {
        return a[1].localeCompare(b[1])
    })

    let flights = new Map();

    for (let [from, to] of tickets) {
        if (flights.has(from)) {
            let current = flights.get(from)
            current.push(to)
            flights.set(from, current)
        } else {
            flights.set(from, [to])
        }
    }

    let itenerary = ['JFK'];
    while (true) {
        let from = itenerary[itenerary.length - 1];
        let destinations = flights.get(from);
        console.log(from, destinations, itenerary)
        if (!destinations || destinations.length === 0) break
        let n = 0;
        let nextDestination = destinations[n];

        while (!flights.has(nextDestination) && n < destinations.length - 1) {
            n++
            nextDestination = destinations[n]
        }
        destinations.splice(n - 1, 1)
        // console.log(from, destinations, flights)

        flights.set(from, destinations)

        itenerary.push(nextDestination)
    }

    // JFK, ATL, JFK, SFO, ATL, SFO
   
    return itenerary
};

// let ex = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// let ex2 = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]

// console.log(findItinerary(ex2))
// console.log(findItinerary(ex))


var longestStrChain = function(words) {
    let dict = new Map();
    words.sort((a,b) => a.length - b.length)
    console.log(words)
    for (let word of words) {
        let letters =  new Set()
        for (let letter of word) {
            letters.add(letter)
        }
        dict.set(word, letters)
    }

    let q = [];
    let l = words[0].length;

    let currLevel = words.filter(a => a.length === l)
    q.push(...currLevel)

    let chain = 1;

    while (q.length) {
        let toProcess = q;
        let nextUp = words.filter(a => a.length === l + 1);
        if (nextUp.length === 0) break

        if (l === 8) console.log(nextUp, toProcess, chain)
        // if (chain === 6) console.log(nextUp, toProcess, chain)
        console.log(nextUp, toProcess, chain)

        let nextQ = [];
        while (toProcess.length) {
            let currWord = toProcess.shift();

            for (let nextWord of nextUp) {
                let nextLetters = dict.get(nextWord)
                let shouldPush = true;
                for (let letter of currWord) {
                    if (!(nextLetters.has(letter))) {
                        shouldPush = false;
                        break
                    }
                }
                if (shouldPush) nextQ.push(nextWord)  
            }
        }

        if (nextQ.length === 0) break

        q = nextQ
        chain++
        l++
    }

    return chain
};

let a = ["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]
let b = ["a","b","ba","bca","bda","bdca"]
let c = ["sgtnz","sgtz","sgz","ikrcyoglz","ajelpkpx","ajelpkpxm","srqgtnz","srqgotnz","srgtnz","ijkrcyoglz"]
console.log(longestStrChain(a))

