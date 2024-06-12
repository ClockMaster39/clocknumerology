const r1Database = {

  33: [
    "I AM",
  ],

  48: [
    "Jesus",
  ],

  59: [
    "Yahshuah; Messiah",
  ],

  61: [
    "Yahweh",
  ],

  67: [
    "God; Savior; Two",
  ],

  75: [
    "The Name",
  ],

  82: [
    "My Name",
  ],

  85: [
    "[IVRIT] ANI YHWH",
  ],

  86: [
    "I AM A KING",
  ],

  97: [
    "I AM THAT I AM",
  ],

  107: [
    "Sixty-Seven",
  ],

  110: [
    "Jesus Christ; He is the King",
  ],

  117: [
    "Sacred Name; Eight, Two",
  ],

  120: [
    "Yeshua Mashiach",
  ],

  122: [
    "God's Name",
  ],

  126: [
    "Six, Three, Five",
  ],

  127: [
    "Yeshua HaMashiach; Our God; God's Son; Who is Jesus?; Our Savior",
  ],

  130: [
    "Four, Eight; Six and Seven; Eight and Six; Eighty-Two",
  ],

  132: [
    "My Numbers; A Virgin Birth",
  ],

  134: [
    "Yeshua HaMeshiach; Most Sacred",
  ],

  135: [
    "Forty-Eight; Forty-Seven; Ninety-Seven",
  ],

  136: [
    "This is My Name",
  ],

  137: [
    "My New Name; Holy Spirit; Fifty-Nine",
  ],

  139: [
    "What is the Name?",
  ],

  141: [
    "Jesus' Number; Most Holy; This is My Son; From Nazareth",
  ], 

  146: [
    "Who is God?; What is My Name?; Eight and Five",
  ],

  147: [
    "Jesus' Numbers; Yeshua Moshiach; Two, Four",
  ],

  148: [
    "Three, Three, One; Twenty-One",
  ],

  150: [
    "One and Three",
  ],

  161: [
    "Yehoshua HaMashiach; A God Number; Prince of Peace; Who is Perfect?; One, One, Zero",
  ],

  164: [
    "Name of God; Who is the Messiah?; Two and Zero; One, Nine, Five",
  ],

  165: [
    "A Name of God; Two and Seven; One, Nine, Zero; Two, Eight, Five; The Number Three",
  ],

  166: [
    "God's Number; God of Heaven; New Jerusalem; City of God; Three O' Clock; Three Hundred; Two, Zero, Eight",
  ],

  168: [
    "Yehoshua HaMeshiach; One, Six, and Six; One, Six, Four",
  ],

  169: [
    "A Holy Number; God Most High; Son of God; The Star of Jacob; The Number Eight; One, Three, Two",
  ],

  171: [
    "Mary Magdalene; One and Two",
  ],

  186: [
    "The Number Two; One, Eight, and Six; One, Four, Eight",
  ],

  190: [
    "Most Holy Name; The Name of God; What is My Number?; The Messiah's Numbers; One, Two, Two; Three, Three, and Seven",
  ],

  192: [
    "What's the Messiah's Name?; The God of Heaven",
  ],

  193: [
    "Holiest Number; Two, Three, Four; Two, Three, and Six",
  ],

  197: [
    "She's Mary Magdalene; The Bride of Heaven",
  ],

  205: [
    "Lord Jesus Christ; Who Forgives Sin?; Who is the Holiest?; Holiest of All",
  ],

  209: [
    "Jesus Christ's Number",
  ],

  211: [
    "Holy of Holies; This is My Holy Name",
  ],

  216: [
    "The Most Holy Name; He is the King of Kings; One Hundred Ten; One, Four, and Six; Number Seventy-Five",
  ],

  220: [
    "This is God's Number; Who is Most Holy?; One, Two, and Zero",
  ],

  222: [
    "Our Lord God; The Scepter of Justice",
  ],

  224: [
    "Name of God's Son; Two, Zero, and Nine",
  ],

  226: [
    "One Hundred Seven",
  ],

  227: [
    "My Favorite Number; I'M THE SON OF GOD; A Number of the Messiah; Our King and God; The Number Nineteen; Two, One, and One",
  ],

  231: [
    "The Lord Jesus Christ; The Holiest of All; I AM BORN OF A VIRGIN; Two, Two, and Zero",
  ],

  234: [
    "Most Holy Number; The Number of God; The Most Holy God; Who is without sin?; One, Four, and Seven",
  ],

  235: [
    "A Most Holy Number; The Word of God; Most Holy Word; I AM THE GOOD SHEPHERD; Two Hundred Five; Number Twenty-Seven; Numbers Six and One",
  ],

  236: [
    "Holy to the Lord",
  ],

  244: [
    "Two Hundred Sixty; This is a Number of Jesus",
  ],

  260: [
    "The Most Holy Number; One, One, Eight, and Seven",
  ],

  261: [
    "One Hundred Ninety",
  ],

  273: [
    "What is a Number of God?",
  ],

  283: [
    "What is the Holiest Number?; Numbers One and Four",
  ],

  285: [
    "Two Hundred Forty",
  ],

  289: [
    "One Hundred Sixty-One; The Numbers Two and Zero",
  ],

  292: [
    "The Name of God Most High",
  ],

  300: [
    "One Hundred Twenty-Six; Two Hundred Sixty-One",
  ],

  311: [
    "One Hundred Forty-Seven",
  ],

  331: [
    "The Number and Name of God; Three Hundred Ninety-Four; The Numbers Four, Three, and Six",
  ],

  332: [
    "The Numbers Three, Three, and Two",
  ],

  337: [
    "The Numbers and Name of God",
  ],

  340: [
    "Numbers Two, Three, and Four; The Numbers Two, Seven, and Seven",
  ],

  361: [
    "Number One Hundred Twenty",
  ],

  394: [
    "What is the Lord Jesus Christ's Number?; The Number of our King and God; The Number One Hundred Thirty-Six",
  ],

  401: [
    "Number Two Hundred Seventy-Three",
  ],

  429: [
    "The Number Two Hundred Thirty-One",
  ],

  436: [
    "What is the Number of Lord Jesus Christ?",
  ],

  448: [
    "The Number Two Hundred Twenty-Seven",
  ],


};

