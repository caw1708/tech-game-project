const questions = [
    {
        question: "How has social media affected mental health in teenagers?",
        options: [
            "Improved self-esteem and social connections",
            "Increased anxiety and depression rates",
            "No significant impact on mental health",
            "Only affected physical health"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of artificial intelligence on healthcare?",
        options: [
            "Reduced doctor-patient relationships",
            "Improved disease diagnosis and treatment planning",
            "Increased healthcare costs",
            "Decreased medical accuracy"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has remote work technology changed family dynamics?",
        options: [
            "Decreased work-life balance",
            "Improved work-life integration",
            "No impact on family life",
            "Increased commuting time"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary environmental impact of cryptocurrency mining?",
        options: [
            "Reduced carbon emissions",
            "Significant energy consumption",
            "Improved air quality",
            "Decreased electronic waste"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has educational technology affected learning outcomes?",
        options: [
            "Decreased student engagement",
            "Enabled personalized learning experiences",
            "Eliminated traditional teaching methods",
            "Reduced academic performance"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the main privacy concern with smart home devices?",
        options: [
            "High electricity costs",
            "Collection and sharing of personal data",
            "Complex installation process",
            "Limited functionality"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has streaming technology impacted traditional media?",
        options: [
            "Increased cable TV subscriptions",
            "Transformed content consumption habits",
            "Improved traditional TV ratings",
            "Reduced internet usage"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary impact of automation on employment?",
        options: [
            "Created more jobs than replaced",
            "Eliminated all manual labor",
            "Only affected manufacturing",
            "No impact on job market"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "How has mobile technology affected social interactions?",
        options: [
            "Increased face-to-face communication",
            "Changed communication patterns and etiquette",
            "Eliminated social media use",
            "Improved physical activity"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of virtual reality on education?",
        options: [
            "Replaced all traditional classrooms",
            "Enabled immersive learning experiences",
            "Reduced student engagement",
            "Increased textbook sales"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has e-commerce affected local businesses?",
        options: [
            "Increased local shopping",
            "Created both challenges and opportunities",
            "Eliminated all local stores",
            "No impact on local economy"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary impact of social media on political discourse?",
        options: [
            "Improved political understanding",
            "Polarized public opinion",
            "Reduced political engagement",
            "Eliminated fake news"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has technology affected human attention spans?",
        options: [
            "Increased focus duration",
            "Decreased sustained attention",
            "No impact on attention",
            "Improved memory retention"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of ride-sharing apps on transportation?",
        options: [
            "Increased public transit use",
            "Transformed urban mobility patterns",
            "Reduced car ownership",
            "Improved traffic congestion"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How has digital technology affected traditional art forms?",
        options: [
            "Eliminated traditional art",
            "Created new artistic possibilities",
            "Reduced artistic creativity",
            "Decreased art appreciation"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the primary impact of 5G technology on society?",
        options: [
            "Decreased internet speeds",
            "Enabled new applications like remote surgery",
            "Reduced mobile connectivity",
            "Increased energy consumption"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has cloud computing transformed business operations?",
        options: [
            "Increased physical storage needs",
            "Reduced flexibility and scalability",
            "Enabled remote work and global collaboration",
            "Decreased data security"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of artificial intelligence on creative industries?",
        options: [
            "Eliminated human creativity",
            "Enhanced creative possibilities",
            "Reduced artistic quality",
            "Decreased job opportunities"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has technology affected human memory?",
        options: [
            "Improved long-term memory",
            "Changed how we store and retrieve information",
            "Eliminated the need for memory",
            "Reduced cognitive abilities"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the primary impact of wearable technology on health?",
        options: [
            "Decreased physical activity",
            "Enabled better health monitoring",
            "Increased healthcare costs",
            "Reduced doctor visits"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the impact of blockchain on supply chain management?",
        options: [
            "No effect",
            "Improved transparency",
            "Reduced efficiency",
            "Only affects cryptocurrency"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "Which technology is essential for autonomous vehicles?",
        options: [
            "LIDAR",
            "Cassette player",
            "Fax machine",
            "DVD drive"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is edge computing?",
        options: [
            "Computing at data centers",
            "Gaming on edges",
            "Processing near data source",
            "Cloud storage"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "How does IoT impact smart cities?",
        options: [
            "No impact",
            "Only affects traffic",
            "Reduces efficiency",
            "Enables real-time monitoring"
        ],
        correct: 3,
        difficulty: "medium"
    },
    {
        question: "What is quantum supremacy?",
        options: [
            "Quantum computers outperforming classical ones",
            "Supreme court for quantum physics",
            "New gaming console",
            "AI achievement"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "Which is NOT a common cybersecurity threat?",
        options: [
            "Phishing",
            "Rainbow tables",
            "Good passwords",
            "Malware"
        ],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "What is the main purpose of 6G technology?",
        options: [
            "Holographic communications",
            "Faster gaming",
            "Better calls",
            "Less power use"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "How does biometric authentication work?",
        options: [
            "Passwords",
            "Physical traits",
            "Email verification",
            "Phone numbers"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the role of APIs in modern software development?",
        options: [
            "Just for games",
            "Enable software integration",
            "Slow down systems",
            "Store data only"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How do solid-state drives (SSD) differ from hard disk drives (HDD)?",
        options: [
            "No moving parts",
            "Larger size",
            "Slower speed",
            "More noise"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is the purpose of IPv6?",
        options: [
            "Slower internet",
            "More IP addresses",
            "Better graphics",
            "Cheaper hosting"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How does blockchain ensure data integrity?",
        options: [
            "It doesn't",
            "Using passwords",
            "Through cryptographic linking",
            "By being expensive"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "What is the function of a CPU cache?",
        options: [
            "Store permanent data",
            "Cool the computer",
            "Speed up data access",
            "Save money"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "Which is a benefit of cloud gaming?",
        options: [
            "No internet needed",
            "Cheaper games",
            "No downloads required",
            "Offline play"
        ],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "What is quantum entanglement?",
        options: [
            "Computer error",
            "Linked quantum states",
            "New game console",
            "Fast internet"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How does facial recognition work?",
        options: [
            "Magic",
            "Random guessing",
            "Biometric mapping",
            "Simple matching"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "What is the purpose of HTTPS?",
        options: [
            "Secure data transfer",
            "Faster websites",
            "Better images",
            "Save bandwidth"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "How does quantum cryptography work?",
        options: [
            "Like regular encryption",
            "Using quantum properties",
            "It doesn't exist",
            "With simple math"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the role of DNS?",
        options: [
            "Store websites",
            "Name resolution",
            "Create content",
            "Send emails"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How do neural networks learn?",
        options: [
            "They don't learn",
            "By memorizing",
            "Through pattern recognition",
            "Random guessing"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "What is the purpose of a firewall?",
        options: [
            "Speed up internet",
            "Block threats",
            "Store data",
            "Cool computer"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How does wireless charging work?",
        options: [
            "Through magic",
            "Like wired charging",
            "Using electromagnetic induction",
            "It doesn't work"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "What is the role of machine learning in cybersecurity?",
        options: [
            "Threat detection",
            "Making websites",
            "Sending emails",
            "Nothing"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "How do cookies affect web browsing?",
        options: [
            "They don't",
            "Store user data",
            "Make sites slower",
            "Block content"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the purpose of blockchain mining?",
        options: [
            "Waste energy",
            "Create new blocks",
            "Send emails",
            "Store files"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How does augmented reality differ from virtual reality?",
        options: [
            "Enhances real world",
            "No difference",
            "Uses no technology",
            "Costs more"
        ],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is the role of semiconductors in electronics?",
        options: [
            "Nothing important",
            "Just decoration",
            "Control electrical flow",
            "Make noise"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "How do self-driving cars navigate?",
        options: [
            "Randomly",
            "Sensors and AI",
            "Human control",
            "Magic"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the purpose of a VPN?",
        options: [
            "Privacy protection",
            "Faster internet",
            "Better graphics",
            "Save money"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "How does voice recognition work?",
        options: [
            "Magic",
            "Pattern matching",
            "Random guessing",
            "It doesn't"
        ],
        correct: 1,
        difficulty: "medium"
    }
];

// Add wild card questions - mix of very easy and very challenging
const wildCardQuestions = [
    {
        question: "What is the most basic form of digital data?",
        options: [
            "Binary (1s and 0s)",
            "Text files",
            "Images",
            "Sound waves"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What complex ethical implications arise from the development of autonomous weapons systems powered by AI?",
        options: [
            "Only maintenance costs matter",
            "The intersection of machine decision-making in warfare, accountability, and human rights",
            "Just the technical specifications",
            "Only the manufacturing process"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What does 'www' stand for in a website address?",
        options: [
            "World Wide Web",
            "World Web Width",
            "Wide World Web",
            "Web World Wide"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Analyze the potential societal implications of quantum computing on current cryptography and data security.",
        options: [
            "Only affects computer speed",
            "No significant impact",
            "Could render current encryption methods obsolete and reshape digital security paradigms",
            "Just makes computers smaller"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "What is RAM?",
        options: [
            "Random Access Memory",
            "Running Application Manager",
            "Remote Access Module",
            "Read And Monitor"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Explain the ethical implications of autonomous AI decision-making in healthcare",
        options: [
            "Only affects costs",
            "Balances efficiency with human oversight and patient rights",
            "No ethical concerns",
            "Just about speed"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the fundamental concept of quantum computing?",
        options: [
            "Regular computing but faster",
            "Using quantum states for calculations",
            "Just marketing",
            "Expensive computers"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is a CPU?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Power Unit"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Explain the concept of neural networks in AI",
        options: [
            "Simple calculators",
            "Brain-inspired computing models",
            "Regular programs",
            "Fast computers"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is a pixel?",
        options: [
            "Picture element",
            "Computer virus",
            "Sound unit",
            "Memory type"
        ],
        correct: 0,
        difficulty: "easy"
    }
];

// Keep track of used questions
let usedQuestions = new Set();
let usedWildCardQuestions = new Set();

// Modified function to get random question
function getRandomQuestion(isWildCard = false, difficulty = null) {
    const questionSet = isWildCard ? wildCardQuestions : questions;
    let availableQuestions = questionSet.filter(q => {
        const questionId = isWildCard ? 
            `wild_${q.question}` : 
            `regular_${q.question}`;
        return !usedQuestions.has(questionId) && 
               (!difficulty || q.difficulty === difficulty);
    });

    // If all questions have been used, reset the tracking
    if (availableQuestions.length === 0) {
        usedQuestions.clear();
        availableQuestions = questionSet.filter(q => 
            !difficulty || q.difficulty === difficulty
        );
    }

    // If still no questions available, return null
    if (availableQuestions.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    
    // Mark question as used
    const questionId = isWildCard ? 
        `wild_${selectedQuestion.question}` : 
        `regular_${selectedQuestion.question}`;
    usedQuestions.add(questionId);

    return selectedQuestion;
}