const feedbackMessage = document.getElementById('feedbackMessage');
const questionText = document.getElementById('questionText');
const resultsMessage = document.getElementById('resultsMessage');

// Questions Array
const questions = [
    {
        question: "What is the primary purpose of Amazon EC2?",
        options: ["A) Object Storage", "B) Virtual Servers", "C) DNS Management", "D) Load Balancing"],
        correct: "B) Virtual Servers"
    },
    {
        question: "What does AWS stand for?",
        options: ["A) Advanced Web Services", "B) Amazon Web Services", "C) Automated Web Solutions", "D) All Web Services"],
        correct: "B) Amazon Web Services"
    },
    {
        question: "Which AWS service is designed for object storage?",
        options: ["A) Amazon EC2", "B) Amazon RDS", "C) Amazon S3", "D) Amazon VPC"],
        correct: "C) Amazon S3"
    },
    {
        question: "What is the AWS service used for content delivery and caching?",
        options: ["A) Amazon CloudFront", "B) Amazon Route 53", "C) AWS Lambda", "D) Amazon EBS"],
        correct: "A) Amazon CloudFront"
    },
    {
        question: "Which service would you use for managing user access and permissions in AWS?",
        options: ["A) AWS IAM", "B) Amazon CloudWatch", "C) Amazon S3", "D) AWS Config"],
        correct: "A) AWS IAM"
    },
    {
        question: "What is Amazon RDS primarily used for?",
        options: ["A) Object Storage", "B) Relational Database Service", "C) Virtual Machines", "D) Load Balancing"],
        correct: "B) Relational Database Service"
    },
    {
        question: "Which AWS service allows you to run code without provisioning servers?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) Amazon S3", "D) AWS Elastic Beanstalk"],
        correct: "A) AWS Lambda"
    },
    {
        question: "What is the purpose of Amazon VPC?",
        options: ["A) Virtual Private Cloud", "B) Virtual Public Cloud", "C) Virtual Private Connection", "D) Virtual Public Connection"],
        correct: "A) Virtual Private Cloud"
    },
    {
        question: "Which service is used to distribute incoming application traffic across multiple targets?",
        options: ["A) Amazon Route 53", "B) AWS CloudFront", "C) Elastic Load Balancing", "D) AWS Direct Connect"],
        correct: "C) Elastic Load Balancing"
    },
    {
        question: "What does S3 stand for?",
        options: ["A) Simple Storage Service", "B) Simple Security Service", "C) Secure Storage Service", "D) Simple Server Service"],
        correct: "A) Simple Storage Service"
    },
    {
        question: "Which AWS service is designed for monitoring and logging?",
        options: ["A) AWS CloudTrail", "B) Amazon CloudWatch", "C) AWS Config", "D) Amazon Inspector"],
        correct: "B) Amazon CloudWatch"
    },
    {
        question: "What is AWS Elastic Beanstalk used for?",
        options: ["A) Managing databases", "B) Deploying applications", "C) Monitoring resources", "D) Load balancing"],
        correct: "B) Deploying applications"
    },
    {
        question: "Which AWS service provides a scalable object storage solution?",
        options: ["A) Amazon EBS", "B) Amazon S3", "C) Amazon RDS", "D) Amazon EC2"],
        correct: "B) Amazon S3"
    },
    {
        question: "Which AWS service is a fully managed NoSQL database service?",
        options: ["A) Amazon RDS", "B) Amazon DynamoDB", "C) Amazon Aurora", "D) Amazon Redshift"],
        correct: "B) Amazon DynamoDB"
    },
    {
        question: "What is AWS Direct Connect used for?",
        options: ["A) Establishing a dedicated network connection", "B) Managing DNS", "C) Load balancing", "D) Monitoring services"],
        correct: "A) Establishing a dedicated network connection"
    },
    {
        question: "Which AWS service is used for building data lakes?",
        options: ["A) Amazon Redshift", "B) Amazon Athena", "C) AWS Lake Formation", "D) Amazon RDS"],
        correct: "C) AWS Lake Formation"
    },
    {
        question: "What is the primary use of AWS CloudFormation?",
        options: ["A) Deploying applications", "B) Creating and managing AWS resources", "C) Monitoring resources", "D) Load balancing"],
        correct: "B) Creating and managing AWS resources"
    },
    {
        question: "Which AWS service provides a content delivery network (CDN)?",
        options: ["A) Amazon CloudFront", "B) Amazon Route 53", "C) AWS Global Accelerator", "D) AWS Direct Connect"],
        correct: "A) Amazon CloudFront"
    },
    {
        question: "What is the maximum size of a single object that can be stored in Amazon S3?",
        options: ["A) 5 GB", "B) 100 GB", "C) 5 TB", "D) 10 TB"],
        correct: "C) 5 TB"
    },
    {
        question: "Which AWS service is used for managing user identities and permissions?",
        options: ["A) AWS IAM", "B) AWS Shield", "C) AWS WAF", "D) Amazon GuardDuty"],
        correct: "A) AWS IAM"
    },
    {
        question: "What is Amazon SageMaker used for?",
        options: ["A) Machine Learning", "B) Data Storage", "C) Load Balancing", "D) Networking"],
        correct: "A) Machine Learning"
    },
    {
        question: "Which AWS service can be used to automate resource provisioning?",
        options: ["A) AWS CloudFormation", "B) AWS CodeDeploy", "C) AWS Lambda", "D) Amazon EC2"],
        correct: "A) AWS CloudFormation"
    },
    {
        question: "What is AWS Snowball primarily used for?",
        options: ["A) Data migration", "B) Content delivery", "C) Load balancing", "D) Monitoring"],
        correct: "A) Data migration"
    },
    {
        question: "Which service is used for application performance monitoring in AWS?",
        options: ["A) Amazon CloudWatch", "B) AWS Config", "C) AWS X-Ray", "D) Amazon Inspector"],
        correct: "C) AWS X-Ray"
    },
    {
        question: "Which AWS service provides a fully managed Kubernetes service?",
        options: ["A) Amazon ECS", "B) Amazon EKS", "C) AWS Fargate", "D) Amazon Lightsail"],
        correct: "B) Amazon EKS"
    },
    {
        question: "What is AWS Glue primarily used for?",
        options: ["A) Data transformation and ETL", "B) Load balancing", "C) Security monitoring", "D) Content delivery"],
        correct: "A) Data transformation and ETL"
    },
    {
        question: "Which AWS service is used for real-time data streaming?",
        options: ["A) Amazon Kinesis", "B) Amazon SQS", "C) Amazon SNS", "D) AWS Lambda"],
        correct: "A) Amazon Kinesis"
    },
    {
        question: "What is the purpose of AWS Config?",
        options: ["A) Monitoring and auditing AWS resources", "B) Load balancing", "C) Data storage", "D) Application deployment"],
        correct: "A) Monitoring and auditing AWS resources"
    },
    {
        question: "Which service is used for managing API gateways in AWS?",
        options: ["A) AWS Lambda", "B) Amazon API Gateway", "C) Amazon CloudFront", "D) AWS AppSync"],
        correct: "B) Amazon API Gateway"
    },
    {
        question: "What is Amazon Inspector used for?",
        options: ["A) Security assessment", "B) Load balancing", "C) Data storage", "D) Monitoring"],
        correct: "A) Security assessment"
    },
    {
        question: "Which AWS service is used for managing and analyzing data in a data warehouse?",
        options: ["A) Amazon S3", "B) Amazon Redshift", "C) Amazon RDS", "D) Amazon DynamoDB"],
        correct: "B) Amazon Redshift"
    },
    {
        question: "What is the primary benefit of using AWS Lambda?",
        options: ["A) Serverless architecture", "B) Load balancing", "C) Data storage", "D) Networking"],
        correct: "A) Serverless architecture"
    },
    {
        question: "Which AWS service can automatically scale resources based on demand?",
        options: ["A) Amazon EC2 Auto Scaling", "B) AWS Elastic Beanstalk", "C) Amazon RDS", "D) AWS CloudFormation"],
        correct: "A) Amazon EC2 Auto Scaling"
    },
    {
        question: "What is the purpose of AWS Shield?",
        options: ["A) DDoS protection", "B) Load balancing", "C) Data storage", "D) Application deployment"],
        correct: "A) DDoS protection"
    },
    {
        question: "Which AWS service is used for building chatbots?",
        options: ["A) Amazon Lex", "B) AWS Lambda", "C) Amazon Polly", "D) Amazon Connect"],
        correct: "A) Amazon Lex"
    },
    {
        question: "What is the primary purpose of Amazon Route 53?",
        options: ["A) DNS management", "B) Load balancing", "C) Data storage", "D) Application deployment"],
        correct: "A) DNS management"
    },
    {
        question: "Which service is used for serverless application development?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) Amazon S3", "D) Amazon RDS"],
        correct: "A) AWS Lambda"
    },
    {
        question: "What is the maximum number of IAM roles that can be attached to an AWS Lambda function?",
        options: ["A) 1", "B) 5", "C) 10", "D) 15"],
        correct: "A) 1"
    }
];

