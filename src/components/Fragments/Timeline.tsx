import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@/components/Elements/workIcon';
import EducationIcon from '@/components/Elements/educationIcon';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Dec, 2022 - Present"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelance Web Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Work From Anywhere
        </h4>
        <p>
          I'm Work Freelance Web Developer. I'm responsible for developing web
          applications and websites. and I'm open to full-time opportunities.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Aug, 2020 - Jul, 2024"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<EducationIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Graduated Bachelor's Degree
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Singaperbangsa Karawang
        </h4>
        <p>
          - Developing E-Library of task Pemrograman Berbasis Web Using PHP{' '}
          <br />
          - Assistant Lecturers for teaching <br />- Learning for OOP,
          Algorithms, Database Programming, Operating System, Web, Android And
          Machine Learning Developer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Des, 2022 - Feb, 2024"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Assistant Lecturer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Singaperbangsa Karawang
        </h4>
        <p>
          Assistant Lecturer in informatics engineering for teaching Framework
          Pemrograman Web.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Mar, 2023 - Aug, 2023"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Web Developer intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT Century Batteries Indonesia
        </h4>
        <p>
          - Developing Apps using Codeigniter4, SSMS and Mysql <br /> -
          Leveraged knowledge in Codeigniter4,SSMS, Mysql, Javascript, Jquery,
          Bootstraps, Data tables, React Native with WebView, Gitlab and Github.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Jan, 2023 - Mei, 2023"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Back End Developer intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Intelligo ID</h4>
        <p>-Maintenance with Laravel, Slim4, NuxtJS, dan VueJS</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        date="Jan, 2023 - May, 2023"
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Internship Trainee of Frontend and Backend
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Dicoding Indonesia
        </h4>
        <p>
          - Learning for Front End and Back End using Javascript, CSS, HTML,
          Sequalize, ExpressJS
          <br /> - Developing apps for submission project every material
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
