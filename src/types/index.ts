export interface Category {
  _id: string;
  image: string;
  category: string;
  openPosition: string;
}
export interface Job {
  _id: string;
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
  name: string;
}

export interface AppliedJobs {
  _id: string;
  jobId: string;
  image: string;
  title: string;
  remote_or_onsite: string;
  location: string;
  jobtype: string;
  salary: string;
  email: string;
}