let currentQuestionIndex = 0;
let lifelinesUsed = {
    fiftyFifty: false,
    askAudience: false,
    phoneAFriend: false
};

let correctAnswersCount = 0;
let incorrectAnswers = [];

// Function to load the current question
const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    document.getElementById('questionNumber').innerText = `Question ${currentQuestionIndex + 1}`; // Update question number
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
        button.onclick = () => checkAnswer(button.innerText);
        button.style.display = 'inline-block'; // Ensure buttons are displayed
    });
    feedbackMessage.innerText = ""; // Clear feedback message
};

// Function to check the selected answer
const checkAnswer = (selected) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selected === currentQuestion.correct) {
        feedbackMessage.innerText = "Correct!";
        correctAnswersCount++;
    } else {
        feedbackMessage.innerText = "Incorrect. The correct answer was: " + currentQuestion.correct;
        incorrectAnswers.push(currentQuestionIndex + 1); // Store the question number (1-based index)
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

// Function to show the results at the end of the game
const showResults = () => {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.lifelines').style.display = 'none';
    document.querySelector('.feedback').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    resultsMessage.innerText = `You answered ${correctAnswersCount} out of ${questions.length} questions correctly.`;
    if (incorrectAnswers.length > 0) {
        resultsMessage.innerText += `\nYou missed the following questions: ${incorrectAnswers.join(', ')}`;
    }

    // Trigger the confetti effect
    confetti();
};

// Function to use the 50/50 lifeline
const useFiftyFifty = () => {
    if (!lifelinesUsed.fiftyFifty) {
        lifelinesUsed.fiftyFifty = true;
        const correctAnswer = questions[currentQuestionIndex].correct;
        const options = questions[currentQuestionIndex].options;

        // Remove two incorrect answers
        let incorrectOptions = options.filter(option => option !== correctAnswer);
        const optionsToRemove = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);

        const buttons = document.querySelectorAll('.button-container button');
        buttons.forEach(button => {
            if (optionsToRemove.includes(button.innerText)) {
                button.style.display = 'none'; // Hide incorrect options
            }
        });

        // Disable the lifeline button and hide it
        document.getElementById('fiftyFifty').disabled = true;
        document.getElementById('fiftyFifty').style.display = 'none';
    }
};

