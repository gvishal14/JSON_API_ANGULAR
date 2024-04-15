import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import  DataTables from 'datatables.net';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit  {

  constructor(private student: StudentService){}
  studentData: any=[];
  // dtOptions: DataTables.Settings = {}
  // dtOptions: DataTables.Settings = {};
  ngOnInit(): void{
    // this.dtOptions={
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   lenghthMenu:[5,10,15],
    //   processing: true
    // }
    this.student.getAllStudent().subscribe((allData)=>{
      console.log(allData);
      this.studentData=allData;
    });
  }
  deleteStudent(student_id:any){
    console.log(student_id);
    this.student.deleteStudent(student_id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    })
  }
}
