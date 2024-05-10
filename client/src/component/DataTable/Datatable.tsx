import MUIDataTable from "mui-datatables";
import Navbar from "../Navbar/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import './DataTable.css'

const title = <h1 className="">ฐานข้อมูล</h1>

const columns = [
  { name: "data_id", label: "เลขที่" },
  { name: "data_date", label: "วัน เดือน ปี" },
  { name: "sent_by", label: "ผู้ส่ง" },
  { name: "sent_to", label: "ผู้รับ" },
  { name: "subject", label: "เรื่อง" },
  {
    name: "data_file",
    label: "ไฟล์",
    options: {
      customBodyRender: () => (
        <>
          <button
            className="btn btn-sm btn-warning "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            เพิ่มไฟล์
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">เพิ่มไฟล์</h3>
              <p className="py-4">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </p>
              <div className="modal-action">
                <button className="btn btn-success">เสร็จสิ้น</button>
                <form method="dialog">
                  <button className="btn btn-error">ปิด</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ),
    },
  },
  {
    name: "data_note",
    label: "หมายเหตุ",
    options: {
      customBodyRender: () => (
        <>
          <button
            className="btn btn-sm btn-accent "
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            เพิ่มหมายเหตุ
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">หมายเหตุ</h3>
              <p className="py-4">
                <textarea
                  className="textarea textarea-lg textarea-bordered"
                  placeholder="เพิ่มหมายเหตุ"
                ></textarea>
              </p>
              <div className="modal-action">
                <button className="btn btn-success">เสร็จสิ้น</button>
                <form method="dialog">
                  <button className="btn btn-error">ปิด</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ),
    },
  },
  {
    name: "action",
    label: "อัพเดต",
    options: {
      customBodyRender: (value) => (
        <button className="btn btn-info btn-sm">อัพเดต</button>
      ),
    },
  },
];

const options = {
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 20, 30],
};

export const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/info")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <center>
        <MUIDataTable 
          title={title}
          data={data}
          columns={columns}
          options={options}
        />
      </center>
    </>
  );
};
