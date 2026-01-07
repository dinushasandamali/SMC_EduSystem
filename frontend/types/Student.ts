// DTO for sending to backend
export interface StudentDTO {
  id?: number;           // student ID for updates
  fullName: string;
  gender: string;
  admissionNo: string;
  dateOfBirth: string;   // format: YYYY-MM-DD
  startDate: string;     // format: YYYY-MM-DD
  endDate: string;       // format: YYYY-MM-DD
  classRoomId: number;   // send only the ID to backend
}

// Type used for displaying in frontend table
export interface Student {
  id?: number;
  fullName: string;
  gender: string;
  admissionNo: string;
  dateOfBirth: string;
  startDate: string;
  endDate: string;
  classRoom?: {
    id: number;
    name: string;
    grade: number;
  }; // full classroom object for display
}
