import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{

  constructor(private student: StudentService){}
  addStudent = new FormGroup({
    name: new FormControl(''),
    email : new FormControl('')
});
message: boolean=false;
  ngOnInit():void{

  }
  SaveData(){
    // console.log(this.addStudent.value)
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      // console.log(result)
      this.message = true;
      this.addStudent.reset({});
    });
  }
  removeMessage(){
    this.message = false;
  }
}