const r2Database = {

  25: [
    "Placeholder2",
  ],


};

const r3Database = {

  25: [
    "PlaceHolder3",
  ],

};

const r4Database = {

  52: [
    "Placeholder...",
  ],

};

function updateR1(outputValue) {
    // Display "Catalogue of X" where X is the value displayed in the output
    const r1Container = document.getElementById('r1-output');
    const r1Content = `${outputValue}`;
    r1Container.textContent = r1Content;
  
    // Update R1 container with entries from the database
    const r1List = document.getElementById('r1-scroll-container');
    r1List.innerHTML = '';
    if (outputValue in r1Database) {
      r1Database[outputValue].forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.textContent = entry;
        r1List.appendChild(entryElement);
      });
    }
  }
  
  function updateR2(outputValue) {
    // Manually input the content for R2
    const r2Input = "";
    const r2Container = document.getElementById('r2-output');
  
    // Display "Clones of X" where X is the number displayed in the output
    const r2Content = `Clones of ${outputValue}: ${r2Input}`;
    r2Container.textContent = r2Content;
  
    // Update R2 container with entries from the database
    const r2List = document.getElementById('r2-scroll-container');
    r2List.innerHTML = '';
    if (outputValue in r2Database) {
      r2Database[outputValue].forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.textContent = entry;
        r2List.appendChild(entryElement);
      });
    }
  }
  
  function updateR3(outputValue) {
    // Manually input the content for R3
    const r3Input = "";
    const r3Container = document.getElementById('r3-output');
  
    // Display "Branches of X" where X is the number displayed in the output
    const r3Content = `Branches of ${outputValue}: ${r3Input}`;
    r3Container.textContent = r3Content;
  
    // Update R3 container with entries from the database
    const r3List = document.getElementById('r3-scroll-container');
    r3List.innerHTML = '';
    if (outputValue in r3Database) {
      r3Database[outputValue].forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.textContent = entry;
        r3List.appendChild(entryElement);
      });
    }
  }
  
  function updateR4(outputValue) {
    // Manually input the content for R4
    const r4Input = "";
    const r4Container = document.getElementById('r4-output');
  
    // Display "Hebrew of X" where X is the number displayed in the output
    const r4Content = `Strong's of ${outputValue}: ${r4Input}`;
    r4Container.textContent = r4Content;
  
    // Update R4 container with entries from the database
    const r4List = document.getElementById('r4-scroll-container');
    r4List.innerHTML = '';
    if (outputValue in r4Database) {
      r4Database[outputValue].forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.textContent = entry;
        r4List.appendChild(entryElement);
      });
    }
  }
  
  function calculate() {
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value.toUpperCase();
  
    const values = {
      A: 1, B: 13, C: 14, D: 27, E: 8, F: 20, G: 12, H: 6, I: 12,
      J: 8, K: 8, L: 28, M: 20, N: 20, O: 28, P: 8, Q: 8, R: 12,
      S: 6, T: 12, U: 20, V: 8, W: 27, X: 14, Y: 13, Z: 1
    };
  
    let outputValue = 0;
  
    for (let i = 0; i < inputValue.length; i++) {
      const char = inputValue[i];
      if (char in values) {
        outputValue += values[char];
      }
    }
  
    const outputElement = document.getElementById('output');
    outputElement.textContent = outputValue;
  
    // Update R1, R2, and R3 containers with entries from the database
    updateR1(outputValue);
    updateR2(outputValue);
    updateR3(outputValue);
    updateR4(outputValue);
  }
  