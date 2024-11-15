export interface Category {
  _id: number;
  image: string;
  category: string;
  openPosition: string;
}
export interface Job {
  _id: number;
  image: string;
  title: string;
  remote_or_onsite: string;
  location: string;
  jobtype: string;
  salary: string;
  job_description: string;
  job_responsibility: string;
  educational_requirements: string;
  experiences: string;
  contact_information: {
    phone: string;
    email: string;
  };
}
export interface Form {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  imageUrl: string;
}