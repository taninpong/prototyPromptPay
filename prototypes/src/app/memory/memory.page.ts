import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private memory: MemoryService) {
    this.fg = this.fb.group({
      'title': null,
      'streetAddress': null,
      'district': null,
      'city': null,
      'province': null,
      'postalCode': null,
      'phoneNumber': null,
      'remark': null,
    });
  }

  ngOnInit() {
  }

  onSave() {
    let msg = `บันทึกข้อมูล\n\nชื่อหัวข้อ: ${this.fg.get("title").value}\nที่อยู่: ${this.fg.get("streetAddress").value} ${this.fg.get("district").value} ${this.fg.get("city").value} ${this.fg.get("province").value} ${this.fg.get("postalCode").value}\nเบอร์ติดต่อ: ${this.fg.get("phoneNumber").value}\nหมายเหตุ: ${this.fg.get("remark").value}`
    alert(msg);

    this.memory.data = this.fg.value;
  }

  onLoad() {
    if (this.memory.data) {
      this.fg.setValue(this.memory.data);
    }
    else {
      alert("ไม่มีข้อมูลที่บันทึก")
    }
  }

}
