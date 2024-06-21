import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      username: 'lam',
      password: '123123',
    },
    {
      id: 2,
      username: 'chris',
      password: 'secret',
    },
  ];

  findUser(username: string, password: string) {
    return this.users.find(
      (user) => user.username === username && user.password === password,
    );
  }
}
