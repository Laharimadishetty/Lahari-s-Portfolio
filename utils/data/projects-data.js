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
        name: 'Diabetic Retinopathy Detection',
        description: 'Developed a full-stack web application using React.js and Node.js, ensuring a responsive system. Integrated machine learning with MongoDB for automated diabetic retinopathy detection from retina fundus images, reducing manual ophthalmologist screening by 45%.',
        tools: ['MongoDB', 'React JS', 'Express.js', 'Node.js','python','machine learning'],
        role: 'Full Stack Developer and Machine Learning Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Traffic Sign Recognition',
        description: 'Developed a deep neural network to classify traffic signs, a critical component for autonomous vehicles, and achieved a 95% accuracy rate for traffic sign recognition using an ensemble of CNN models.',
        tools: [ 'Python', 'Machine Learning', 'HTML', 'CSS'],
        code: '',
        role: 'Machine Learning Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'FICture',
        description: "Developed a campus lost-and-found web app using HTML, CSS, JavaScript, Bootstrap, Django, and SQLite, reducing user search time by 40%. Enhanced data security by 25% with robust user login methods, including email verification, showcasing expertise in web technologies.",
        tools: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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