import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getUserData function', () => {
    expect(service.getUserData).toBeTruthy();
  });

  it('should return users', () => {
    service.getUserData().subscribe(data => {
      expect(data.usersData.length).toBe(10);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
  });
});
