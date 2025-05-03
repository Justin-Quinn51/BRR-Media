import { useState, useEffect } from "react";

export default function StaffCard() {
  const [staffInfo, setStaffInfo] = useState([]);

  useEffect(() => {
    const fetchStaffInfo = async () => {
      const response = await fetch("/staff.json");
      const staffInfo = await response.json();
      console.log(staffInfo);
      setStaffInfo(staffInfo);
    };
    fetchStaffInfo();
  }, []);

  return (
    <>
      {staffInfo.map((staff) => (
        <div key={staff.id}>
          <p>{staff.name}</p>
          <p>{staff.role}</p>
          <p>{staff.email}</p>
          <p>{staff.status}</p>
        </div>
      ))}
    </>
  );
}
