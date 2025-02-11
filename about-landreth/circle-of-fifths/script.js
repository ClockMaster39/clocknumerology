const r1Database = { 

  27: [
	"YHWH [IVRIT] YHWH",
  ],

  33: [
    "God",
  ], 
  
  37: [
	"Jesus",
  ], 
  
  100: [
	"[IVRIT] Kadosh",
  ], 
  
  126: [
	"[IVRIT] Shemi",
  ],  
  
  137: [
	"God's Son; Three, Seven",
  ],
  
  145: [
	"Jesus Christ; The Name",
  ], 
  
  165: [
	"Who is the Father?; Most Holy",
  ],
  
  189: [
	"He's the Son of God; Thirty-Seven; Three and Three",
  ],
  
  195: [
	"God Most High; Holy, Holy, Holy!",
  ], 
  
  206: [
	"Yehoshua HaMeshiach [IVRIT] Yehoshua HaMeshiach; HMSPR YHWH; Shloshim v'Echad",
  ],
  
  221: [
	"The Lord our God",
  ],
  
  222: [
	"Holiest of the Holy",
  ],  
  
  226: [
	"[IVRIT] Esrim Shiva",
  ], 
  
  235: [
	"Jesus' Numbers; Who is the Messiah?; Two, Six, and Seven",
  ],
  
  245: [
	"Lord Jesus Christ",
  ],
  
  257: [
	"The Lord Jesus Christ; I AM THE MESSIAH",
  ],
  
  266: [
	"Who is the Most Holy?",
  ], 
  
  277: [
	"What is the Name of God?",
  ],
  
  288: [
	"Mary Magdalene; Messiah's Mother",
  ],

  314: [
	"The Son of the Most High; Two Hundred Fifty-Seven; Two Hundred Eighty-Seven",
  ], 
  
  343: [
	"Jesus Christ's Number; These are the Numbers of God",
  ],
  
  352: [
	"[IVRIT] HaMispar Shemi",
  ],
  
  363: [
	"Seven Hundred Fifty-Four",
  ], 
  
  386: [
	"The Numbers of Jesus Christ",
  ], 
  
  450: [
	"What are the Numbers of Jesus Christ?",
  ], 
  
  497: [
	"What is the Number of God Most High?; Four Hundred Ninety-One",
  ],
  
  505: [
	"These are the Numbers of God Most High; Number Two Hundred Twenty-Eight; The Numbers Three, One, and Zero",
  ], 
  
  543: [
	"[IVRIT] HaMispar Me'ah Esrim ve'Shisha",
  ], 
  
  548: [
	"The Messiah's Name and Number",
  ],
  
  556: [
	"The Number of the Name of the Messiah",
  ], 
  
  650: [
	"What is the Number of our King and God?",
  ], 
  
  754: [
	"In the beginning God created the Heavens and the Earth",
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
      A: 1, B: 8, C: 1, D: 5, E: 2, F: 6, G: 3, H: 7, I: 45,
      J: 15, K: 55, L: 25, M: 65, N: 65, O: 25, P: 55, Q: 15, R: 45,
      S: 7, T: 3, U: 6, V: 2, W: 5, X: 1, Y: 8, Z: 1
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
  