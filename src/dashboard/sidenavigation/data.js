import HomeIcon from './icons/home';
import BillsIcon from './icons/bills';
import AnalyticsIcon from './icons/analytics';
import MonitoringIcon from './icons/monitoring';
import DemographicsIcon from './icons/demographics';
import ApplicationsIcon from './icons/applications';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Bills',
    icon: <BillsIcon />,
    link: '/admin/bills',
  },
  {
    title: 'Applications',
    icon: <ApplicationsIcon />,
    link: '/admin/applications',
  },
  {
    title: 'Monitoring',
    icon: <MonitoringIcon />,
    link: '/admin/monitoring',
  },
  {
    title: 'Demographics',
    icon: <DemographicsIcon />,
    link: '/admin/demographics',
  },
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
    link: '/admin/analytics',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
