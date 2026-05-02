import { Link } from 'react-router-dom';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department: string;
}

const JobCard = ({ title, location, type }: JobCardProps) => {
  return (
    <div className="py-6 px-8 mb-4 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row md:justify-between items-start">
        <div className="mb-6 sm:mb-0">
          <h4 className="text-xl font-medium mb-3">{title}</h4>
          <div className="inline-flex mr-8 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="ml-2 font-medium text-gray-900">{location}</span>
          </div>
          <div className="inline-flex items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="ml-2 font-medium text-gray-900">{type}</span>
          </div>
        </div>
        <Link className="inline-flex ml-auto group items-center text-lg text-black hover:text-lime-600 transition duration-100" to="/contact">
          <span className="mr-1 font-medium">Başvur</span>
          <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-100">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 13.75L13.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M6.25 6.25H13.75V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;