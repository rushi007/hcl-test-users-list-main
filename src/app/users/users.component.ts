import { Component, OnInit } from '@angular/core';
import { FilterOption } from './filter-option.interface';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { map, withLatestFrom, startWith, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public filterFormGroup: FormGroup;
  public filterText: AbstractControl;
  public filterOptions: AbstractControl;
  public filterOption: string;

  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];

  usersData: Observable<any>;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) { 
    this.filterFormGroup = formBuilder.group({
      filterText: [''],
      filterOptions: ['']
    });
    this.filterText = this.filterFormGroup.controls['filterText'];
    this.filterOptions = this.filterFormGroup.controls['filterOptions'];
  }

  ngOnInit(): void {
    this.usersData = this.userService.getUserData();
  }
  
  changeFilterOption(option: string) {
    this.filterOption = option;
  }

}
