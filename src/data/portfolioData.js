// src/data/projectsData.js
import Weather from "../assets/images/projects/WeatherApp.png";
import ToDoList from "../assets/images/projects/To-doList.png";
import Mini from "../assets/images/projects/Mini-Ecommerce.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "แสดงผลสภาพอากาศปัจจุบันและพยากรณ์อากาศล่วงหน้า 5 วัน",
    image: Weather,
    technologies: ["CSS", "JavaScript", "HTML", "OpenWeather API"],
    demoUrl: "https://mrtanapat.github.io/weather-app/",
    githubUrl: "https://github.com/MrTanapat/weather-app.git",
    featured: true,
  },
  {
    id: 2,
    title: "My To-Do List",
    description:
      "โปรเจกต์นี้คือแอปพลิเคชัน To-Do List ที่พัฒนาด้วย React และ Vite โดยใช้ Container Pattern และ React Context API สำหรับการจัดการสถานะ (state)",
    image: ToDoList,
    technologies: ["HTML", "CSS", "React", "Vite"],
    demoUrl: "https://mrtanapat.github.io/ToDoList-App-Experiment2/",
    githubUrl: "https://github.com/MrTanapat/ToDoList-App-Experiment2",
    featured: false,
  },
  {
    id: 3,
    title: "Mini-Ecommerce",
    description:
      "สำหรับนักศึกษา Software Engineer 2 คน เพื่อฝึกฝน GitHub Workflow และ Collaboration",
    image: Mini,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mrtanapat.github.io/Mini-Ecommerce/",
    githubUrl: "https://github.com/MrTanapat/Mini-Ecommerce",
    featured: false,
  },
];

export default projects;
