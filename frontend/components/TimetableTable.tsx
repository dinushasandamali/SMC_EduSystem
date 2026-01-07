import { Timetable } from "../types/Timetable";

export default function TimetableTable({ timetable }: { timetable: Timetable[] }) {
  return (
    <table border={1} width="100%">
      <thead>
        <tr>
          <th>Day</th>
          <th>Period</th>
          <th>Subject</th>
          <th>Teacher</th>
        </tr>
      </thead>
      <tbody>
        {timetable.map(t => (
          <tr key={t.id}>
            <td>{t.day}</td>
            <td>{t.period}</td>
            <td>{t.subject}</td>
            <td>{t.teacherName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
