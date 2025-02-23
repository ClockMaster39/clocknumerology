const r1Database = { 

  24: [
	"Yasha; YHVH [IVRIT] Yasha; YHVH",
  ],
  
  26: [
	"[IVRIT] Ehyeh",
  ],

  27: [
	"YHWH [IVRIT] YHWH",
  ],

  33: [
    "God",
  ], 
  
  37: [
	"Jesus",
  ], 
  
  86: [
	"[IVRIT] HShM",
  ],
  
  100: [
	"[IVRIT] Kadosh",
  ], 
  
  111: [
	"Two, Seven",
  ],
  
  126: [
	"[IVRIT] Shemi",
  ],  
  
  137: [
	"God's Son; Three, Seven; Four, Five",
  ],
  
  142: [
	"[IVRIT] Adonai",
  ],
  
  145: [
	"Jesus Christ; The Name; One, Six",
  ], 
  
  161: [
	"Son of God",
  ],
  
  165: [
	"Who is the Father?; Most Holy; The Holy Bible",
  ],
  
  189: [
	"He's the Son of God; Thirty-Seven; Three and Three; Two, Seven, Seven",
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
  
  232: [
	"What's the Name of God?",
  ],
  
  235: [
	"Jesus' Numbers; Who is the Messiah?; Two, Six, and Seven",
  ],
  
  245: [
	"Lord Jesus Christ; Rose from the Dead; Four and One",
  ], 
  
  253: [
	"The Father of the Messiah",
  ],
  
  257: [
	"The Lord Jesus Christ; I AM THE MESSIAH",
  ],
  
  260: [
	"Two, Seven, and Seven",
  ],
  
  266: [
	"Who is the Most Holy?",
  ], 
  
  267: [
	"The Number of God; Four, Five, and Three",
  ],
  
  272: [
	"King and God",
  ],
  
  277: [
	"What is the Name of God?",
  ],
  
  288: [
	"Mary Magdalene; Messiah's Mother",
  ],
  
  301: [
	"",
  ],  
  
  307: [
	"Three and Nine"
  ],
  
  310: [
	"The Name of Messiah",
  ],

  314: [
	"The Son of the Most High; Two Hundred Fifty-Seven; Two Hundred Eighty-Seven; Three, Nine, Seven",
  ], 
  
  315: [
	"What is the C-Major Chord?; Three Hundred Eighty-Six",
  ],
  
  322: [
	"The Name of the Messiah",
  ], 
  
  339: [
	"What is the Number of Jesus?",
  ],
  
  343: [
	"Jesus Christ's Number; These are the Numbers of God",
  ], 
  
  346: [
	"Who is the Lord Jesus Christ?; Two Hundred Twenty-One",
  ],
  
  350: [
	"Jesus Christ's Numbers; The Numbers of our God",
  ],
  
  352: [
	"[IVRIT] HaMispar Shemi",
  ],
  
  363: [
	"Who is Immortal?; Seven Hundred Fifty-Four",
  ], 
  
  368: [
	"[IVRIT] HaMispar HaMashiach",
  ],
  
  373: [
	"The Numbers Two and Three",
  ],
  
  386: [
	"The Numbers of Jesus Christ [IVRIT] Ani Melech ve'Elohim",
  ], 
  
  397: [
	"The Name of the Lord our God",
  ],
  
  380: [
	"Number Thirty-Seven; Three, Nine, and Zero",
  ], 
  
  390: [
	"What is the Name of the Messiah?",
  ], 
  
  414: [
	"What are the Numbers of our God?",
  ], 
  
  441: [
	"The Son of Mary and Joseph",
  ],
  
  450: [
	"What are the Numbers of Jesus Christ?",
  ], 
  
  455: [
	"The Lord Jesus Christ's Number; Number Three Hundred Ten",
  ],
  
  467: [
	"I AM YOUR KING AND GOD",
  ], 
  
  493: [
	"This is the Number of Jesus Christ; The Number Two Hundred Seventy-Two",
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
	"The Messiah's Name and Number; The Number Eight Hundred Fifty-Four",
  ],
  
  556: [
	"The Number of the Name of the Messiah",
  ], 
  
  562: [
	"What are the Numbers of the Lord Jesus Christ?; The Number Four Hundred Sixty-Seven",
  ],
  
  650: [
	"What is the Number of our King and God?",
  ], 
  
  727: [
	"What is the Name and Number of the Lord our God?",
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
  