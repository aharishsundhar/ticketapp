import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public name = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.name.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.createService.GpCreate(this.name).subscribe(data => {
            this.name.name = ''
 	 	this.name.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}