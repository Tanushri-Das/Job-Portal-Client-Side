export interface Category {
  _id: string;
  image: string;
  category: string;
  openPosition: string;
}
export interface Job {
  _id: string;
  image: string;
  role: string;
  location: string;
  office_location: string;
  job_type: string;
  salary: string;
  job_description: string;
  job_responsibility: string;
  educational_requirements: string;
  experience: string;
  contact_information: {
    phone: string;
    email: string;
  };
}
export interface SearchJob {
  role: string;
  type: string;
  location: string;
  experience: string;
}

export interface Form {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  imageUrl: string;
  name: string;
}

export interface AppliedJobs {
  _id: string;
  jobId: string;
  image: string;
  role: string;
  location: string;
  office_location: string;
  job_type: string;
  salary: string;
  email: string;
}
export type Company = {
  _id: string;
  image: string;
};
export type Review = {
  _id: string;
  image: string;
  name: string;
  rating: number;
  review: string;
};
export type ButtonProps = {
  name: string;
  onClick?: () => void;
};
export type Contact={
  name: string,
  email: string,
  message: string,
}