// Function to use the Ask the Audience lifeline
const useAskAudience = () => {
    if (!lifelinesUsed.askAudience) {
        lifelinesUsed.askAudience = true;
        
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correct;
        const options = currentQuestion.options;

        // Generate audience percentages
        const audienceResponses = options.map(option => {
            if (option === correctAnswer) {
                return Math.floor(Math.random() * 41) + 60; // 60% to 100% for the correct answer
            } else {
                return Math.floor(Math.random() * 41); // 0% to 40% for incorrect answers
            }
        });

        // Display audience suggestions
        feedbackMessage.innerText = `Audience suggests:\n` +
            `${options[0]}: ${audienceResponses[0]}%\n` +
            `${options[1]}: ${audienceResponses[1]}%\n` +
            `${options[2]}: ${audienceResponses[2]}%\n` +
            `${options[3]}: ${audienceResponses[3]}%`;

        // Disable the lifeline button and hide it
        document.getElementById('askAudience').disabled = true;
        document.getElementById('askAudience').style.display = 'none';
    }
};

// Function to use the Phone a Friend lifeline
const usePhoneAFriend = () => {
    if (!lifelinesUsed.phoneAFriend) {
        lifelinesUsed.phoneAFriend = true;
        feedbackMessage.innerText = "Your friend thinks the answer is: " + questions[currentQuestionIndex].correct;
        
        // Disable the lifeline button and hide it
        document.getElementById('phoneAFriend').disabled = true;
        document.getElementById('phoneAFriend').style.display = 'none';
    }
};

// Event listeners for lifelines
document.getElementById('fiftyFifty').addEventListener('click', useFiftyFifty);
document.getElementById('askAudience').addEventListener('click', useAskAudience);
document.getElementById('phoneAFriend').addEventListener('click', usePhoneAFriend);

// Play Again functionality
document.getElementById('playAgain').addEventListener('click', () => {
    currentQuestionIndex = 0;
    lifelinesUsed = {
        fiftyFifty: false,
        askAudience: false,
        phoneAFriend: false
    };
    correctAnswersCount = 0;
    incorrectAnswers = [];

    // Reset the display of the lifeline buttons
    document.getElementById('fiftyFifty').disabled = false;
    document.getElementById('fiftyFifty').style.display = 'inline-block';
    document.getElementById('askAudience').disabled = false;
    document.getElementById('askAudience').style.display = 'inline-block';
    document.getElementById('phoneAFriend').disabled = false;
    document.getElementById('phoneAFriend').style.display = 'inline-block';

    document.querySelector('.results').style.display = 'none';
    document.querySelector('.question').style.display = 'block';
    document.querySelector('.lifelines').style.display = 'block';
    document.querySelector('.feedback').style.display = 'block';

    loadQuestion();
});

// Load the first question when the script runs
loadQuestion();