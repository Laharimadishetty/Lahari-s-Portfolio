import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Flight Delay Prediction and Analysis',
        description: "Analyzed over 2.1 million flights to assess delays under diverse weather conditions, employing feature engineering techniques to derive predictive features, and utilized the XGBoost machine learning algorithm to forecast flight delays, achieving a RMSE of 12.39, indicative of precise predictive capabilities.",
        tools: ['Python', 'Keras', 'Data Science'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'DR Detection Web Application',
        description: 'Built a React.js and Django web app for diabetic retinopathy detection using a CNN model with 90% accuracy. Integrated RESTful APIs, secure JWT authentication, and SQLite for data storage, deployed with Docker on AWS, reducing manual screening time by 50%.',
        tools: ['ReactJS', 'Django', 'RESTful APIs', 'SQLite', 'Docker', 'AWS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' Smart Traffic Sign Recognition Platform',
        description: 'Developed a traffic sign recognition model and integrated it into a Spring Boot backend for secure image uploads and real-time detection. Deployed RESTful services using Docker, enabling real-time prediction capabilities and improving scalability by 40%.',
        tools: ['Spring Boot', 'RESTful APIs', 'Docker', 'Python'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'FICture Website',
        description: "Created a Lost and Found app using HTML, JavaScript, and Bootstrap, improving reporting efficiency by 30%. Implemented the backend with Django and SQLite, ensuring secure authentication and reducing search time by 40% through efficient object tracking.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'Python', 'SQLite'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },