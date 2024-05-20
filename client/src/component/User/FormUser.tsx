import { NavUser } from "./NavUser"

export const FormUser = () => {
    return(
        <>
        <NavUser />
        <center>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
  <div className="card-body">
    <div className="form-control">
      <h1 className="text-xl">ส่งเอกสาร</h1>
      <br />
<button className="btn btn-warning" onClick={()=>document.getElementById('my_modal_5').showModal()}>ส่งเอกสาร</button>
</div>
  </div>
</div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i className="fa-solid fa-xmark"></i></button>
    </form>
    <h3 className="font-bold text-xl">ระบบส่งเอกสาร</h3>
    <br />
    <label className="input input-bordered flex items-center gap2">
    วันที่ &nbsp;
    <input type="date" />
    </label>
    <br />
    <label className="input input-bordered flex items-center gap2">
    ชื่อผู้ส่ง &nbsp;
    <input type="text" placeholder="กรุณาระบุชื่อผู้ส่ง" />
    </label>
    <br />
    <label className="input input-bordered flex items-center gap2">
    ส่งถึง &nbsp;
    <input type="text" placeholder="กรุณาระบุชื่อผู้ที่จะส่งถึง" />
    </label>
    <br />
    <label className="input input-bordered flex items-center gap2">
    เรื่อง &nbsp;
    <input type="text" placeholder="กรุณาระบุชื่อเรื่อง" />
    </label>
    <br />
    <label className="input input-bordered flex items-center gap2">
    หมายเหตุ &nbsp;
    <input type="text" placeholder="กรุณาระบุหมายเหตุ" />
    </label>
    <br />
    <label className="form-control w-full max-w-xs">
  <div className="label ">
    <span className="label-text">เลือกไฟล์ที่จะส่ง</span>
  </div>
  <input type="file" className="file-input file-input-sm file-input-bordered w-full max-w-xs" />
</label>
<br />

      <button className="btn btn-success btn-block">ส่งข้อมูล</button>
    <br />
  </div>
</dialog>
</center>
        </>
    )
}